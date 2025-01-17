import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ajouter une nouvelle tâche"
        className="p-2 border rounded w-full"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Ajouter Tâche
      </button>
    </form>
  );
};

export default AddTaskForm;