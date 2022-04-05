import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectMonthFilter, setSelectMonthFilter] = useState({});

  // axios.post(`${API}/launches/query`, { options: params })

  useEffect(() => {
    axios.get(`https://api.spacexdata.com/v4/launches`).then((response) => {
      setAPIData(response.data);
      console.log(typeof APIData);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    // console.log(searchValue)
    if (searchInput !== "") {
      const SearchfilteredData = APIData.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      // console.log(SearchfilteredData);
      setFilteredResults(SearchfilteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  const up = (upc) => {
    console.log(upc);
    if (upc) {
      const updateItem = APIData.filter((cuElem) => {
        return cuElem.upcoming === true;
      });
      setAPIData(updateItem);
      console.log(upc);
      console.log(updateItem);
    } else {
      setAPIData(APIData);
    }
  };

  const success = (succ) => {
    console.log(succ);
    if (succ) {
      const updateItem = APIData.filter((cuElem) => {
        return cuElem.success === true;
      });
      setAPIData(updateItem);
      console.log(succ);
      console.log(updateItem);
    } else {
      setAPIData(APIData);
    }
  };

  const fail = (fail) => {
    console.log(fail);
    if (fail) {
      const updateItem = APIData.filter((cuElem) => {
        return cuElem.success === false;
      });
      setAPIData(updateItem);
      console.log(fail);
      console.log(updateItem);
    } else {
      setAPIData(APIData);
    }
  };

  const filterdopdown = (e) => {
    setSelectMonthFilter(...[e.target.value]);
    console.log(selectMonthFilter);
    if (selectMonthFilter == "2006") {
      // setAPIData(e.date_local);
      let filteredData = APIData.filter(function (item) {
        return item.date_local === "2006-03-25T10:30:00+12:00";
        setAPIData(filteredData);
      });
    } else {
      let filteredData = APIData.filter(function (item) {
        return item.date_local === "2006-03-25T10:30:00+12:00";
        setAPIData(filteredData);
      });
    }
  };

  return (
    <>
      <div className="row mt-4 mb-4">
        <div className="col-md-12">
          <h4 className="text-center">
            Use Filter Option For Better Experience
          </h4>
          <hr></hr>
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            type="search"
            icon="search"
            placeholder="Search by Rocket Name"
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            value={selectMonthFilter.name}
            onChange={filterdopdown}
          >
            <option value="">Search By week, month, year</option>
            <option value="Past_week">Past Week</option>
            <option value="2006">Past Month</option>
            <option value="Past_Year">Past Year</option>
          </select>
        </div>

        <div className="col-md-4 d-flex justify-content-around">
          <button className="btn btn-primary" onClick={() => up("true")}>
            Upcoming
          </button>

          <button className="btn btn-primary" onClick={() => fail("false")}>
            Fail
          </button>
          <button className="btn btn-primary" onClick={() => success("true")}>
            success
          </button>
        </div>
      </div>
      <div className="row">
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <div
                  className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mt-2 mb-2"
                  // key={item.links.mission_id}
                  key={Math.random()}
                >
                  <div className="card ">
                    <img
                      src={item.links.flickr.original[1]}
                      className="card-img-top"
                      alt="Space x"
                      style={{ height: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Mission Name:- {item.name}</h5>
                      {/* <p className="card-title">
                        <strong>Rocket Name:-</strong> {item.rocket}
                      </p> */}
                      <span className="card-title">
                        <strong>Description:- </strong>
                        {item.details}
                      </span>
                      <p className="card-text">
                        <strong>Mission Status</strong>:{" "}
                        {item.success ? " Pass" : " Fail"}
                      </p>
                      <p className="card-text">
                        Launch Year:- {item.launch_year}
                      </p>
                      <a
                        href={item.links.article}
                        target="_blank"
                        className="btn btn-primary"
                        rel="noreferrer"
                      >
                        Goto article
                      </a>
                    </div>
                  </div>
                  {/* <div className="card p-2">
                    <div className="card-header">{item.mission_name}</div>
                    <div className="card-body">{item.rocket_name}</div>
                  </div> */}
                </div>
              );
            })
          : APIData.map((item) => {
              return (
                <div
                  className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mt-2 mb-2"
                  key={item.id}

                  // key={Math.random()}
                >
                  {/* <div className="card p-2">
                    <h5 className="card-title">{item.mission_name}</h5>

                    <div className="card-header">{item.mission_name}</div>
                    <div className="card-body">{item.rocket_name}</div>
                  </div> */}
                  <div className="card ">
                    <img
                      src={item.links.flickr.original[1]}
                      className="card-img-top"
                      alt="Space x"
                      style={{ height: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Mission Name:- {item.name}</h5>
                      {/* <p className="card-title">
                        <strong>Rocket Name:-</strong> {item.rocket}
                      </p> */}
                      <span className="card-title">
                        <strong>Description:- </strong>
                        {item.details}
                      </span>
                      <p className="card-text">
                        <strong>Mission Status</strong>:{" "}
                        {item.success ? " Pass" : " Fail"}
                      </p>
                      <p className="card-text">
                        Launch Year:- {item.launch_year}
                      </p>
                      <a
                        href={item.links.article}
                        target="_blank"
                        className="btn btn-primary"
                        rel="noreferrer"
                      >
                        Goto article
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}
