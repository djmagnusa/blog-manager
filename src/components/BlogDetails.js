import React from 'react';
import {connect} from 'react-redux';
import selectPosts from '../selectors/posts';

export const BlogDetails = ({ postCount }) => {

    const postWord = postCount === 1 ? 'post' : 'posts';

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">You currently have <span>{postCount}</span> active <span>{postWord}</span></h1>
            </div>
        </div>
    );
};


const mapStateToProps = (state) =>{
    const visiblePosts = selectPosts(state.posts, state.filters)


    return {
        postCount: visiblePosts.length
    }
}


export default connect(mapStateToProps)(BlogDetails);