import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/home-page'
import FavoriteDrivers from '../pages/favorite-drivers'
import Error from '../components/error'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='favorite-drivers' element={<FavoriteDrivers />} />

                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    )
}

export default Routing