import { createContext } from 'react';
import { ITask } from 'types/ITask';

type ITasksContext = {
  tasks: ITask[],
  addTask: (task: ITask) => void
}

export const initialTasksState: ITasksContext = {
  tasks: [{id: 1, name: "Today Tasks"}],
  addTask: () => true
}

export const TaskContext = createContext<ITasksContext>(initialTasksState)

export const TaskContextProvider = TaskContext.Provider