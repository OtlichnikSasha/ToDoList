import React, { FC, PropsWithChildren, useState } from 'react';
import { TaskContextProvider } from './tasks.context';
import { NewsContextProvider } from './news.context';
import { ITask } from 'types/ITask';

const Index: FC<PropsWithChildren> = ({children}) => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [isNewsVisible, setIsNewsVisible] = useState(true)

  const addTask = (newTask: ITask) => setTasks(tasks.concat(newTask))

  const toggleNewsVisible = () => setIsNewsVisible(!isNewsVisible)

  const newsValues = {
    isNewsVisible,
    toggleNewsVisible
  }

  const taskValues = {
    tasks,
    addTask
  }

  return (
    <TaskContextProvider value={taskValues}>
      <NewsContextProvider value={newsValues}>
        {children}
      </NewsContextProvider>
    </TaskContextProvider>
  );
};

export default Index;