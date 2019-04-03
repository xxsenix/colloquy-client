import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './categories.css';

export function Categories(props) {
    // If we are logged in redirect straight to the user's dashboard
    // if (props.loggedIn) {
    //     return <Redirect to="/dashboard" />;
    // }

    return (
        <section className="categories">
            <h3 className="categories-header">Categories</h3>
            <div className="all category-name"><p>All</p></div>
            <div className="politics category-name">Politics</div>
            <div className="programming category-name">Programming</div>
            <div className="movies category-name">Movies</div>
            <div className="sports category-name">Sports</div>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Categories);
