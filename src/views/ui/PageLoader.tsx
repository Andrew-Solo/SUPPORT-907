import {Loader} from "rsuite";
import React from "react";

export default function PageLoader() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Loader size="lg" content="Large" />
    </div>
  );
}