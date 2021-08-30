import React from 'react';
import Home from './pages/Home'
import Goals from './pages/Goals'
import Frases from './pages/Frases'
import{
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
} from "react-router-dom";
import ChallengeOne from './pages/Challenges/ChallengeOne/container/challengeOne';
import ChallengeTwo from './pages/Challenges/ChallengeTwo/container/challengeTwo';
import ChallengeThree from './pages/Challenges//ChallengeThree/container/challengeThree';
import ChallengeFour from './pages/Challenges/ChallengeFour/container/challengeFour';
import ChallengeFive from './pages/Challenges/ChallengeFive/container/challengeFive';



function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route path="/" exact component={Home}/>
          <Route path="/Goals" exact component={Goals}/>
          <Route path="/Frases" exact component={Frases}/>
          <Route path="/One" exact component={ChallengeOne}/>
          <Route path="/Two" exact component={ChallengeTwo}/>
          <Route path="/Three" exact component={ChallengeThree}/>
          <Route path="/Four" exact component={ChallengeFour}/>
          <Route path="/Five" exact component={ChallengeFive}/>
          </Switch>
        </Router>
    </div>
  )
}

export default App;
