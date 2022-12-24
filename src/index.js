import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProivder } from './Context/VideoContext';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProivder>
      <App />
    </AppProivder>
  </React.StrictMode>
)



