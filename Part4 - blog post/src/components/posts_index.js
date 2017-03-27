import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() { // this is a lifecyle method (only called on the first render of dom)
    // place for action to intially fetch data
    this.props.fetchPosts();
  }

  render() {
    return(
      <div> List of blog posts</div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);

/*

Other way to code it up*****

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() { // this is a lifecyle method (only called on the first render of dom)
    // place for action to intially fetch data
    this.props.fetchPosts();
  }

  render() {
    return(
      <div> List of blog posts</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
*/
