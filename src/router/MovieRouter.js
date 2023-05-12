import React from "react";
import { Route, Routes } from "react-router-dom";
import { RentsView } from "../views/RentsView"
import { MediaView}  from "../views/MediaView"
import { ExplorerView } from "../views/ExplorerView"

export const MovieRouter = () => {
    return (
        <Routes>
            <Route path="/rented" element={<RentsView />} />
            <Route path="/:mediaId" element={<MediaView />} />
            <Route path="/" element={<ExplorerView />} />
        </Routes>
    );
};