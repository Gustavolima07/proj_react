import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'

const App = () => {
  return (
        <BrowserRouter>
          <Router />
        </BrowserRouter>
  )
}

export { App };
