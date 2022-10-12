import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container">
                <h1 className='py-3 border-bottom'>Blogs</h1>
                <div className="bg-dark text-light my-4 py-3 px-5 rounded">
                    <h2>What is the purpose of React Router?</h2>
                    <h6>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</h6>
                </div>
                <div className="bg-dark text-light my-4 py-3 px-5 rounded">
                    <h2>How does Context API works?</h2>
                    <h6>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests itusually you are only able to pass data from parent to child via props.</h6>
                </div>
                <div className="bg-dark text-light my-4 py-3 px-5 rounded">
                    <h2>Discussion about useRef</h2>
                    <h6>The useRef Hook allows to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.</h6>
                </div>
            </div>
        </div>
    );
};

export default Blog;