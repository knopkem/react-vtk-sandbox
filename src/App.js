import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Tube from './Examples/TubeExample';
import Geometry from './Examples/Geometry';
import CubeAxes from './Examples/CubeAxes';
import CutterExample from './Examples/CutterExample';
import Picking from './Examples/Picking';
import PointCloud from './Examples/PointCloud';
import PolyDataViewer from './Examples/PolyDataViewer';

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
                    <li>
                        <Link to="/cubeaxis">Cube Axis</Link>
                    </li>
                    <li>
                        <Link to="/cutter">Cutter</Link>
                    </li>
                    <li>
                        <Link to="/picking">Picking</Link>
                    </li>
                    <li>
                        <Link to="/cloud">Point Cloud</Link>
                    </li>
                    <li>
                        <Link to="/polydata">PolyDataViewer</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact path="/geometry" component={Geometry} />
                <Route exact path="/tube" component={Tube} />
                <Route exact path="/cubeaxis" component={CubeAxes} />
                <Route exact path="/cutter" component={CutterExample} />
                <Route exact path="/picking" component={Picking} />
                <Route exact path="/cloud" component={PointCloud} />
                <Route exact path="/polydata" component={PolyDataViewer} />
            </Switch>
        </Router>
    );
}
