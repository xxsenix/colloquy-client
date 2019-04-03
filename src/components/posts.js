import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Post from './post';
import './posts.css';

export default function Posts(props) {

    return (
        <section className="posts">
            <ul className="posts-list">
                <Post />
                <Post />  
                <Post />  
                <Post />  
                <Post />     
            </ul>
        </section>
    );
}
