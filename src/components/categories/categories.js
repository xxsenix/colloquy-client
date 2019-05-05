import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './categories.css';

export function Categories(props) {
  
    return (
        <section className="categories">
            <h3 className="categories-header">Categories</h3>
            <Link to="/"><div className="all category-name"><p>All</p></div></Link>
            <Link to="/c/politics"><div className="politics category-name">Politics</div></Link>
            <Link to="/c/programming"><div className="programming category-name">Programming</div></Link>
            <Link to="/c/movies"><div className="movies category-name">Movies</div></Link>
            <Link to="/c/sports"><div className="sports category-name">Sports</div></Link>
            {/* <Link to="/"><div className={props.selected === "all" ? "all category-name" : "category-name"}><p>All</p></div></Link>
            <Link to="/"><div className="all category-name"><p>All</p></div></Link> */}
        </section>
    );
}

const mapStateToProps = state => {
    return {
        bgColor: state.categories.bgColor,
        selected: state.categories.selected
    };
};

export default connect(mapStateToProps)(Categories);