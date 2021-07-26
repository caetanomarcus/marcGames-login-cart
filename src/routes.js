import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Cart from './components/Cart'

export default function Routes(){
    return (
        <Switch>
            <Route exact path='/' >
                <Login />
                </Route>
            <Route path='/products'>
                <Cart />
            </Route>
        </Switch>
    )
}