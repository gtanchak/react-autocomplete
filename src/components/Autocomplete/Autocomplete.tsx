import useAutocomplete, { AutocompleteProps } from "./useAutocomplete";

const Autocomplete = ({ url }: AutocompleteProps) => {
  const { result, setSearchText, searchText } = useAutocomplete({ url });
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div>
        <ul>
          {result?.map((item: any) => (
            <li>{item?.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Autocomplete;
