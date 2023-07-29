import { jsonplaceholder } from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
    const posts = await jsonplaceholder();
    const listPosts = await posts.json();

    dispatch({ type: 'FETCH_POSTS', payload: listPosts });
}