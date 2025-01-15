import { useState } from "react";
import techStack from "./techStack";

function ReactHashTags() {
  const [tags, setTags] = useState(["HTML", "CSS", "JavaScript"]);
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleDelete = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleAddition = (tag) => {
    if (tag && !tags.includes(tag)) {
      setTags((prevTags) => [...prevTags, tag]);
    }
    setInputValue("");
    setFilteredSuggestions([]);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      const matches = techStack.filter(
        (tech) =>
          tech.toLowerCase().startsWith(value.toLowerCase()) &&
          !tags.includes(tech)
      );
      setFilteredSuggestions(matches);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddition(inputValue.trim());
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleAddition(suggestion);
  };

  const handleClearAll = () => {
    setTags([]);
  };

  return (
    <section className="flex flex-col gap-3">
      {/* Input Field */}
      <div className="relative">
        <div className="flex gap-3 justify-center items-center w-fit">
          <input
            type="search"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type and press Enter"
            className="input bg-transparent border-[1px] border-text-color focus:border-text-color max-w-xs placeholder-text-color"
          />
          <button
            onClick={() => handleAddition(inputValue.trim())}
            type="button"
            className="btn bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color"
          >
            Add
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {filteredSuggestions.length > 0 && (
          <div className="absolute bg-background-color border border-gray-300 rounded-lg w-full max-w-xs z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-2 hover:bg-white hover:bg-opacity-5 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tags Display */}
      <div className="hash-tags flex gap-3 flex-wrap">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="p-1 bg-white bg-opacity-5 rounded-lg w-fit flex gap-3 justify-center items-center"
          >
            <span className="">{tag}</span>
            <span
              className="px-3 hover:cursor-pointer hover:bg-background-color rounded-lg"
              onClick={() => handleDelete(index)}
            >
              X
            </span>
          </div>
        ))}
      </div>

      {/* Clear All Button */}
      <button
        onClick={handleClearAll}
        type="button"
        className="btn w-fit bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color"
      >
        Clear All
      </button>
    </section>
  );
}

export default ReactHashTags;
