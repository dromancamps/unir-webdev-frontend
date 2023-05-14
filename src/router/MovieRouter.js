import React from "react";
import { Route, Routes } from "react-router-dom";
import { RentedView } from "../views/RentedView"
import { DetailsView }  from "../views/DetailsView"
import { WatchView }  from "../views/WatchView"
import { ExplorerView } from "../views/ExplorerView"

export const MovieRouter = () => {
    return (
        <Routes>
            <Route path="/rented" element={<RentedView />} />
            <Route path="/:id/details" element={<DetailsView />} />
            <Route path="/:id/watch" element={<WatchView />} />
            <Route path="/" element={<ExplorerView />} />
        </Routes>
    );
};