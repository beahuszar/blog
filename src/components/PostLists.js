import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class Postlists extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  };

  render() {
    return (
      <div>Postlists</div>
    );
  };
};

export default connect(null, { fetchPosts })(Postlists);
