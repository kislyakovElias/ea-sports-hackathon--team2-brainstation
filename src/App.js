import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AppPage from "./pages/AppPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="*" element={<AppPage />} />
        <Route path="/ea-app" element={<MainPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
