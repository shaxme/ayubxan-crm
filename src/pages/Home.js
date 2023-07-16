import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./Home.css";

export default function Home() {
  return (
    <>
      <header className="roots">
        <img className="Logo" src="/img/isoflex.svg" alt="logo" />

        <div className="btn-box">
          <Link className="forCli" to="/client">
            для клиент
          </Link>
        
          <Link className="forFac" to="/factory">
            для завода
          </Link>        
      </div>
      </header>
    </>
  );
}
