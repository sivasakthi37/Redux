import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { createPost } from '../action/postaction';
// import PropTypes from 'prop-types';
import Childcomponent from './childcomponent';
import showResults from '../ShowResult';
/**
 * @description:This Component is for Login UI.. 
 */
class PostForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        // fetch('http://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(post)
        // })
        //     .then(res => res.json())
        //     .then(data => console.log("dataaa in post form-->", data)
        //     )
        this.props.createPost(post);
    }
    render() {

        return (
            <div>
                <h1>add form</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label>
                        <br />
                        <textarea
                            name="body"
                            onChange={this.onChange}
                            value={this.state.body}
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <Childcomponent onSubmit={showResults}  />
            </div>
        )
    }
}
// PostForm.propTypes = {
//     createPost: PropTypes.func.isRequired
//   };
const mapStateToProps = state => ({

    post: state.posts.items,
    newPost: state.posts.item
});


export default connect( mapStateToProps, { createPost })(PostForm);
// export default Post;