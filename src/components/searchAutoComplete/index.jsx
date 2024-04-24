import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const SearchAPI = () => {
  const [loading, setLoading] = useState(false);
  const [users, setusers] = useState([]);
  const [searchParam, setSearchParam] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [fillterdUsers, setFillterdUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch(`https://dummyjson.com/users`);
      const result = await response.json();
      if (result && result.users && result.users.length){
        setusers(result.users.map(elem => elem.firstName));
      } 
    } catch (e) {
      console.log(e);
    }
  }
  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filterdData =
        users && users.length
          ? users.filter((elem) => elem.toLowerCase().indexOf(query) > -1)
          : [];
        setFillterdUsers(filterdData)
        setShowDropDown(true)
    }else{
        setShowDropDown(false)
    }
  };
  const handleClick = (event) => {
    console.log(event.target.innerText);
    setShowDropDown(false)
    setSearchParam(event.target.innerText)
    setFillterdUsers([])
  }
  return (
    <div className="search-autocomplete-container"
    style={{
        height:'100vh',
        textAlign:'center',
        paddingTop:'200px'
    }}>
      <input
        name="search-users"
        value={searchParam}
        onChange={ (event) => handleChange(event)}
      />
      {
        showDropDown && <Suggestions handleClick={handleClick} data={fillterdUsers}/>
      }
    </div>
  );
};

export default SearchAPI;
