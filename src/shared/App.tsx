import { hot } from "react-hot-loader/root";
import React from "react";
import { Header } from "./Header";

function AppComponent() {
  return (
    <Header />
  );
}

export const App = hot(() => <AppComponent />);
