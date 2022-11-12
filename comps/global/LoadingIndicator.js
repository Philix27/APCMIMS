import React from "react";
import { Circles } from "react-loader-spinner";

export default function LoadingIndicator() {
  return (
    <div className="loader">
      <Circles
        height="200"
        width="200"
        color="#7E664E"
        ariaLabel="circles-loading"
        // wrapperStyle={{}}
        // wrapperClass=""
        visible={true}
      />
    </div>
  );
}
