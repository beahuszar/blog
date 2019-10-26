import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class Postlists extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  };

  render() {
    console.log(this.props.posts);
    return (
      <div>Postlists</div>
    );
  };
};

const mapStateToProps = state => {
  return { posts: state.posts };
}

// connect(mappedReducers, actionCreators) => this.props properties
export default connect(mapStateToProps, { fetchPosts })(Postlists);
