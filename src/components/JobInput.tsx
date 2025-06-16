import React, { useState } from 'react';

// This component handles the text input from the user.
// When the user enters their job task and clicks search,
// it sends the input up to the parent via `onSearch`.

interface Props {
  onSearch: (query: string) => void; // Function passed from parent to trigger a search
}

const JobInput: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState(''); // Local state for the text input

  const handleSubmit = () => {
    // Only run search if there's actual text entered
    if (input.trim()) {
      onSearch(input); // Call parent handler
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      {/* Input field for job description */}
      <input
        type="text"
        placeholder="Enter your job description..."
        className="border px-4 py-2 rounded w-96"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Button to trigger search */}
      <button
        onClick={handleSubmit}
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
      >
        Search Procedures
      </button>
    </div>
  );
};

export default JobInput;
