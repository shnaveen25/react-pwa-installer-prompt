import React from 'react'

import PWAInstallerPrompt from 'react-pwa-installer-prompt'

const App = () => {
  return (
    <PWAInstallerPrompt 
      render={({ onClick }) => (
        <button type="dashed" onClick={onClick}>
          Install
        </button>
      )}
      callback={(data) => console.log(data)} 
    />
  );
}

export default App;
