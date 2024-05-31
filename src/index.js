import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Layout from "./views/Layout";
import Home from "./views/Home";
import Locations from "./views/Locations";
import Classes from "./views/Classes";
import Membership from "./views/Membership";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="locations" element={<Locations />} />
        <Route path="classes" element={<Classes />} />
        <Route path="membership" element={<Membership />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
