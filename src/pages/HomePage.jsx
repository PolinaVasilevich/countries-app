import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../components/Card";
import Controls from "../components/Controls";
import List from "../components/List";
import { ALL_COUNTRIES } from "../config";
import { useNavigate } from "react-router";

const HomePage = ({ countries, setCountries }) => {
  const navigate = useNavigate();

  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  const getCountries = async () => {
    if (!countries.length) {
      const response = await axios.get(ALL_COUNTRIES);
      setCountries(response.data);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

  return (
    <div>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },

              {
                title: "Region",
                description: c.region.toLocaleString(),
              },

              {
                title: "Capital",
                description: c.capital.toLocaleString(),
              },
            ],
          };
          return (
            <Card
              key={c.name}
              {...countryInfo}
              onClick={() => navigate(`/country/${c.name}`)}
            />
          );
        })}
      </List>
    </div>
  );
};

export default HomePage;
