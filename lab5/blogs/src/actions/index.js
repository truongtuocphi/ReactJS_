import { jsonplaceholder } from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/post');
    dispatch({ type: 'FETCH_POSTS', payload: response });
}