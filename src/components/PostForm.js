import React from 'react';

export default class PostForm extends React.Component {
 
    render(){
        return(
            <div>
                <input className="post-title" placeholder="Post title" required></input>
                <textarea className="post-description" placeholder="Post description" required></textarea> 
                <button className="button">Save Post</button>
            </div>
        )
    }
    
}
