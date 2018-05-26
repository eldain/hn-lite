import React from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  &:before {
    content: "•";
    color: #2A7F62;
    display: block;
    margin-top: 0.2rem;
    margin-right: 0.5rem;
  }
`;

const Link = styled.a`
  font-size: 1.25rem;
  color: royalblue;
  &:visited{
    color: #56445D;
  }
`;

class Post extends React.Component {
  state = {
    post: {}
  };
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }
  async componentDidMount() {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`
    );
    const post = await res.json();
    await this.setStateAsync({ post });
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
    );
  }
}

export default Post;
