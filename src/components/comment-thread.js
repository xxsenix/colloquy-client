import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Post from './post';
import CommentForm from './comment-form';
import CommentList from './comment-list';
import Categories from './categories';
import Profile from './profile';
import './comment-thread.css';

export class CommentThread extends React.Component {

    render() {
        let categories;
        let profile;

        if (this.props.loggedIn) {
            categories = (
                <Categories />
            )

            profile = (
                <Profile />
            )
        }

        return (
        <main role="main" className="landing-main">
            <div className="comment-component-wrapper">
                <section className="posts">
                    <ul className="posts-list">
                        <Post />
                    </ul>
                </section>
                <CommentForm />
                <CommentList />
            </div>
            <div className="right">
                {categories}
                {profile}
            </div>
        </main>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CommentThread);