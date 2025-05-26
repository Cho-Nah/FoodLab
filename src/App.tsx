import React from "react";
import HomePage from "./pages/HomePage";
import Auth from "./pages/AuthPage";
import { AccountPage } from "./pages/AccountPage";

function App() {
  return (
    <div>
      <Auth />
      <HomePage />
      <AccountPage />
    </div>
  );
}

export default App;
