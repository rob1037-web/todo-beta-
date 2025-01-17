import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Task from './Task';

const Column = ({ title, tasks, onDropTask, onDeleteTask }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('taskId');
    onDropTask(taskId, title);
  };

  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 p-4 bg-gray-100 rounded-lg shadow-md"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <AnimatePresence>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Column;