import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importando componentes desde la carpeta /Routes
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';

// Importando componentes desde la carpeta /Components
import Dentist from './Components/Dentist';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ContextProvider } from './Components/utils/ContextGlobal';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/dentist/:id" component={Dentist} />
            <Route path="/contact" component={Contact} />
            <Route path="/favs" component={Favs} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;


