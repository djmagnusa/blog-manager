import uuid from 'uuid';

// CREATE_POST
export const createPost = (
  {
    title = '',
    description = '',
    createdAt = 0
  } = {}
) => ({
  type: 'CREATE_POST',
  post: {
    id: uuid(),
    title,
    description,
    createdAt
  }
});

// REMOVE_POST
export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id
});

// EDIT_POST
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
});
