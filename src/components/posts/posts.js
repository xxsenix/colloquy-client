import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { getAllPosts, getPostsByCategory } from '../../actions/posts';
import Post from './post';
import Spinner from 'react-spinkit';
import './posts.css';

export class Posts extends React.Component {

    isLoading() {
        if(this.props.loading) {
            return (
                <Spinner
                  name="three-bounce"
                  style={{
                      display: "flex",
                      color: "#ffffff",
                      justifyContent: "center",
                      margin: "40px"
                  }}
                />  
            )
        }
    }

    componentDidMount() {
        this.props.dispatch(getAllPosts());
    }

    render() {
        let posts = this.props.posts;

        return (
            <section className="posts">
                {this.isLoading()}
                <ul className="posts-list">
                    <Post posts={posts} />
                </ul>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        loading: state.posts.loading
    };
};

export default connect(mapStateToProps)(Posts);