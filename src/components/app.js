import { h } from 'preact'
import { Router } from 'preact-router'
import { useState } from 'preact/hooks'

// Code-splitting is automated for `routes` directory
import Home from '../routes/home'
import baseroute from '../baseroute'
import Advanced from '../routes/advanced'
import PrivacyPolicy from '../routes/privacy-policy'
import { getPreservedChoice } from '../utils/ux-enhancements'

const App = () => {
  const [showAdvanced, setShowAdvanced] = useState(getPreservedChoice())
  return (
    <div id='app'>
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
        <PrivacyPolicy path={`${baseroute}/privacy-policy`} />
      </Router>
    </div>
  )
}

export default App
