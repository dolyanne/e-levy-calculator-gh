import { h } from "preact";
import { Router } from "preact-router";
import { useState, useEffect, useRef } from "preact/hooks";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import baseroute from "../baseroute";
import Advanced from "../routes/advanced";

const App = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  return (
    <div id="app">
      <Router>
        {showAdvanced === false ? (
          <Home
            path={`${baseroute}/`}
            showAdvanced={() => setShowAdvanced(true)}
          />
        ) : (
          <Advanced
            path={`${baseroute}/`}
            showSimple={() => setShowAdvanced(false)}
          />
        )}
      </Router>
    </div>
  );
};

export default App;
