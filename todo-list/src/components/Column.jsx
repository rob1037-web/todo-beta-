import React from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { Plus } from 'lucide-react';
import Task from './Task';

function Column({ column, tasks }) {
  return (
    <div className="w-72 flex-shrink-0">
      <div className="bg-gray-100 rounded-lg p-4">
        {/* En-tête de la colonne */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-gray-700">{column.title}</h2>
          <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm">
            {tasks.length}
          </span>
        </div>

        {/* Zone de drop */}
        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`min-h-[200px] transition-colors ${
                snapshot.isDraggingOver ? 'bg-blue-50' : ''
              }`}
            >
              {/* Liste des tâches */}
              <div className="space-y-2">
                {tasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <Task
                        task={task}
                        provided={provided}
                        snapshot={snapshot}
                      />
                    )}
                  </Draggable>
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Bouton d'ajout de tâche */}
        <button className="mt-4 w-full flex items-center justify-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Ajouter une tâche
        </button>
      </div>
    </div>
  );
}

export default Column;