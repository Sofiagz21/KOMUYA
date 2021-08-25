import React from 'react';
import Home from './pages/Home'
import Goals from './pages/Goals'
import{
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        {/* path que me corrige que la primera ruta sea el Home*/}
        <Route path="/" exact component={Home}/>
        {/*RUTA QUE ME REDIRECCIONE PARA LA PÁGINA HOME*/}
          <Route path="/" exact component={Home}/>
          {/*RUTA QUE ME REDIRECCIONE PARA LA PÁGINA RETOS DE LA SEMANA*/}
          <Route path="/Goals" exact component={Goals}/>
          </Switch>
        </Router>
    </div>
  )
}

export default App;
