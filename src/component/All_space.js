import React, { useEffect, useState } from "react";
// import Search from "./Search";
import Space_card from "./Space_card";

const All_space = () => {
  let parseData = "";
  const [articles, setArticles] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  //   const [serchItem, setSerchItem] = useState("");

  const updateRocket = async () => {
    const rocketUrl = `https://api.spacexdata.com/v3/launches`;
    let data = await fetch(rocketUrl);
    parseData = await data.json();
    // console.log(parseData);
    setArticles(parseData);
    console.log(typeof articles);

    setTotalResult(totalResult);
  };
  
  const filterbyupcomming = async (props) => {
    const rocketUrl = `https://api.spacexdata.com/v3/launches/${props.category}`;
    console.log(rocketUrl);
    let data = await fetch(rocketUrl);
    parseData = await data.json();
    // console.log(parseData);
    setArticles(parseData);
    // console.log(articles);
    console.log(typeof articles);
    setTotalResult(totalResult);
  };

  useEffect(() => {
    updateRocket();
  }, []);

  //   let serchData = parseData.serchItem((item) => {
  //     return Object.keys(item).some((key) =>
  //       item[key]
  //         .toString()
  //         .toLowerCase()
  //         .includes(serchItem.toString().toLowerCase())
  //     );
  //   });
  //   console.log(serchItem);

  return (
    <>
      {/* <div className="row">
        <div className="col-md-6">
          <form onSubmit={sercchText} className="d-flex mt-4">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={serchItem}
              onChange={sercchText.bind(this)}
            />
           
          </form>
        </div>
      </div> */}
      <div className="row">
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

        <div className="col-md-4"></div>
      </div>

      <div className="row">
        {articles.map((launches) => (
          // eslint-disable-next-line react/jsx-pascal-case
          <Space_card
            // key={launches.url}
            title={launches.mission_name}
            r_name={launches.rocket.rocket_name}
            description={launches.details}
            imageUrl={launches.links.mission_patch_small}
            rlaunch_url={launches.links.article_link}
            year={launches.launch_year}
            status={launches.launch_success}
            isupcomming={launches.upcomming}
            buttontitle="Read More"
          />
        ))}
      </div>
    </>
  );
};

export default All_space;
