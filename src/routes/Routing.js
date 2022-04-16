import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute'
import Home from '../page/Home';
import Error404 from '../page/Error404';

export default function Routing(props) {
    // { setRefreshCheckLogin } = props;
    // console.log(props)
    const { setrefreshCheckLogin } = props;
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="*" element={<Error404 />} />
                    <Route path="/" element={<Home setrefreshCheckLogin={setrefreshCheckLogin}/>} />                    
                    
            </Routes>
        </BrowserRouter>

    )
}
