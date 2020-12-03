
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
  return (
   <Router>
     <Route exact path="/home" component={Home}/>
   </Router>
  );
}

export default App;
