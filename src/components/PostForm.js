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

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.title || !this.state.description){
            this.setState(() => ({ error: 'Please provide title and description'}));
        } else {
            this.setState(() => ({ error: ''}))

            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description,
             });
        }
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                   type="text"
                   className="post-title" 
                   placeholder="Post title" 
                   autoFocus
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
