import React from 'react';

export default function CommentForm(props) {

    return (
        <div class="new-comment-wrapper">
            <form class="new-comment-form">
                <textarea name="comment" placeholder="enter your comment" rows="2" class="input-comment"></textarea>
                <button type="submit" class="new-comment-button">submit</button>
            </form>
        </div>
    );
}
