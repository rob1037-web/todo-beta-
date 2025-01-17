import React, { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';

const initialTasks = {
  'task-1': { id: 'task-1', content: 'Préparer la présentation', priority: 'high' },
  'task-2': { id: 'task-2', content: 'Réviser le code', priority: 'medium' },
  'task-3': { id: 'task-3', content: 'Tester l\'application', priority: 'low' },
};

const initialColumns = {
  'column-1': {
    id: 'column-1',
    title: 'À faire',
    taskIds: ['task-1', 'task-2'],
  },
  'column-2': {
    id: 'column-2',
    title: 'En cours',
    taskIds: ['task-3'],
  },
  'column-3': {
    id: 'column-3',
    title: 'Terminé',
    taskIds: [],
  },
};

const columnOrder = ['column-1', 'column-2', 'column-3'];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    // La logique de drag and drop sera implémentée ici
    console.log('Drag ended', result);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Tableau Kanban
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {columnOrder.map((columnId) => {
              const column = columns[columnId];
              const columnTasks = column.taskIds.map(taskId => tasks[taskId]);
              
              return (
                <div 
                  key={column.id}
                  className="flex-shrink-0 w-72 bg-gray-200 rounded-lg p-4"
                >
                  <h2 className="font-bold mb-4">{column.title}</h2>
                  {/* Les composants Column et Task seront ajoutés ici */}
                  <div className="space-y-2">
                    {columnTasks.map(task => (
                      <div 
                        key={task.id}
                        className="bg-white p-4 rounded shadow"
                      >
                        {task.content}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </main>
    </div>
  );
}

export default App;