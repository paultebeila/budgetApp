import logo from './logo.svg';
import './App.css';

import React, {userState, useState} from 'react';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signuo';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [transection, setTransection]=useState([]);

  const addTransaction=((amount, item, transactionType)=>{
    setTransection((items)=>[...items, {
      amount:amount,
      item:item,
      transactionType:transactionType
    }])
    console.log(transection)
  })
  return (

    <Router>
      <Switch>
        <Route  exact path="/" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>

        <Route path="/home">
        <Home list={transection} add={addTransaction} />
        </Route>
      </Switch>
    </Router>
    // <div>
    //   <Home list={transection} add={addTransaction} />
    // </div>
  );
}

export default App;


