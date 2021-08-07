import React from 'react';
import {connect} from 'react-redux';
import selectPosts from '../selectors/posts';

export const BlogDetails = ({ postCount }) => {

    const postWord = postCount === 1 ? 'post' : 'posts';

    return (
        <div className="page-header">
            <div className="content-container">
                <div className="page-header__title">You currently have {postCount} active {postWord}</div>
            
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