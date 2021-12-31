import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookDetails from './BookDetails';
import AddBook from './AddBook';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {


  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="content">
      <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/books/:id">
              <BookDetails />
            </Route>
            <Route path="/add">
              <AddBook/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
