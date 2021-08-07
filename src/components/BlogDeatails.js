import React from 'react';
import {connect} from 'react-redux';
import selectPosts from '../selectors/posts';

export const BlogDetails = ({ postCount }) => {


};


const mapStateToProps = (state) =>{
    const visiblePosts = selectPosts(state.posts, state.filters)


    return {
        postCount: visiblePosts.length
    }
}


export default connect(mapStateToProps)(BlogDetails);