import React from "react";
import games from "../../assets/imgs/games.png";
import "./Discover.scss";
export default function Discover() {
  return (
    <>
      <section className="discover">
        <div className="discover-wrapper">
          <div className="discover__col">
            <h2>Discover The Newest Games</h2>
            <p>
              Add EA's newest releases to your collection with just a few
              clicks.
            </p>
          </div>
          <div className="discover__row">
            <p>Top Ten Streaming Now</p>
            <button>See in the EA APP</button>
          </div>
        </div>
        <div className="discover__games">
          <img className="discover__games-img" src={games} alt="game-list" />
        </div>
      </section>
    </>
  );
}
