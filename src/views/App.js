import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/myComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUsers from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

/**
 * 2 components: class component / function component (function, arrow)
 * 
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />


          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUsers />
            </Route>
            {/* <Route path="/user/:id">
              <DetailUser />
            </Route> */}
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>


        </header>

        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnFocusLoss
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
