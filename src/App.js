import React ,{ useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from "./Login.js";
import { useStateValue } from "./StateProvieder";
import { auth } from "./firebase";

function App() {
  const [{ basket  } , dispatch ] = useStateValue();
  //piece of code which runs on a given condition .

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
        if(authUser)
        {
          dispatch({
            type:"SET_USER",
            user: authUser  ,
          }) ;
        }
        else
        {
          dispatch({
            type:"SET_USER",
            user: null  ,
          }) ;
        }
    });
    return ()=>{
      //any clean up operation ..
      unsubscribe();
    }

  }, []);

  return (
    <Router>
      <div className="app">
      
        <Switch>
          <Route path = "/checkout">
          <Header />  
               <Checkout />         
          </Route>
          
          <Route path = "/login">
            <Login />
          </Route>
          
          <Route path = "/">
            <Header />
            <Home />
          </Route>


        </Switch>

      </div>

    </Router>
  );
}

export default App;
