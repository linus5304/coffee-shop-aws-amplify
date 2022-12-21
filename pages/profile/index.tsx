import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  Avatar, Box,
  Button, Flex, Text,
  VStack, WrapItem
} from "@chakra-ui/react";
import { Storage } from "aws-amplify";
import { Form, Formik, useFormik } from "formik";
import Link from "next/link";
import React, { useEffect } from "react";
import { InputField } from "../../components/InputField";
import { OrderItem } from "../../components/OrderItem";
import { CreateUserInput } from "../../src/API";
import {
  createUserProfile, getUserProfile
} from "../../store/api";
import useStore from "../../store/store";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  const { user } = useAuthenticator(ctx => [ctx.user]);
  const { userOrders, setUserOrder, categoryList, setCategoryList } = useStore();

  const initialValues: Omit<CreateUserInput, "id  "> = {
    address: "",
    authToken: user ? user.username : "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    profilePictureUrl: "",
    telephone: "",
  };
  const { values: formValue, setFieldValue } = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  let fileInput = React.createRef<HTMLInputElement>();

  const onOpenFileDialog = () => {
    fileInput.current.click();
  };

  const onProcessFile = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    try {
      reader.readAsDataURL(file);
    } catch (err) {
      console.log(err);
    }
    reader.onloadend = () => {
      setFieldValue("profilePictureUrl", reader.result as string);
    };
    Storage.put(user.username, file, {
      contentType: "image/png",
    })
      .then(result => console.log("image key", result))
      .catch(err => console.log(err));
  };

  const onPageRendered = async () => {
    getProfilePicture();
  };

  const getProfilePicture = () => {
    Storage.get(user.username)
      .then(url => {
        var myRequest = new Request(url);
        fetch(myRequest).then(function (response) {
          console.log("response", response);
          if (response.status === 200) {
            setFieldValue("profilePictureUrl", url);
          }
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (user) {
      setUserOrder(user.username);
      onPageRendered();
      getUserProfile(user.username);
      setCategoryList(user.username)
    }
  }, [user]);

  return (
    <>
      {user && (
        <Flex direction="column" height="100vh">
          <Text fontSize="4xl" fontWeight="bold">
            My Profile
          </Text>
          <Flex gap={10}>
            <Box flex={1}>
              <Formik
                initialValues={initialValues}
                onSubmit={(data, { resetForm, setFieldValue }) => {
                  setFieldValue('profilePictureUrl', formValue.profilePictureUrl)
                  createUserProfile(data);
                  resetForm();
                }}
              >
                {({ values }) => {
                  return (
                    <Form>
                      <WrapItem>
                        <Avatar
                          size="2xl"
                          name="Prosper Otemuyiwa"
                          src={formValue.profilePictureUrl}
                          onClick={() => onOpenFileDialog()}
                          style={{ cursor: "pointer" }}
                          shadow="xl"
                        />{" "}
                        <input
                          type="file"
                          ref={fileInput}
                          hidden
                          onChange={onProcessFile}
                        />
                      </WrapItem>
                      <VStack spacing={4} alignItems="flex-start">
                        <InputField
                          name="firstName"
                          placeholder="First name"
                          label="First name"
                        />
                        <InputField
                          name="lastName"
                          placeholder="Last name"
                          label="Last name"
                        />
                        <InputField
                          name="address"
                          placeholder="Address"
                          label="Address"
                        />
                        <Button variant="brandSecondary" type="submit" textTransform="capitalize">
                          Update profile
                        </Button>
                      </VStack>
                    </Form>
                  );
                }}
              </Formik>
            </Box>
            <Flex flex={1} gap={4} flexDir="column" overflow="auto">
              <Text fontSize="2xl">My orders</Text>
              {userOrders && userOrders.length > 0 ? (
                userOrders.map(item => (
                  <Link href={`/order/${item.id}`} key={item.id}>
                    <OrderItem
                      id={item.id}
                      orderDate={item.orderDate}
                      total={item.total}
                      orderDetails={item.orderDetails}
                    />
                  </Link>
                ))
              ) : (
                <></>
              )}
              <Text fontSize="2xl">My Categories</Text>
              {categoryList && categoryList.length > 0 ? (
                categoryList.map(item => (
                  <Link href={`/order/${item.id}`} key={item.id}>
                    <OrderItem
                      id={item.id}
                      orderDate={item.name}
                    />
                  </Link>
                ))
              ) : (
                <></>
              )}
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Profile;
