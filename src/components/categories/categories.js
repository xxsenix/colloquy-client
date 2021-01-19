import React from "react";
import { Link } from "react-router-dom";
import "./categories.css";

const Categories = (props) => {
  let categories = ["all", "politics", "programming", "movies", "sports"];

  return (
    <section className="categories">
      <h3 className="categories-header">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} to={category === "all" ? "/" : `/c/${category}`}>
          <div
            className={
              category === props.match.params.category ||
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
};

export default Categories;

// export default class Categories extends React.Component {
//   render() {
//     let categories = ["all", "politics", "programming", "movies", "sports"];

//     return (
//       <section className="categories">
//         <h3 className="categories-header">Categories</h3>
//         {categories.map((category, index) => (
//           <Link key={index} to={category === "all" ? "/" : `/c/${category}`}>
//             <div
//               className={
//                 category === this.props.match.params.category ||
//                 (category === "all" && window.location.pathname === "/")
//                   ? "selected"
//                   : "unselected"
//               }
//             >
//               <p>{category}</p>
//             </div>
//           </Link>
//         ))}
//       </section>
//     );
//   }
// }
