import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Dentist from './Components/Dentist';
import Contact from './Components/Contact';
import Favs from './Components/Favs';
import { ContextProvider } from './Components/utils/ContextGlobal';

function App() {
  const appStyle = {
    backgroundColor: 'black',
    width: '355px',
    height: '355px'
  };

  return (
    <ContextProvider>
      <div className="App" style={appStyle}>
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/dentist/:id" component={Dentist} />
            <Route path="/contact" component={Contact} />
            <Route path="/favs" component={Favs} />
          </Switch>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;

