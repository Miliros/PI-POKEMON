//import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/detail/:detailId' component={Detail}/>
        <Route path='/create' component={Form}/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
