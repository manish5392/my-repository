import React, {useState, useEffect} from 'react';
import './style.css';

const HooksTest = () => {
    const [count, setCount] = useState(10);
    console.log('functional');
    useEffect(() => {
        console.log("useEffect has been called!", count); //componentDidMount
        return () => {
            console.log('unmount'); // componentWillUnmount
        }
    }, []);                     // passing empty array ensures that it will render only once at the time of mounting
    useEffect(() => {
        console.log('update');  // componentDidUpdate
    });
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            <div>{count}</div>
        </div>
    )
}

export default HooksTest;

/*
import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
    const [button, setButton] = useState("");

    const [blogPosts, setBlogPosts] = useState([
        { title: "Learn useState Hook", id: 1 },
        { title: "Learn useEffect Hook", id: 2 }
    ]);

    useEffect(() => {
        console.log("useEffect has been called! button", button);
    }, [button]);

    useEffect(() => {
        console.log("useEffect has been called! blog", blogPosts);
    }, [blogPosts]);

    const onYesPress = () => {
        setButton("Yes");
    };

    const onNoPress = () => {
        setButton("No");
    };


    const onAddPosts = () => {
        setBlogPosts([...blogPosts, { title: "My new post" }]);
    };

    return (
        <div>
            <button onClick={() => onYesPress()}>Yes</button>
            <button onClick={() => onNoPress()}>No</button>
            <ul>
                {blogPosts.map((blogPost, index) => {
                    return <li key={index}>{blogPost.title}</li>;
                })}
            </ul>
            <button onClick={() => onAddPosts()}>Add Posts</button>
        </div>
    );
};

export default UseEffectExample;*/
