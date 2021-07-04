import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostListItem = ({ id, title, description, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
             <h3 className="list-item__title">{title}</h3>
             <span className="list-item__sub-title">{description}</span>
        </div>

        <h3 className="list-item__data">{moment(createdAt).format('MMMM Do, YYYY')}</h3>
    
    </Link>
)

export default PostListItem;