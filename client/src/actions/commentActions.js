import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, COMMENTS_LOADING } from '../actions/types';
import axios from 'axios';

const commentUrl = '/api/comments'
export const getComments = () => dispatch => {
  dispatch(setCommentsLoading());
  axios.get(commentUrl)
    .then(res =>
      dispatch({
        type: GET_COMMENTS,
        payload: res.data
      })
    )
}

export const addComment = newComment => dispatch => {
  axios.post(commentUrl, newComment)
    .then(res =>
      dispatch({
        type: ADD_COMMENT,
        payload: res.data
      }))
}

export const deleteComment = id => dispatch => {
  axios.delete(`${commentUrl}/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_COMMENT,
        payload: id
      }))
}

export const setCommentsLoading = () => {
  return {
    type: COMMENTS_LOADING
  }
}