import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends Component {
  componentDidMount() {
    console.log(this.props.fetchPosts());
  }

  renderList() {
    return this.props.posts.map(item => {
      return(
        <div key={item.title}>
          <h4>{ item.title }</h4>
          <p>{ item.body }</p>
          <b>Leanne Graham</b>
        </div>
      )
    })
  }

  render() {
    return (
      <div>{ this.renderList() }</div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)