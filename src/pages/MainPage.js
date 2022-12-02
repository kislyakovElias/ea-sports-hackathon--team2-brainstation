import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/ea-app");
  };

  useEffect(() => {
    goTo();
  }, []);

  return (
    <>
      <h1>Main page</h1>
    </>
  );
};

export default MainPage;
