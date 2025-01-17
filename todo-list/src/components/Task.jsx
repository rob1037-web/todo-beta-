import React from 'react';
import { MoreHorizontal } from 'lucide-react';

function Task({ task, provided, snapshot }) {
  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  };

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`bg-white rounded-lg shadow p-4 ${
        snapshot.isDragging ? 'shadow-lg' : ''
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-900">{task.content}</p>
          <div className="mt-2 flex items-center space-x-2">
            <span className={text-xs px-2 py-1 rounded-full ${priorityColors[task.priority]}}>
              {task.priority}
            </span>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <MoreHorizontal className="h-4 w-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
}

export default Task;