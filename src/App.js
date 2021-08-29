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
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/Frases" exact component={Frases}/>
=======
=======
>>>>>>> 44c2b254b69f201f2e141f01d0f34a810b7c1972
          <Route path="/One" exact component={ChallengeOne}/>
          <Route path="/Two" exact component={ChallengeTwo}/>
          <Route path="/Three" exact component={ChallengeThree}/>
          <Route path="/Four" exact component={ChallengeFour}/>
          <Route path="/Five" exact component={ChallengeFive}/>
<<<<<<< HEAD
>>>>>>> 44c2b254b69f201f2e141f01d0f34a810b7c1972
=======
>>>>>>> 44c2b254b69f201f2e141f01d0f34a810b7c1972
          </Switch>
        </Router>
    </div>
  )
}

export default App;
