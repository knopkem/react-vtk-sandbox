import React from 'react';
import Geometry from './Examples/Geometry';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Tube from './Examples/Tube';

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/geometry">Geometry Sample</Link>
                    </li>
                    <li>
                        <Link to="/tube">Tube Sample</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact path="/geometry" component={Geometry} />
                <Route exact path="/tube" component={Tube} />
            </Switch>
        </Router>
    );
}
