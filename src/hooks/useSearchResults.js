import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const searchRestaurants = async (searchTerm) => {
    try {
      const results = await yelp.get("/search", {
        params: {limit: 50, term: searchTerm, location: "san jose"},
      });
      setSearchResults(results.data.businesses);
    } catch (error) {
      setError({ type: "error", message: "Something went wrong" });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, [error]);

  useEffect(() => {
    searchRestaurants("pasta");
  }, []);

  return [searchRestaurants, searchResults, error];
};
