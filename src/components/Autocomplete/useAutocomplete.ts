import { useEffect, useState } from "react";

export interface AutocompleteProps {
  /**
   * The API endpoint URL from which autocomplete suggestions are fetched.
   * This is required when the `mode` is set to `"server"`.
   */
  url?: string;

  /**
   * Determines how autocomplete suggestions are retrieved.
   * - `"client"`: Suggestions are filtered on the client-side from a predefined dataset.
   * - `"server"`: Suggestions are fetched dynamically from a server endpoint.
   *
   * @default "client"
   */
  mode?: "client" | "server";
  /**
   * The dataset used for client-side filtering.
   * Each item consists of a `label` (display text) and a `value` (underlying identifier).
   */
  options: Array<{ label: string; value: string }>;
}

type ClientOption = { label: string; value: string };
type ServerResponse = { products: ClientOption[] };

const useAutocomplete = ({
  url,
  options = [],
  mode = "client",
}: AutocompleteProps) => {
  const [result, setResult] = useState<ClientOption[]>([]);
  const [searchText, setSearchText] = useState("");

  const fetchResult = async () => {
    const response = await fetch(url + searchText);
    const result: ServerResponse = await response.json();
    setResult(result.products);
  };

  const fetchResultSync = () => {
    const result = options.filter((item) =>
      item.label.toLowerCase().includes(searchText.toLowerCase())
    );
    setResult(result);
  };

  useEffect(() => {
    if (mode === "client") {
      fetchResultSync();
    } else {
      fetchResult();
    }
  }, [searchText]);

  return { result, setSearchText, searchText };
};

export default useAutocomplete;
