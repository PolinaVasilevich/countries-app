import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import Info from "../components/Info";

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [coutry, setCountry] = useState(null);

  const getDetailtsCountry = async () => {
    const response = await axios.get(searchByCountry(name));
    setCountry(response.data[0]);
  };

  useEffect(() => {
    getDetailtsCountry();
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {coutry && <Info {...coutry} push={navigate} />}
    </div>
  );
};

export default Details;
