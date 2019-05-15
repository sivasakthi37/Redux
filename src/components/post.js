import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {fetchPosts} from '../action/postaction';

class Post extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         post: []
    //     };
    // }
    componentDidMount() {
        // fetch('http://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then((data) => {
        //         console.log("dataaa in post -->", data);
        //         this.setState({ post: data })

        //     });
        this.props.fetchPosts();
       console.log("this.props.post",this.props.post);
    }

    render() {

        var postitem = this.props.post.map(post => (

            <div>
                <h3>
                    {post.title}

                </h3>
              <p>  {post.body} </p>
            </div>
        ));
        return (
            <div>
                <p>{ postitem }</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    
    post: state.posts.items,
    // newPost: state.posts.item
  });
  


  export default connect(mapStateToProps, { fetchPosts })(Post);
// export default Post;