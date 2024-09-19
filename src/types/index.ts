export type Task = {
  id: number;
  text: string | null;
  completed: boolean;
};

export type InputFormProps = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

export type TodoListProps = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};
