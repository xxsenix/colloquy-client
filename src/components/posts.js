import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './posts.css';

export function Posts(props) {
    // If we are logged in redirect straight to the user's dashboard
    // if (props.loggedIn) {
    //     return <Redirect to="/dashboard" />;
    // }

    return (
        <section className="posts">
          <ul>
            <li className="item">
                <div className="post-wrapper">
                <div className="voting-box">
                    <div className="voting-box-content">
                    <i className="fas fa-angle-up"></i><span>30</span
                    ><i className="fas fa-angle-down"></i>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="title-wrapper">
                    <a href="#">
                        [Dale] Larry Fitzgerald on Josh Rosen: "It's unfair to
                        really judge him based on what you saw last year."</a
                    >
                    </div>
                    <div className="details-wrapper">
                    <a href="#"><i className="fas fa-comments"></i> 13 comments </a>
                    <a href="#"> /sports </a>
                    <p>by user1</p>
                    </div>
                </div>
                </div>
            </li>
            <li className="item">
                <div className="post-wrapper">
                <div className="voting-box">
                    <div className="voting-box-content">
                        <i className="fas fa-angle-up"></i><span>30</span
                        ><i className="fas fa-angle-down"></i>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="title-wrapper">
                    <a href="#">
                        [Dale] Larry Fitzgerald on Josh Rosen: "It's unfair to
                        really judge him based on what you saw last year."</a
                    >
                    </div>
                    <div className="details-wrapper">
                    <a href="#"><i class="fas fa-comments"></i> 13 comments </a>
                    <a href="#"> /sports </a>
                    <p>by user1</p>
                    </div>
                </div>
                </div>
            </li>
            <li className="item">
                <div className="post-wrapper">
                <div className="voting-box">
                    <div className="voting-box-content">
                        <i className="fas fa-angle-up"></i><span>30</span
                        ><i className="fas fa-angle-down"></i>
                        </div>
                </div>
                <div className="content-wrapper">
                    <div className="title-wrapper">
                    <a href="#">
                        [Dale] Larry Fitzgerald on Josh Rosen: "It's unfair to
                        really judge him based on what you saw last year."</a
                    >
                    </div>
                    <div className="details-wrapper">
                    <a href="#"><i className="fas fa-comments"></i> 13 comments </a>
                    <a href="#"> /sports </a>
                    <p>by user1</p>
                    </div>
                </div>
                </div>
            </li>
        </ul>
    </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Posts);
