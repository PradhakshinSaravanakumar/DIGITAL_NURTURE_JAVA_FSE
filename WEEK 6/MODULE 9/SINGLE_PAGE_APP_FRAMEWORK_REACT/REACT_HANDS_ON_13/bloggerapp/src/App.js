import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./App.css";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div className="App">

            <h1>Blogger App</h1>

            {/* Method 1 - if using && */}

            {showBooks && <BookDetails />}

            {/* Method 2 - Ternary */}

            {showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

            {/* Method 3 - Element Variable */}

            {(() => {

                let component;

                if (showCourses) {

                    component = <CourseDetails />;

                } else {

                    component = <h3>No Courses Available</h3>;

                }

                return component;

            })()}

        </div>

    );

}

export default App;