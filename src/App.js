import React, { Component } from 'react';
import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root">
      <div class="_wrapper_fx5sa_1">
        <header class="_header_un896_1">
          <img src="src/asset/logo.svg" alt="WebSite Logo" />
        </header>
        <main class="_content_fx5sa_9">
          <div class="_list_1tv8w_1">
            
            <div class="_listContent_18omr_1">
              <header class="_listContentHeader_18omr_11">
                <div class="_listCreatedTaskCounter_18omr_18">
                  Created Tasks<span>2</span>
                </div>
                <div class="_listDoneTaskCounter_18omr_41">
                  Done Tasks<span>1 of 2</span>
                </div>
              </header>
              <GetOnlinePosts />
            </div>
          </div>
        </main>
        <header class="_header_un896_1">
          Footer
        </header>
      </div>
    </div>
    );
  }
}

export default App;