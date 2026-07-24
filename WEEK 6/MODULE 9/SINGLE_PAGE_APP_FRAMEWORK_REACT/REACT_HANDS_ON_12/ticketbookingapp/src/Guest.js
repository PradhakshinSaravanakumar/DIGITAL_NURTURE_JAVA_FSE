import React from "react";

function Guest() {
    return (
        <div className="card">
            <h2>Guest Page</h2>

            <h3>Available Flights</h3>

            <table>
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI101</td>
                        <td>Chennai</td>
                        <td>Delhi</td>
                    </tr>

                    <tr>
                        <td>AI205</td>
                        <td>Bangalore</td>
                        <td>Mumbai</td>
                    </tr>

                    <tr>
                        <td>AI310</td>
                        <td>Hyderabad</td>
                        <td>Kolkata</td>
                    </tr>
                </tbody>
            </table>

            <p>Please Login to Book Tickets.</p>

        </div>
    );
}

export default Guest;