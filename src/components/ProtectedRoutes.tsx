import React, { ReactNode, useEffect, useState } from "react";

import { Navigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
type Props = {
  children: ReactNode;
};

const ProtectedRoutes = ({ children }: Props) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      window.scrollY >= 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, [setShowButton]);
  let location = useLocation();
  const getUser = localStorage.getItem("currentuser");
  if (!getUser) {
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      {showButton ? (
        <button className="btn-to-top" onClick={handleScrollTop}>
          {" "}
          <FontAwesomeIcon icon={faAngleDoubleUp} className="to-top" />{" "}
        </button>
      ) : (
        ""
      )}
      <div>{children}</div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ProtectedRoutes;
