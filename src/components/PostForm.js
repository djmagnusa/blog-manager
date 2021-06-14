import React from 'react';

export default class PostForm extends React.Component {
 
    constructor(props){

        super(props);

        this.state = {

            title : props.post ? props.post.title : '',
            description : props.post ? props.post.description : '',
            error : ''

        };
    };


    render(){
        return(
            <form>
                <input 
                   className="post-title" 
                   placeholder="Post title" 
                   autofocus
                   value={this.state.title}
                   onChange={this.onTitleChange}
                />

                <textarea 
                   className="post-description" 
                   placeholder="Post description" 
                   value={this.state.description}
                   onChange={this.onDescriptionChange}
                />

                <button className="button">Save Post</button>
            </form>
        )
    }
    
}
