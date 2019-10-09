import { FETCH_POSTS, NEW_POST } from './type';

export const fetchPosts = (par) => (dispatch) => {
     console.log("fetching-->",par);
    
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((posts) =>{
        console.log("post==>",posts);      
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    }
    );
};

export const createPost = (postData) => dispatch => {
    console.log("triggered",postData);
    
    dispatch({
            type: NEW_POST,
            payload: postData
          })

  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify(postData)
  // })
  //   .then(res => res.json())
  //   .then((post) =>{
  //       console.log("triggered");
  //     dispatch({
  //       type: NEW_POST,
  //       payload: post
  //     })
  //       }    );
};