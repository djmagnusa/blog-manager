import React from 'react';
import { connect } from 'react-redux';

const PostList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div> 
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>

        <div className="list-body">
            {
                props.posts.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No posts</span>
                </div>
                ) : (
                    props.posts.map((post) => {
                        // return <PostListItem key={post.id} {...post} />
                    })
                )
            }
        </div>

    </div>
)

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostList);