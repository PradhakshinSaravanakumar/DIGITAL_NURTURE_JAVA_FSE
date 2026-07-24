import React from "react";

function BookDetails() {

    const books = [
        {
            id: 1,
            name: "React Guide",
            author: "Jordan",
            price: 650
        },
        {
            id: 2,
            name: "Java Programming",
            author: "James",
            price: 550
        },
        {
            id: 3,
            name: "Python Basics",
            author: "Guido",
            price: 700
        }
    ];

    return (

        <div className="card">

            <h2>Book Details</h2>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>

                    {books.map(book => (

                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>₹{book.price}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default BookDetails;