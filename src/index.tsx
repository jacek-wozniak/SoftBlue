import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./Components/App";
import {QueryClientProvider} from "react-query";
import {queryClient} from "./react-query/queryClient";
import axios from "axios";

axios.defaults.baseURL = "https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/";

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
  </React.StrictMode>
);
