import { useEffect, useState } from "react";

export interface AutocompleteProps {
  url: string;
}

const useAutocomplete = ({ url }: AutocompleteProps) => {
  const [result, setResult] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchResult = async () => {
    const response = await fetch(url + searchText);
    const result = await response.json();
    setResult(result.products);
  };

  useEffect(() => {
    fetchResult();
  }, [searchText]);

  return { result, setSearchText, searchText };
};

export default useAutocomplete;
