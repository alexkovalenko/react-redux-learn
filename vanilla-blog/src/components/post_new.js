import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {createPost} from '../actions';

class PostNew extends Component {

    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <Field
                    name="title"
                    label="Title"
                    component={this.renderTextField}
                />
                <Field
                    name="categories"
                    label="Categories"
                    component={this.renderTextField}
                />
                <Field
                    name="content"
                    label="Content"
                    component={this.renderTextField}
                />
                <button type="submit" className="btn btn-primary">Create</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        )
    }

    onFormSubmit(values) {
        this.props.createPost(values, () => this.props.history.push(''));
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
}

function validate({title, content}) {
    const error = {};
    if (!title) {
        error.title = "Enter a title!";
    }
    if (!content) {
        error.content = "Enter some content!";
    }
    return error;
}

export default reduxForm({
    form: 'postNewForm',
    validate
})(
    connect(null, {createPost})(PostNew)
);