import React from "react";

function User() {

    return (

        <div className="card">

            <h2>User Page</h2>

            <h3>Book Your Ticket</h3>

            <table>

                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>AI101</td>
                        <td>Chennai</td>
                        <td>Delhi</td>
                        <td>
                            <button>Book</button>
                        </td>
                    </tr>

                    <tr>
                        <td>AI205</td>
                        <td>Bangalore</td>
                        <td>Mumbai</td>
                        <td>
                            <button>Book</button>
                        </td>
                    </tr>

                </tbody>

            </table>

        </div>

    );
}

export default User;