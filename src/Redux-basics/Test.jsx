import React from 'react';


const Sayhello = () => {
    return "text-center";
}

const numbers = [1, 2, 3, 4, 5, 6, 7]


const Test = (props) => {
    return (
        <div className="container">
            <h1 className={Sayhello()} >Hell is real</h1>
            {props.children}
            {numbers.map(number => <li key={number}>Number is {number * number}</li>)}
        </div>

    )
}
export default Test;