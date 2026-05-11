import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Receiver from "./Receiver";

const Sender = () => {
  return <>
  <ErrorBoundary>
    <Receiver money={2000}/>
  </ErrorBoundary>
    <ErrorBoundary>
    <Receiver money={4000}/>
  </ErrorBoundary>
    <ErrorBoundary>
    <Receiver money={10000}/>
  </ErrorBoundary>
  </>;
};

export default Sender;
