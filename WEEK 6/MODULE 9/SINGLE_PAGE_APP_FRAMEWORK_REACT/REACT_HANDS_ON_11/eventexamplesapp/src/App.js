import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";
import "./App.css";

function App() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function sayHello() {
        alert("Hello! Welcome to React.");
    }

    function increase() {
        increment();
        sayHello();
    }

    function sayWelcome(message) {
        alert(message);
    }

    function handleClick() {
        alert("I was clicked");
    }

    return (

        <div className="App">

            <h1>Event Examples App</h1>

            <h2 className="counter">Counter : {count}</h2>
            <button onClick={increase}>
                Increment
            </button>

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

            <br /><br />

            <button onClick={handleClick}>
                OnPress
            </button>

            <hr />

            <CurrencyConvertor />

        </div>

    );
}

export default App;