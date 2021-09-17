
import './App.css';
import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Infrastruc from './infrastruc/Infrastruc';
import Software from './software/Software';
import Solutions from './oursolutions/Solutions';
import Startup from './startup/Startup';
import Learning from './learning/Learning';
import Coworking from './coworking/Coworking';
import Contact from './contact/Contact';
import Propos from './propos/Propos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
      <Route path="/our-infrastructure"  component={Infrastruc} />
      <Route path="/" exact component={Home} />
      <Route path="/software-development" component={Software}/>
      <Route path="/our-solutions" component={Solutions}/>
      <Route path="/startup-accelerator" component={Startup}/>
      <Route path="/e-learning" component={Learning}/>
      <Route path="/coworking" component={Coworking}/>
      <Route path="/contactus" component={Contact}/>
      <Route path="/aboutus" component={Propos}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
