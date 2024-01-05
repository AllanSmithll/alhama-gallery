import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NotFound from "./components/not-found/NotFound";
import Footer from "./components/Footer";
import AddImageForm from "./components/PhotoForm/AddPhotoForm";
import Home from "./components/Home/Home";
import Brazil from "./components/Brazil/Brazil";
import EditPhotoForm from "./components/PhotoForm/EditPhotoForm";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/brazil" element={<Brazil />} />
        <Route path="/add-photo-form" element={<AddImageForm />} />
        <Route path="/edit-photo-form/:id" element={<EditPhotoForm />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
