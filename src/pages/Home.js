import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./Home.css";

export default function Home() {
  return (
    <>
      <header className="root">
        <img className="Logo" src="/img/Soflex.png" alt="logo" />

        <div className="btn-box">
        <Button variant="contained" className="client">
          <Link className="forCli" to="/client">
            для клиент
          </Link>
        </Button>
        <Button variant="contained" className="factory">
          <Link className="forFac" to="/factory">
            для завода
          </Link>
        </Button>
      </div>
      </header>
    </>
  );
}
