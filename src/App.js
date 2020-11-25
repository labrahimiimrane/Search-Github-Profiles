import React, { Component } from 'react'
import Search from "./components/Search"
import Card from "./components/Card"

import "./App.css"

class App extends Component {

  state = {
    username: '',
    image: '',
    link: '',
    following: '',
    followers: '',
    repos: '',
    error: ''
  }

  getProfile = async (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const api = await fetch(`https://api.github.com/search/users?q=${username}`);
    const data = await api.json();

    //Check for the empty
    if (!username.trim()) {
      this.setState({
        username: '',
        image: '',
        link: '',
        following: '',
        followers: '',
        repos: '',
        error: 'Fill The Search Box Please !!'
      })
    } else {
      this.setState({
        username: data.items[0].login,
        image: data.items[0].avatar_url,
        link: data.items[0].html_url,
        following: await fetch(data.items[0].following_url.split("{")[0])
          .then(function (response) {
            return response.json();
          }),
        followers: await fetch(data.items[0].followers_url)
          .then(function (response) {
            return response.json();
          }),
        repos: await fetch(data.items[0].repos_url)
          .then(function (response) {
            return response.json();
          }),
        error: ''
      })
    }

  }


  render() {
    return (
      <div>
        <Search getProfile={this.getProfile} />
        <Card
          username={this.state.username}
          image={this.state.image}
          link={this.state.link}
          following={this.state.following.length}
          followers={this.state.followers.length}
          repos={this.state.repos.length}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App