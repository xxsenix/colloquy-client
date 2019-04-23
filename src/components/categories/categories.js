import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './categories.css';

export default function Categories() {
  
    return (
        <section className="categories">
            <h3 className="categories-header">Categories</h3>
            <Link to="/"><div className="all category-name"><p>All</p></div></Link>
            <Link to="/dashboard/politics"><div className="politics category-name">Politics</div></Link>
            <Link to="/dashboard/programming"><div className="programming category-name">Programming</div></Link>
            <Link to="/dashboard/movies"><div className="movies category-name">Movies</div></Link>
            <Link to="/dashboard/sports"><div className="sports category-name">Sports</div></Link>
        </section>
    );
}

