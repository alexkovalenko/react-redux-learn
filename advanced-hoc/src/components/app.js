import React from 'react';
import {connect} from 'react-redux';
import Header from './header';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}


export default connect(mapStateToProps)(App);
