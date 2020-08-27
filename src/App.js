import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

const BaseRouter = React.lazy(() => import("./routes"));

function App() {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Router>
        <div className="App">
          <Navbar />
          <BaseRouter />
        </div>
      </Router>
    </React.Suspense>
  );
}

export default App;
