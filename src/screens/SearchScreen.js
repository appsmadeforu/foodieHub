import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import Alert from "../components/Alert";
import ResultsList from "../components/ResultsList";
import useSearchResults from "../hooks/useSearchResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchRestaurants, searchResults, error] = useSearchResults();

  const filterResultsByPrice = (price) => {
    return searchResults.filter((result) => result.price === price);
  };
  return (
    <ScrollView>
      <SearchBar
        onTermChange={setTerm}
        onTermSubmit={() => searchRestaurants(term)}
        term={term}
      ></SearchBar>
      {error && <Alert type={error.type} alertMessage={error.message}></Alert>}
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender!" />
      <ResultsList results={filterResultsByPrice('$$$$')} title="Wayyy too Pricey!!" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
