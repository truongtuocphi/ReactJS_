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
        <div key={item.title} style={{background: '#fff', padding: '10px 15px', marginBottom: '15px', borderRadius: '10px'}}>
          <h4>{ item.title }</h4>
          <p>{ item.body }</p>
          <b>Leanne Graham</b>
        </div>
      )
    })
  }

  render() {
    return (
      <div style={{padding: '20px'}}>{ this.renderList() }</div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)