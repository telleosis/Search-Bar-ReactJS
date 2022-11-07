import React, { useState } from "react";
import { Search } from "react-feather";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const searchBarStyle = {
  width: "70%",
  padding: "1.4%",
  outline: "none",
  border: "none",
};

const searchButtonStyle = {
  //   border: "none",
};

const SearchBar = (props) => {
  const { onSearch, inputOnChange } = props;

  return (
    <>
      <div className="input-group bg-blue-400">
        <div className="input-group-prepend">
          <span className="input-group-text h-100" id="basic-addon1">
            <Search color="#182252" />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Search Key"
          style={searchBarStyle}
          onChange={inputOnChange}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            onClick={onSearch}
            style={searchButtonStyle}
            className="btn btn-lg btn-blue-800"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = () => {
    console.log("Options Fetched from API");

    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          myOptions.push(res.data[i].employee_name);
        }
        setMyOptions(myOptions);
      });
  };

  return (
    <div style={{ marginLeft: "40%", marginTop: "60px" }}>
      <h3>Greetings from GeeksforGeeks!</h3>
      <Autocomplete
        style={{ width: 700 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />

      <SearchBar />
    </div>
  );
};

export default App;
