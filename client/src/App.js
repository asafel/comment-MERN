import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CommentList from './components/CommentList';
import CommentModal from './components/CommentModal';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container style={{maxWidth: '40rem'}}>
            <CommentModal />
            <CommentList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
