import React from "react";
import "./input.css";

export default class TextArea extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = <div className="form-warning">{this.props.meta.warning}</div>;
    }

    return (
      <div className="form-input">
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <textarea
          rows="6"
          {...this.props.input}
          id={this.props.input.name}
          className={this.props.className}
          placeholder={this.props.placeholder}
          type={this.props.type}
          ref={input => (this.input = input)}
        />
      </div>
    );
  }
}
