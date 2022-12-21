import React from "react";

interface CardProps {
    amount: number
}

export const Card: React.FC<CardProps> = ({amount}) => {
    let jsx = ''
    for(let i = 0; i< amount; i++){
        jsx += <div id="card"> </div>
    }
    return <>{jsx}</>
};

document.body.innerHTML = "<div id='root'> </div>"

const rootElement = document.getElementById("root")


