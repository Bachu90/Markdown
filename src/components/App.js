import React, { Component } from 'react';
import './App.css';
import Previewer from './Previewer';
import Editor from './Editor';
import placeholder from './placeholder';



class App extends Component {
  
  

  state ={
    markdown: placeholder,
    letters: placeholder.length
  }

  handleChange = (e) => {
    const markdown = e.target.value ? e.target.value : placeholder;
    this.setState({
      markdown,
    })
  }

  handleToolClick = (e) => {
    alert('Funkcja w fazie rozwoju');
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
