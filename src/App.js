import React, { useState } from "react";
import "./App.css";
import Data from "./Data";

function App() {
  const [data, setdata] = useState(Data);
  const [name, setname] = useState("Black Mirror");
  const [whichSeason, setwhichSeason] = useState(3);
  const [selectedSeason, setselectedSeason] = useState("");

  const nextClick = (item_id, item_name) => {
    var table = document.getElementsByClassName("table")[0];
    table.style.display = "block";
    setselectedSeason(item_id);
  };

  return (
    <div className="canvas">
      <div className="bg">
        {selectedSeason ? (
          <h2
            className="season"
            onClick={() => {
              setselectedSeason("");
            }}
          >
            {" "}
            🡠 {selectedSeason}. Season
          </h2>
        ) : (
          <h2 id="name"> {name}</h2>
        )}
        <div className="table">
          <div className="column">
            {selectedSeason
              ? data.seasons.map((item) => (
                  <div className="line">
                    {item.episodes
                      .filter((x) => x.id == whichSeason)
                      .map((y) => (
                        <div className="column">
                          <h2 className="season">{y.name}</h2>

                          <h2 onClick={() => {}} className="arrow">
                          <div className="season_box">
                            <img
                              className="thumbnail"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpOOxI0BQyfO5VQJVZdZxujd0oGd_DiHuKAw&usqp=CAU"
                              alt="thumnail"
                              with="100"
                              height="80"
                            ></img>
                            <div className="progressbar"></div>
                            </div>
                            <p className="summary">
                            Incididunt sunt nostrud nisi ad ea ut tempor in.
                            Eu veniam consequat duis velit aliqua. .
                          </p>
                          </h2>
                        </div>
                      ))}
                  </div>
                ))
              : data.seasons.map((item) => (
                  <div
                    onClick={() => {
                      nextClick(item.id, item.name);
                    }}
                    className="line"
                  >
                    {whichSeason == item.id ? (
                      <h2 className="check">✔</h2>
                    ) : (
                      <h2 className="check"></h2>
                    )}
                    <h2 className="season"> {item.id}. Season</h2>
                    <h2 className="arrow">🡢</h2>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
