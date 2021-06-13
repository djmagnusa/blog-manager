import React from 'react';
// import PostForm from './PostForm';

class AddPostPage extends React.Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Create Post</h1>
                    </div>
                </div>

                <div className="content-container">
                    <input className="post-title" placeholder="Post title"></input>
                    <textarea className="post-description" placeholder="Post description"></textarea> 
                    <button className="button">Save Post</button>
                </div>
            
            </div>
        );

    }
}

export default AddPostPage;