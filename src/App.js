import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainPage">
        <div className="container-fluid">

            <div className="header">
                <h1 className="logoTitle">Movie Finder</h1>
                <h3 className="logoDesc">Ultimate search engine tool</h3>
            </div>

            <div className="mainSearch">

                <div className="searchInput">
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control" aria-label="Large"
                               aria-describedby="inputGroup-sizing-sm" placeholder="Search for a movie..."/>
                    </div>
                    <button className="searchButton">Search</button>
                </div>

            </div>

            <div className="footer">
                <span className="footerLogo">Movie Finder &copy;</span>
                <ul className="nav">
                    <li><a className="navLink" href="#">Search Movies</a></li>
                    <li>|</li>
                    <li><a className="navLink" href="#">Get Suggestion</a></li>
                    <li>|</li>
                    <li><a className="navLink" href="#">About</a></li>
                    <li>|</li>
                    <li><a className="navLink" href="#">Contact Me</a></li>
                </ul>
            </div>

        </div>
      </div>
    );
  }
}
export default App;
