import './App.css';
import Title from './components/Title.tsx';
import InputForm from './components/InputForm.tsx';
import TodoList from './components/TodoList.tsx';
import { useState } from 'react';
import React from 'react';
import { Task } from './types';

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
