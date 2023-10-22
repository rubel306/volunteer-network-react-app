import { useState } from "react";
import HomeCard from "./HomeCard";

const Search = ({ events }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    const searchData = events.filter((item) =>
      item.eventName.toLowerCase().includes(query.toLowerCase())
    );
    setResult(searchData);
    console.log("your search result:  ", searchData);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    const searchData = events.filter((item) =>
      item.eventName.toLowerCase().includes(inputValue.toLowerCase())
    );
    setResult(searchData);
  };
  return (
    <div>
      <div>
        <input
          className="border p-1 rounded-lg"
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="bg-sky-400 px-8 py-1 rounded-lg text-white ml-4"
        >
          Search
        </button>
      </div>

      <div className="search-result events mb-12 mt-12">
        {query && (
          <h2 className="font-bold text-3xl my-4">
            Search Result for: <b> {query} </b>
          </h2>
        )}

        <div className=" grid grid-cols-4 gap-4">
          {query &&
            result.map((event) => (
              <HomeCard key={event.id} event={event}></HomeCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
