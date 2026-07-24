import React, { useState } from "react";
import Guest from "./Guest";
import User from "./User";
import "./App.css";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <div className="App">

            <h1>Ticket Booking App</h1>

            {
                isLoggedIn ?

                    <button onClick={() => setIsLoggedIn(false)}>
                        Logout
                    </button>

                    :

                    <button onClick={() => setIsLoggedIn(true)}>
                        Login
                    </button>

            }

            <hr />

            {
                isLoggedIn ?

                    <User />

                    :

                    <Guest />
            }

        </div>

    );

}

export default App;