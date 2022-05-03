import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  apiKey =  'your_api_key_enter _here'
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
          <Route exact  path="/" element={<News apiKey={this.apiKey} key='general' pageSize="5" category='general' />} />
          <Route exact  path="/business" element={<News apiKey={this.apiKey} key='business' pageSize="5" category='business' />} />
          <Route exact  path="/entertainment" element={<News apiKey={this.apiKey} key='entertainment' pageSize="5" category='entertainment' />} />
          <Route exact  path="/science" element={<News apiKey={this.apiKey} key='science' pageSize="5" category='science' />} />
          <Route exact  path="/sports" element={<News apiKey={this.apiKey} key='sports' pageSize="5" category='sports' />} />
          <Route exact  path="/health" element={<News apiKey={this.apiKey} key='health' pageSize="5" category='health' />} />
          <Route exact  path="/technology" element={<News apiKey={this.apiKey} key='technology' pageSize="5" category='technology' />} />
          <Route exact  path="/science" element={<News apiKey={this.apiKey} key='science' pageSize="5" category='science' />} />
          <Route exact  path="/science" element={<News apiKey={this.apiKey} key='science' pageSize="5" category='science' />} />
          </Routes>
    
        </div>
      </Router>
    );
  }
}

export default App;
