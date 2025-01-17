import React from 'react';
import Task from '../Task/Task';

const Column = ({ title, tasks, onDropTask }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('taskId');
    onDropTask(taskId, title);
  };

  return (
    <div
      className="w-1/3 p-4 bg-gray-100 rounded"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;