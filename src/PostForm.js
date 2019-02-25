import React, { Component } from 'react';

class PostForm extends Component {
    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form>
                    <input required type="text" placeholder="Post title" />
                    <br />
                    <textarea required rows="5" cols="20" placeholder="enter post" />
                    <br />
                    <button>POST</button>
                </form>
            </div>
        )
    }
}

export default PostForm;