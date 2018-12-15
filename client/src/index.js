import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import Signup from './components/auth/Signup';
import Reducers from './Reducers';
import Feature from './components/Feature';
import Signout from './components/auth/signout';
import Signin from './components/auth/Signin';
const store = createStore(
    Reducers,
    {
        auth:{authenticated:localStorage.getItem('token')}
    },
    applyMiddleware(reduxThunk)
)
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/feature' component={Feature}/>
            <Route exact path='/signout' component={Signout}/>
            <Route exact path='/signin' component={Signin}/>
        </App>
    </BrowserRouter>
</Provider>,
    document.querySelector('#root')
);