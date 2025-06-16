import React, { useState } from 'react';
import JobInput from '../components/JobInput';
import ProcedureList from '../components/ProcedureList';

// TypeScript interface for a procedure item
interface Procedure {
  id: number;
  title: string;
  content: string;
}

// Initial list of fake demo procedures
const initialProcedures: Procedure[] = [
  {
    id: 1,
    title: 'Hydrovac Trenching SOP',
    content: 'Step 1: Setup unit...\nStep 2: Verify permits...',
  },
  {
    id: 2,
    title: 'Boom Truck Operation',
    content: '1. Inspect rigging...\n2. Follow lift plan...',
  },
  {
    id: 3,
    title: 'Gripper Unit Install',
    content: 'Checklist:\n- Gloves on\n- Pressure test complete...',
  },
];

const Home: React.FC = () => {
  // State to hold the full list of procedures (addable at runtime)
  const [procedures, setProcedures] = useState(initialProcedures);

  // State to hold the current search results
  const [results, setResults] = useState<Procedure[]>([]);

  // State to hold which procedure was clicked (shows full details)
  const [selected, setSelected] = useState<Procedure | null>(null);

  // State for showing/hiding the add form
  const [showForm, setShowForm] = useState(false);

  // Controlled inputs for the add form
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  // Called when the user types a job description and clicks Search
  const handleSearch = (query: string) => {
    const filtered = procedures.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.content.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered); // Update search results
    setSelected(null); // Clear previously viewed procedure
  };

  // Adds a new demo procedure to the list
  const handleAddProcedure = () => {
    if (!newTitle.trim() || !newContent.trim()) return;

    const newProc = {
      id: procedures.length + 1,
      title: newTitle,
      content: newContent,
    };

    const updated = [...procedures, newProc];
    setProcedures(updated);      // Add to full list
    setResults(updated);         // Update search result display too
    setNewTitle('');             // Clear form fields
    setNewContent('');
    setShowForm(false);          // Hide form again
  };

  return (
    <div className="min-h-screen px-4 py-10 flex flex-col items-center bg-white text-black">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">Welcome to Oil Buddy</h1>

      {/* Subtext */}
      <p className="text-lg text-gray-700 text-center max-w-xl">
        This app will help you find and review the correct procedures based on your daily job duties.
      </p>

      {/* Job input field and search button */}
      <JobInput onSearch={handleSearch} />

      {/* Toggle to show/hide add form */}
      <button
        className="mt-6 text-sm text-blue-600 underline"
        onClick={() => setShowForm((prev) => !prev)}
      >
        + Add Demo Procedure
      </button>

      {/* Form to add new demo procedure */}
      {showForm && (
        <div className="mt-4 border p-4 w-full max-w-2xl bg-gray-50 rounded">
          <input
            type="text"
            placeholder="Procedure title"
            className="block w-full mb-2 px-3 py-2 border rounded"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            placeholder="Procedure content..."
            className="block w-full mb-2 px-3 py-2 border rounded"
            rows={4}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button
            onClick={handleAddProcedure}
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Add Procedure
          </button>
        </div>
      )}

      {/* Show full procedure view when one is selected */}
      {selected ? (
        <div className="mt-8 border p-6 rounded shadow w-full max-w-3xl bg-gray-100">
          <h2 className="text-2xl font-semibold mb-2">{selected.title}</h2>
          <pre className="whitespace-pre-wrap text-gray-800">{selected.content}</pre>
          <button
            className="mt-4 text-sm text-blue-600 hover:underline"
            onClick={() => setSelected(null)}
          >
            ← Back to results
          </button>
        </div>
      ) : (
        // Show procedure list (search results or full list)
        <ProcedureList results={results} onSelect={setSelected} />
      )}
    </div>
  );
};

export default Home;
