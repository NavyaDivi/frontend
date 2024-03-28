import React, { Component } from "react";
import Category from "./Category";
import Home from "./Home";
import Expense from "./Expense";
import Aggregator from "./Aggregator";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/aggregator" element={<Aggregator />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
