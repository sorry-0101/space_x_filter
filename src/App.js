import Space_card from "./component/Space_card";
import Navbar from "./component/Navbar";
import { useState } from "react";
import All_space from "./component/All_space";
import Posts from "./component/Posts";

function App() {
  // const axios = require("axios");
  // var all_spacex = {
  //   method: "get",
  //   url: "https://api.spacexdata.com/v3/launches",
  //   headers: {},
  // };

  // axios(all_spacex)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // const [artical_url, setArtical_rul] = useState("");

  // cont;

  return (
    <>
      <Navbar />
      <div className="container">

        {/* <All_space /> */}
  
        <Posts />
  
      </div>
    </>
  );
}

export default App;
