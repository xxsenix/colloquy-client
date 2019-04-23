import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './create-post.css';

export function CreatePost(props) {

    return (
    <main role="main" className="auth-main">
        <fieldset className="auth-fieldset">
          <form className="auth-form">
            <div className="input-wrapper">
              <label for="category" className="auth-label">category</label>
              <div className="select-wrapper">
                <select name="category" type="select" className="category-select">
                  <option value="politics">politics</option>
                  <option value="politics">programming</option>
                  <option value="politics">movies</option>
                  <option value="politics">sports</option>
                </select>
              </div>
            </div>
            <div className="input-wrapper">
              <label for="title" className="auth-label">title</label>
              <input
                name="title"
                type="text"
                placeholder="title"
                autocomplete="off"
                className="auth-input"
              />
            </div>
            <div className="input-wrapper">
              <label for="text" className="auth-label"
                >What do you want to say?</label
              >
              <textarea
                name="text"
                rows="6"
                placeholder="keep it clean :)"
                className="create-post-text"
              ></textarea>
            </div>
            <button type="submit" className="auth-submit-button">create post</button>
          </form>
        </fieldset>
      </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreatePost);
