import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../features/user/actions";
import "./PickedPlayer.css";

function PickedPlayer() {
  const user = useSelector((state) => state.Users.users);
  const dispatch = useDispatch();

  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    if (isAuth) {
      dispatch(userActions.current());
    }
  }, []);
  return (
    <div>
      <div class="container">
        <ul class="responsive-table">
          <li class="table-row">
            <div className="col col-1">
              {" "}
              <div className="player-avatar">
                {" "}
                <img src="/img/faker.png" alt="" />
              </div>
            </div>
            <div class="col col-1" data-label="Job Id">
              <img style={{ width: "30px" }} src="/icons/TOP.png" alt="" />
            </div>
            <div class="col col-2" data-label="Customer Name">
              {user.team?.TOP.name}
            </div>
            <div class="col col-3" data-label="Amount">
            {user.team?.TOP.price}
            </div>
            <div class="col col-4" data-label="Payment Status">
            {user.team?.TOP.team}
            </div>
            <div class="col col-5" data-label="Payment Status">
              Pending
            </div>
          </li>
          <li class="table-row">
            <div className="col col-1">
              {" "}
              <div className="player-avatar">
                {" "}
                <img src="/img/faker.png" alt="" />
              </div>
            </div>
            <div class="col col-1" data-label="Job Id">
              <img style={{ width: "30px" }} src="/icons/JUNGLE.png" alt="" />
            </div>
            <div class="col col-2" data-label="Customer Name">
            {user.team?.JUNGLE.name}
            </div>
            <div class="col col-3" data-label="Amount">
            {user.team?.JUNGLE.price}
            </div>
            <div class="col col-4" data-label="Payment Status">
            {user.team?.JUNGLE.team}
            </div>
            <div class="col col-5" data-label="Payment Status">
              Pending
            </div>
          </li>
          <li class="table-row">
            <div className="col col-1">
              {" "}
              <div className="player-avatar">
                {" "}
                <img src="/img/faker.png" alt="" />
              </div>
            </div>
            <div class="col col-1" data-label="Job Id">
              <img style={{ width: "30px" }} src="/icons/MIDDLE.png" alt="" />
            </div>
            <div class="col col-2" data-label="Customer Name">
            {user.team?.MID.name}
            </div>
            <div class="col col-3" data-label="Amount">
            {user.team?.MID.price}
            </div>
            <div class="col col-4" data-label="Payment Status">
            {user.team?.MID.team}
            </div>
            <div class="col col-5" data-label="Payment Status">
              Pending
            </div>
          </li>
          <li class="table-row">
            <div className="col col-1">
              {" "}
              <div className="player-avatar">
                {" "}
                <img src="/img/faker.png" alt="" />
              </div>
            </div>
            <div class="col col-1" data-label="Job Id">
              <img style={{ width: "30px" }} src="/icons/SUPPORT.png" alt="" />
            </div>
            <div class="col col-2" data-label="Customer Name">
            {user.team?.SUPPORT.name}
            </div>
            <div class="col col-3" data-label="Amount">
            {user.team?.SUPPORT.price}
            </div>
            <div class="col col-4" data-label="Payment Status">
            {user.team?.SUPPORT.team}
            </div>
            <div class="col col-5" data-label="Payment Status">
              Pending
            </div>
          </li>
          <li class="table-row">
            <div className="col col-1">
              {" "}
              <div className="player-avatar">
                {" "}
                <img src="/img/faker.png" alt="" />
              </div>
            </div>
            <div class="col col-1" data-label="Job Id">
              <img style={{ width: "30px" }} src="/icons/ADC.png" alt="" />
            </div>
            <div class="col col-2" data-label="Customer Name">
            {user.team?.ADC.name}
            </div>
            <div class="col col-3" data-label="Amount">
            {user.team?.ADC.price}
            </div>
            <div class="col col-4" data-label="Payment Status">
            {user.team?.ADC.team}
            </div>
            <div class="col col-5" data-label="Payment Status">
              Pending
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PickedPlayer;
