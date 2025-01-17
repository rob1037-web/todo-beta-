import React from 'react';
import Column from './Column';

const Board = ({ columns, tasks, onDropTask }) => {
  return (
    <div className="flex space-x-4">
      {columns.map((column) => (
        <Column
          key={column.id}
          title={column.title}
          tasks={tasks.filter((task) => task.columnId === column.id)}
          onDropTask={onDropTask}
        />
      ))}
    </div>
  );
};

export default Board;