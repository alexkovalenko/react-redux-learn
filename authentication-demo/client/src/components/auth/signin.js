import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import {signinUser} from '../../actions';

class Signin extends Component {

    onFormSubmit({email, password}) {
        console.log(email, password);
        this.props.signinUser(email, password);
    }

    renderTextField(field) {
        const {meta: {touched, invalid, error}} = field;
        const invalidField = touched && invalid;
        const className = `form-group ${invalidField ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {invalidField ? error : ''}
                </div>
            </div>
        )
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field
                    name="email"
                    label="Email:"
                    component={this.renderTextField}
                />
                <Field
                    name="password"
                    label="Password:"
                    component={this.renderTextField}
                />
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(connect(null, {signinUser})(Signin))