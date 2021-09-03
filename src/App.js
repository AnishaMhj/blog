
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar /> 
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          {/* '*' ddenotes catch any routes and should always be placed at the bottom
            checks the routes at the top if not matches, then matches this route
          */}
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>    
    </div>
    </Router>
  );
}

export default App;
