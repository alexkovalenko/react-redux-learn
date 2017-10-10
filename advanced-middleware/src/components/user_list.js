import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class UserList extends Component {

    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser(user) {
        return (
            <div className="card card-block" key={user.id}>
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">{user.}</p>
                <a className="btn btn-primary">Email</a>
            </div>
        );
    }

    render() {
        return (
            <div className="user-list">
                {this.props.users.map(this.renderUser)}
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {users}
}

export default connect(mapStateToProps, {fetchUsers})(UserList);