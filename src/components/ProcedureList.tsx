import React from 'react';

// This component receives a list of procedure results from Home.tsx
// and displays each procedure in a clickable list.
// When a procedure is clicked, it triggers `onSelect()`
// to show the full procedure content.

interface Procedure {
  id: number;
  title: string;
  content: string;
}

interface Props {
  results: Procedure[]; // List of procedures to show
  onSelect: (proc: Procedure) => void; // Function to run when a procedure is clicked
}

const ProcedureList: React.FC<Props> = ({ results, onSelect }) => {
  return (
    <div className="mt-6 w-full max-w-3xl">
      {/* If no matching procedures found */}
      {results.length === 0 ? (
        <p className="text-center text-gray-500">No procedures found.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((proc) => (
            <li
              key={proc.id}
              onClick={() => onSelect(proc)}
              className="border p-4 rounded hover:bg-gray-100 cursor-pointer"
            >
              <strong>{proc.title}</strong>
              <p className="text-sm text-gray-500 truncate">{proc.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProcedureList;

