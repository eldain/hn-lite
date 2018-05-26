import React from 'react'
import Post from '../components/post'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  body{
    background-color: #141414;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #f3e8ee;
`;

const List = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;

class App extends React.Component {
  state = {
    topStories: []
  };
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }
  async componentDidMount() {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    const topStories = await res.json();
    const topStoryRes = await fetch(
      "https://hacker-news.firebaseio.com/v0/item/17075489.json"
    );
    const topStory = await topStoryRes.json();
    await this.setStateAsync({ topStories });
  }

  render() {
    return (
      <React.Fragment>
        <Title>HNL</Title>
        <List>
          {this.state.topStories
            .slice(0, 30)
            .map((story, i) => <Post id={story} key={i} />)}
        </List>
      </React.Fragment>
    );
  }
}

export default App
