import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Form' component={Form} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Routes;