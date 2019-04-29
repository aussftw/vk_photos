import React from "react";
import PropTypes from "prop-types";

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props;

    if (error) {
      return <p>Sorry, we have an error, please refresh the page</p>;
    }

    if (isFetching) {
      return <p>Loading ...</p>;
    }

    if (name) {
      return <p>Hello, {name}</p>;
    }
    return (
      <button className="btn" onClick={this.props.handleLogin}>
        Enter
      </button>
    );
  };
  render() {
    return <div>{this.renderTemplate()}</div>;
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired
};
