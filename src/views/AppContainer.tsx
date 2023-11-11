import {Outlet} from "react-router-dom";
import React from "react";
import Navigation from "./Navigation";

export default function AppContainer() {
  return (
    <div style={{display: "flex"}}>
      <Navigation/>
      <div style={{padding: 20, width: 700}}>
        <Outlet/>
      </div>
    </div>
  );
}