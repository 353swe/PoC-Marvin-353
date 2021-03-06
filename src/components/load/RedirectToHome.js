import React from 'react';
import PropTypes from 'prop-types';
import { history } from '../../store';

class RedirectToHome extends React.Component {
  componentDidMount() {
    setTimeout(() => { history.push('/'); }, this.props.time);
  }
  render() {
    return (
      <div>
        Logged! If you are not redirect to the homepage in&nbsp;
        {Math.round(this.props.time / 1000) + 3} seconds&nbsp;
        <a href="/">click here</a>
      </div>
    );
  }
}
RedirectToHome.propTypes = {
  time: PropTypes.number,
};
RedirectToHome.defaultProps = {
  time: 1000,
};
export default RedirectToHome;
