import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AppPage from "./pages/AppPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/ea-app" element={<AppPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
