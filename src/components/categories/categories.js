import React from "react";
import { Link } from "react-router-dom";
import "./categories.css";

export default class Categories extends React.Component {
  render() {
    let categories = ["all", "politics", "programming", "movies", "sports"];

    return (
      <section className="categories">
        <h3 className="categories-header">Categories</h3>
        {categories.map((category, index) => (
          <Link key={index} to={category === "all" ? "/" : `/c/${category}`}>
            <div
              className={
                // category === window.location.pathname.substring(3) ||
                category === this.props.match.params.category ||
                (category === "all" && window.location.pathname === "/")
                  ? "selected"
                  : "unselected"
              }
            >
              <p>{category}</p>
            </div>
          </Link>
        ))}
      </section>
    );
  }
}
