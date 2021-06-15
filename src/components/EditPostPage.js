import React from 'react';
import { connect } from 'react-redux';
import PostFrom from './PostForm';

export class EditPostPage extends React.Component {

    onSubmit = (post) => {
        this.props.startEditPost(this.props.post.id, post);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.startRemovePost({ id: this.props.post.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Post</h1>
                    </div>
                </div>

                <div className="content-container">
                    <PostForm 
                        onSubmit={this.onSubmit}
                    />

                    <button className="button button--secondary" onClick={this.onRemove}>Remove Post</button>
                </div>
            
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {

}

const mapDispatchToProps = (dispatch) => ({
    startEditPost = (id, post) => dispatch(startEditPost(id, post)),
    startRemovePost = (data) => dispatch(startRemovePost(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);