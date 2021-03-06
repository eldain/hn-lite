import React from 'react'
import Post from '../components/post'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  body{
    background-color: #141414;
  }
`

const Title = styled.h1`
  font-size: 1.5rem;
  color: #f3e8ee;
`

const List = styled.ul`
  padding-left: 0;
  list-style-type: none;
`

class App extends React.Component {
  state = {
    topStories: [],
  }
  
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(topStories => this.setState({ topStories }))
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
    )
  }
}

export default App
