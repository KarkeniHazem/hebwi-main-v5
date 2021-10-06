import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Top from "../../icons/TOP.png";
import Mid from "../../icons/MIDDLE.png";
import Jng from "../../icons/JUNGLE.png";
import Adc from "../../icons/ADC.png";
import supp from "../../icons/SUPPORT.png";
import ModalRoster from "./ModalRoster";
import PickedPlayer from "../PickedPlayer";

const Roster = ({ ping, setPing }) => {
  const dispatch = useDispatch();

  const [role, setrole] = useState("");
  const [show, setshow] = useState(false);

  return (
    <div className="rooster">
      {show ? (
        <ModalRoster
          ping={ping}
          setPing={setPing}
          show={show}
          setshow={setshow}
          role={role}
        />
      ) : null}

      <PickedPlayer setshow={setshow} />
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <h1 style={{ border: "1px solid rgb(230, 172, 13)", padding: "5px" }}>
          SKT T1
        </h1>

        <div className="league-map">
          <button
            className="btn-top"
            onClick={() => {
              setshow(!show);
              setrole("TOP");
            }}
          >
            <img src={Top} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-mid"
            onClick={() => {
              setshow(!show);
              setrole("MID");
            }}
          >
            <img src={Mid} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-jng"
            onClick={() => {
              setshow(!show);
              setrole("JUNGLE");
            }}
          >
            <img src={Jng} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-adc"
            onClick={() => {
              setshow(!show);
              setrole("ADC");
            }}
          >
            <img src={Adc} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-supp"
            onClick={() => {
              setshow(!show);
              setrole("SUPPORT");
            }}
          >
            <img src={supp} style={{ width: "30px" }} />
          </button>
          <button className="conf-btn">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Roster;
