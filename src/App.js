import React from 'react';

import Home from './pages/home';
import Rooms from './pages/rooms';
import SingleRoom from './pages/singleRoom';
import Error from './pages/error';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/navbar';

function App() {
  return (         
      <>
        <Navbar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/rooms/" component={Rooms}></Route>
              <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
              <Route component={Error}></Route>
            </Switch>
      </>   
  );
}

export default App;
