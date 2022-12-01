import React from "react";
import { Loader } from "@mantine/core";

function CLoader() {
  return (
    <div style={{ height: "80vh", width: "100%", position: "relative" }}>
      <div style={{ background: "#292929", height: "110px" }}></div>
      <Loader style={{position: "absolute", top: "50%", left: "50%" }} color="red" variant="bars" />
    </div>
  );
}

export default CLoader;
