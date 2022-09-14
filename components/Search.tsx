import { Dispatch, SetStateAction } from "react";

type Props = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  queryType: string;
  setQueryType: Dispatch<SetStateAction<string>>;
  sortByTitle: boolean;
  setSortByTitle: Dispatch<SetStateAction<boolean>>;
};

const Search = ({
  query,
  setQuery,
  queryType,
  setQueryType,
  sortByTitle,
  setSortByTitle,
}: Props) => {
  return (
    <div className="mt-5 flex w-full justify-center">
      <input
        type="text"
        className="w-1/3 rounded-l-md px-5 text-black outline-none"
        placeholder="Search Books and Magazines"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        value={queryType}
        className="select w-24 rounded-none rounded-r-md bg-neutral focus:outline-none"
        onChange={(e) => setQueryType(e.target.value)}
      >
        <option value="email">Email</option>
        <option value="isbn">ISBN</option>
      </select>
      <button
        className="btn ml-5 text-xs"
        onClick={() => setSortByTitle((val) => !val)}
      >
        Sort by Title : {sortByTitle ? "true" : "false"}
      </button>
    </div>
  );
};

export default Search;
