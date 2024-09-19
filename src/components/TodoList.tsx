import React from 'react';
import { TodoListProps } from '../types';

const TodoList: React.FC<TodoListProps> = ({ taskList, setTaskList }) => {
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleCompleted = (id: number) => {
    //取り消し線をつける
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };
  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => (
          <div
            className={`todo ${task.completed ? 'completed' : ''}`}
            key={index}
          >
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button onClick={() => handleCompleted(task.id)}>
                <i
                  className="fa-solid fa-square-check fa-2xl"
                  style={{ color: '#0000ff' }}
                ></i>
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <i
                  className="fa-solid fa-square-minus fa-2xl"
                  style={{ color: '#ff0000' }}
                ></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
