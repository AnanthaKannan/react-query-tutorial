import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function AxiosDataFetching(props) {
  const [user, setUser] = useState(null);
  const [office, setOffice] = useState([])

  const fetchUserData = async(id) => {
    const response = await axios.get('api/user');
    console.log('response-fetchUserData', response)
    setUser(response);
  }

  const fetchOffice = async() => {
    const response = await axios.get("api/office");
    console.log('response-fetchOffice', response)
    setOffice(response);
  }

  useEffect(() => {
    fetchUserData(props.id);
    fetchOffice();
  }, [props.id]);

  if (!user) {
    return "loading...";
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
      {
          office.map(obj => <span data-testid={`test${obj.id}`} key={obj.id}>{obj.name}</span>)
      }
    </details>
  );
}