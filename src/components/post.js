import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  &:before {
    content: '•';
    color: #2a7f62;
    display: block;
    margin-top: 0.2rem;
    margin-right: 0.5rem;
  }
`

const Link = styled.a`
  font-size: 1.25rem;
  color: royalblue;
  &:visited {
    color: #56445d;
  }
`

class Post extends React.Component {
  state = {
    post: {},
  }

  componentDidMount() {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`)
      .then(response => response.json())
      .then(post => this.setState({ post }))
  }

  render() {
    return (
      <Item>
        <Link
          title={this.state.post.text}
          href={this.state.post.url}
          target="_blank"
        >
          {this.state.post.title}
        </Link>
      </Item>
    )
  }
}

export default Post
