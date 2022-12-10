import App from  "./App";
// import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import * as ReactDOMClient from 'react-dom/client';
// import App from './App';

const container = document.getElementById('root');
// Create a root.
const root = ReactDOMClient.createRoot(container);

// // Initial render: Render an element to the root.

// // During an update, there's no need to pass the container again.
root.render(<App tab="profile" />);

root.render(
    <BrowserRouter>
    <App tab="home" />
    </BrowserRouter>);
    
// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>, document.getElementById("root")
// )