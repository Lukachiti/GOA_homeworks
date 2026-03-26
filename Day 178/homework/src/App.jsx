import { useState } from "react";
import ReportingErrorBoundary from "./ReportingErorBoundaty";
import SmartErrorBoundary from "./SmartErrorBoundary";

import "./App.css";

function App() {
  return (
    <>
      <ReportingErrorBoundary>
        <SmartErrorBoundary>
          <p>gugugaga</p>
        </SmartErrorBoundary>
      </ReportingErrorBoundary>
    </>
  );
}

export default App;
