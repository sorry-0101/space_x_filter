import React, { useState } from "react";
// import {
//   parseData,
//   setArticles,
//   articles,
//   setTotalResult,
//   totalResult,
// } from "All_space.js";

const Search = (props) => {
  // const [serchItem, setSerchItem] = useState("");

  // const sercchText = (e) => {
  //   setSerchItem(e.target.value);
  // };

  const filterbyupcomming = async () => {
    const rocketUrl = `https://api.spacexdata.com/v3/launches?=${props.category}`;
    console.log(rocketUrl);
    let data = await fetch(rocketUrl);
    props.parseData = await data.json();
    // console.log(parseData);
    props.setArticles(props.parseData);
    console.log(props.articles);
    props.setTotalResult(props.totalResult);
  };

  return (
    <>
      <div className="col-md-4">
        <button
          className="btn btn-primary mt-4"
          onChange={filterbyupcomming}
          category="upcoming"
        >
          Up comming
        </button>
      </div>
      <div className="col-md-4">
        <button
          className="btn btn-primary mt-4"
          onChange={filterbyupcomming}
          category="past"
        >
          Past
        </button>
      </div>
    </>
  );
};

export default Search;
