import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import Board from './components/Board/Board';
import AddTaskForm from './components/AddTaskForm';

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
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    setColumns({
      ...columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    });
  };

  const addTask = (title) => {
    const newTaskId = task-${Date.now()};
    const newTask = { id: newTaskId, content: title, priority: 'low' };
    const newTasks = { ...tasks, [newTaskId]: newTask };

    const newColumn = {
      ...columns['column-1'],
      taskIds: [...columns['column-1'].taskIds, newTaskId],
    };

    setTasks(newTasks);
    setColumns({
      ...columns,
      'column-1': newColumn,
    });
  };

  const deleteTask = (taskId) => {
    const newTasks = { ...tasks };
    delete newTasks[taskId];

    const newColumns = { ...columns };
    for (const columnId in newColumns) {
      const column = newColumns[columnId];
      column.taskIds = column.taskIds.filter(id => id !== taskId);
    }

    setTasks(newTasks);
    setColumns(newColumns);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Tableau Kanban
            </h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <AddTaskForm onAddTask={addTask} />
          <Board columns={columns} tasks={tasks} onDropTask={onDragEnd} onDeleteTask={deleteTask} />
        </main>
      </div>
    </DragDropContext>
  );
}

export default App;