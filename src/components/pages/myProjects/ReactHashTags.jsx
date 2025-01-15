import { useState } from "react";
import techStack from "./techStack";

// Define incompatible combinations
const impossibleCombinations = [
  ["React", "Angular"], // Both are frontend frameworks
  ["MySQL", "MongoDB"], // Both are databases, not typically used together
  ["Svelte", "Vue"], // Another pair of frontend frameworks
  ["Django", "Express"], // Backend frameworks serving the same purpose
];

function ReactHashTags() {
  const [tags, setTags] = useState(["Next.js", "Docker", "PyTorch"]);
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [error, setError] = useState("");

  const checkImpossibleCombinations = (newTags) => {
    for (const combo of impossibleCombinations) {
      if (combo.every((tech) => newTags.includes(tech))) {
        return `The combination of ${combo.join(" and ")} is not recommended.`;
      }
    }
    return "";
  };

  const handleDelete = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    setError(checkImpossibleCombinations(newTags));
  };

  const handleAddition = (tag) => {
    if (tag && !tags.includes(tag)) {
      const newTags = [...tags, tag];
      const errorMessage = checkImpossibleCombinations(newTags);

      if (errorMessage) {
        setError(errorMessage);
      } else {
        setTags(newTags);
        setError("");
      }
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
    setError("");
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
            placeholder="Type Tech stack tags"
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

      {/* Error Display */}
      {error && <div className="text-red-500">{error}</div>}

      {/* Tags Display */}
      <div className="hash-tags flex gap-3 flex-wrap">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="p-1 bg-white bg-opacity-5 rounded-lg w-fit flex gap-1 justify-center items-center"
          >
            <span className="">#{tag}</span>
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
        Clear tags
      </button>
    </section>
  );
}

export default ReactHashTags;
