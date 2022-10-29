import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/homePage';
import LandingPage from './components/landingPage/landingPage';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path= '/' component={LandingPage} />
          <Route exact path= '/home' component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>


  );
}
export default App;
