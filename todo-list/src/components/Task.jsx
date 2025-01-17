import React from 'react';
import { motion } from 'framer-motion';

const Task = ({ task, onDeleteTask }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('taskId', task.id);
  };

  return (
    <motion.div
      className="p-4 mb-4 bg-white rounded shadow cursor-pointer flex justify-between items-center"
      draggable
      onDragStart={handleDragStart}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileDrag={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" }}
    >
      <span>{task.content}</span>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="ml-4 p-2 bg-red-500 text-white rounded"
      >
        Supprimer
      </button>
    </motion.div>
  );
};

export default Task;