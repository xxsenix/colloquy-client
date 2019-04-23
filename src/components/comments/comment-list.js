import React from 'react';

export default function CommentList(props) {

    return (
        <ul class="comment-list">
            <li class="comment-item">
                <div class="comment-wrapper">
                    <div class="commented-by-wrapper">
                        <a class="author" href="#">user1</a>
                        <span class="timestamp">6 mins ago</span>
                    </div>
                    <div class="comment-content-wrapper">
                        <div class="comment-content">
                            <p>Thanks!</p>
                        </div>
                    </div>
                </div>
            </li>                
            <li class="comment-item">
                <div class="comment-wrapper">
                    <div class="commented-by-wrapper">
                        <a class="author" href="#">user2</a>
                        <span class="timestamp">12 mins ago</span>
                    </div>
                    <div class="comment-content-wrapper">
                        <div class="comment-content">
                            <p>Cool post, dude!</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
}
