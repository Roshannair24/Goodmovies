import React, { useState } from "react";

import "./styles.css";

export default function App() {
  let [listitemname, setlistitemname] = useState("");

  let typesOfMovies = ["Action", "Sci-fi", "Drama"];

  let MovienamesScifi = [
    {
      name: "Matrix",
      imgurl: "./images/a.png",
      rating: "8.7/10",
      desc:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence"
    },
    {
      name: "Dune",
      imgurl: "./images/Dune.jpg",
      rating: "8.5/10",
      desc:
        "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy."
    },
    {
      name: "Guardians of the Galaxy",
      imgurl: "./images/Gog.jpg",
      rating: "8.0/10",
      desc:
        "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe."
    }
  ];

  let MovienamesAction = [
    {
      name: "Shang-Chi and the Legend of the Ten Rings",
      imgurl: "./images/shang.jpg",
      rating: "7.9/10",
      desc:
        "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization."
    },
    {
      name: "Shershaah",
      imgurl: "./images/sher.jpg",
      rating: "8.8/10",
      desc:
        "This is a story of a PVC awardee brave Indian soldier - Capt. Vikram Batra, who shot to fame and became a household name during the Kargil War in 1999."
    },
    {
      name: "Mortal Kombat",
      imgurl: "./images/mc.jpg",
      rating: "6.1/10",
      desc:
        "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe."
    }
  ];

  let MovienamesDrama = [
    {
      name: "The Shawshank Redemption",
      imgurl: "./images/shaww.jpg",
      rating: "9.3/10",
      desc:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      name: "The Godfather",
      imgurl: "./images/god.jpg",
      rating: "9.2/10",
      desc:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son."
    },
    {
      name: "Schindler's List",
      imgurl: "./images/slist.jpg",
      rating: "8.9/10",
      desc:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
    }
  ];

  function clickHandler(btnName) {
    console.log("Clicked: " + btnName);
    console.log("Clicked: " + btnName.target.name);

    setlistitemname(btnName.target.name);
  }

  return (
    <div className="App">
      <h1>
        {" "}
        <span role="img" aria-label="Film Frames">
          🎞️
        </span>{" "}
        GoodMovies
      </h1>
      <p>Where we recommend good movies.</p>

      {typesOfMovies.map(function (x) {
        return (
          <button className="btn-style" onClick={clickHandler} name={x} key={x}>
            {x}
          </button>
        );
      })}

      {listitemname === "" ? null : listitemname === "Sci-fi" ? (
        <ul>
          {MovienamesScifi.map(function (item, index, arr) {
            console.log("listitemname");

            console.log(item.name);

            return (
              <div className="outerholder">
                <li key={index}>
                  <div className="contentholder">
                    <div className="imageholder">
                      <img className="image" src={item.imgurl}></img>
                    </div>

                    <div className="textholder">
                      <div>
                        <h3>
                          <strong> {item.name}</strong>
                        </h3>
                      </div>
                      <div>
                        <p> {item.rating}</p>
                      </div>
                      <div>
                        <p>
                          <small> {item.desc}</small>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      ) : listitemname === "Action" ? (
        <ul>
          {MovienamesAction.map(function (item, index, arr) {
            console.log("listitemname");

            console.log(item.name);

            return (
              <div className="outerholder">
                <li key={index}>
                  <div className="contentholder">
                    <div className="imageholder">
                      <img className="image" src={item.imgurl}></img>
                    </div>

                    <div className="textholder">
                      <div>
                        <h3>
                          <strong> {item.name}</strong>
                        </h3>
                      </div>
                      <div>
                        <p> {item.rating}</p>
                      </div>
                      <div>
                        <p>
                          <small> {item.desc}</small>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      ) : listitemname === "Drama" ? (
        <ul>
          {MovienamesDrama.map(function (item, index, arr) {
            console.log("listitemname");

            console.log(item.name);

            return (
              <div className="outerholder">
                <li key={index}>
                  <div className="contentholder">
                    <div className="imageholder">
                      <img className="image" src={item.imgurl}></img>
                    </div>

                    <div className="textholder">
                      <div>
                        <h3>
                          <strong> {item.name}</strong>
                        </h3>
                      </div>
                      <div>
                        <p> {item.rating}</p>
                      </div>
                      <div>
                        <p>
                          <small> {item.desc}</small>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
