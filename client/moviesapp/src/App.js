import React from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import CreateMovie from "./Components/CreateMovie";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <div className="page--layout">
        <div className="page-header">
          <Header />
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/create/movie" element={<CreateMovie />} />
            <Route path="*" element={<center>Page Not Found !!!</center>} />
          </Routes>
        </div>

        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
