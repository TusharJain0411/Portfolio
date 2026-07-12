import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './pages/Layout'
import "./App.css"
import { Toaster } from "react-hot-toast";
function App() {


  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
