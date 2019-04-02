import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <fieldset className="auth-fieldset">
                <form
                    className="auth-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    <div className="input-wrapper">
                        <label htmlFor="username" className="auth-label">username</label>
                        <Field
                            component={Input}
                            className="auth-input"
                            type="text"
                            placeholder="username"
                            name="username"
                            id="username"
                            validate={[required, nonEmpty]}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password" className="auth-label">password</label>
                        <Field
                            component={Input}
                            className="auth-input"
                            type="password"
                            placeholder="password"
                            name="password"
                            id="password"
                            validate={[required, nonEmpty]}
                        />
                    </div>
                    <button className="auth-submit-button" disabled={this.props.pristine || this.props.submitting}>
                        log in
                    </button>
                </form>
            </fieldset>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
