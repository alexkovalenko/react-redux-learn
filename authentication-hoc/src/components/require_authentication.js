import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        };

        redirectIfNeeded(props) {
            if (!props.authenticated) {
                this.context.router.push('/');
            }
        }

        componentWillMount() {
            this.redirectIfNeeded(this.props);
        }

        componentWillUpdate(nextProps) {
            this.redirectIfNeeded(nextProps);
        }

        render() {
            return <ComposedComponent {...this.props}/>
        }
    }

    const mapStateToProps = (state) => {
        return {
            authenticated: state.authenticated
        }
    };

    return connect(mapStateToProps)(Authentication);
}