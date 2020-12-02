import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import './App.css';


function App() {
  return(
    <>
    <Router>
      <Navbar />
      <Slider />
        <Switch>
          <Route path='/' exact />
        </Switch>
    </Router>
    </>
  ) 

}

export default App;
