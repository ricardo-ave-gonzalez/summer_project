import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { map } from 'underscore'
import configRouting from './configRouting'

export default function Routing(props) {
    const { setRefreshCheckLogin } = props;

    return (
        <Router>
            <Routes>
                {map(configRouting, (z, x) => (
                    <Route key={x} path={z.path} value={z.exact}>
                        <z.page setRefreshCheckLogin={setRefreshCheckLogin}/>
                    </Route>
                ))}
            </Routes>
        </Router>
    )
}
