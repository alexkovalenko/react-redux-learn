import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPostById, deletePostById} from '../actions'

class PostViewer extends Component {

    componentDidMount() {
        const {fetchPostById, match: {params: {id}}, post} = this.props;
        if (!post && id) {
            fetchPostById(id);
        }
    }

    render() {
        return (
            <div>
                <Link to="/">Go back</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                {this.renderPost()}
            </div>
        );
    }

    onDeleteClick() {
        const {deletePostById, match: {params: {id}}, post, history} = this.props;
        if (post && id) {
            deletePostById(id, () => history.push('/'));
        }
    }

    renderPost() {
        const {post} = this.props;
        return post ? (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        ) : (<div>Loading...</div>);
    }
}

function mapStateToProps({posts}, {match: {params: {id}}}) {
    return {
        post: posts[id]
    }
}

export default connect(mapStateToProps, {fetchPostById, deletePostById})(PostViewer);