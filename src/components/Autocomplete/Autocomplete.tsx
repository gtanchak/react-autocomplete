import ListItem from "./ListItem";
import useAutocomplete, { AutocompleteProps } from "./useAutocomplete";

const Autocomplete = ({ url, options, mode }: AutocompleteProps) => {
  const { result, setSearchText, searchText } = useAutocomplete({
    url,
    options,
    mode,
  });

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div>
        <ListItem result={result} />
      </div>
    </div>
  );
};

export default Autocomplete;
