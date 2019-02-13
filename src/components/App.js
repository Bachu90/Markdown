import React, { Component } from 'react';
import './App.css';
import Previewer from './Previewer';
import Editor from './Editor';
import placeholder from './placeholder';



class App extends Component {
  
  state ={
    markdown: placeholder,
  }

  handleChange = (e) => {
    const markdown = e.target.value;
    this.setState({
      markdown,
    })
  }

  handleToolClick = (e) => {
    alert('Function available soon...');
  }

  render() {
    return (
      <div className="App">
        <Editor handleChange={this.handleChange} placeholder={placeholder} markdown={this.state.markdown} handleToolClick={this.handleToolClick}/>
        <Previewer markdown={this.state.markdown} />
      </div>
    );
  }
}

export default App;
