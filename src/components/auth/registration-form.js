import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../actions/users';
import {login} from '../../actions/auth';
import Input from '../input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import './registration-form.css';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password} = values;
        const user = {username, password};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {

        return (
            <fieldset className="auth-fieldset">
                <form
                    className="auth-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <div className="input-wrapper">
                        <label htmlFor="username" className="auth-label">username</label>
                        <Field
                            component={Input}
                            className="auth-input"
                            type="text"
                            name="username"
                            placeholder="username"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password" className="auth-label">password</label>
                        <Field
                            component={Input}
                            className="auth-input"
                            type="password"
                            name="password"
                            placeholder="password"
                            validate={[required, passwordLength, isTrimmed]}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="passwordConfirm" className="auth-label">confirm password</label>
                        <Field
                            component={Input}
                            className="auth-input"
                            type="password"
                            name="passwordConfirm"
                            placeholder="confirm password"
                            validate={[required, nonEmpty, matchesPassword]}
                        />
                    </div>
                    <button
                        type="submit"
                        className="auth-submit-button"
                        disabled={this.props.pristine || this.props.submitting}>
                        sign up
                    </button>
                </form>
            </fieldset>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
