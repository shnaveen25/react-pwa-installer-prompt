import React from 'react'

import PWAInsatllerPrompt from 'react-pwa-installer-prompt'

const App = () => {
  return (
    <PWAInsatllerPrompt 
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
