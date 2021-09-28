import React from 'react';
import Home from './pages/Home'
import Goals from './pages/Goals'

import{
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
} from "react-router-dom";
import ChallengeOne from './pages/Challenges/ChallengeOne/container/challengeOne';
import ChallengeTwo from './pages/Challenges/ChallengeTwo/container/challengeTwo';
import ChallengeThree from './pages/Challenges/ChallengeThree/container/challengeThree';
import ChallengeFour from './pages/Challenges/ChallengeFour/container/challengeFour';
import ChallengeFive from './pages/Challenges/ChallengeFive/container/challengeFive';
import Frase1  from './pages/Frases/Frase1'
import Frase2  from './pages/Frases/Frase2'
import Frase3 from './pages/Frases/Frase3'
import Frase4  from './pages/Frases/Frase4'
import Frase5  from './pages/Frases/Frase5'
import Feli1 from './components/Felicitaciones/Fel1'
import Feli2 from './components/Felicitaciones/Fel2'
import Feli3 from './components/Felicitaciones/Fel3'
import Feli4 from './components/Felicitaciones/Fel4'
import Feli5 from './components/Felicitaciones/Fel5'
import Exit from './components/Exit/containerExit'


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route path="/" exact component={Home}/>
          <Route path="/Goals" exact component={Goals}/>
          <Route path="/Frase1" exact component={Frase1}/>
          <Route path="/Frase2" exact component={Frase2}/>
          <Route path="/Frase3" exact component={Frase3}/>
          <Route path="/Frase4" exact component={Frase4}/>
          <Route path="/Frase5" exact component={Frase5}/>
          <Route path="/One" exact component={ChallengeOne}/>
          <Route path="/Two" exact component={ChallengeTwo}/>
          <Route path="/Three" exact component={ChallengeThree}/>
          <Route path="/Four" exact component={ChallengeFour}/>
          <Route path="/Five" exact component={ChallengeFive}/>
          <Route path="/Feli1" exact component={Feli1}/>
          <Route path="/Feli2" exact component={Feli2}/>
          <Route path="/Feli3" exact component={Feli3}/>
          <Route path="/Feli4" exact component={Feli4}/>
          <Route path="/Exit" exact component={Exit}/>
          </Switch>
        </Router>
    </div>
  )
}

export default App;
