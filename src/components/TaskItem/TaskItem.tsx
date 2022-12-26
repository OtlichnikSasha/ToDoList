import React, { FC, useState } from 'react';
import { ITask } from '../../types/ITask';
import TodoList from '../TodoList/TodoList';
import styles from "./task-item.module.scss"
import clsx from 'clsx';

const chevron = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
  />
  </svg>

const TaskItem: FC<{ task: ITask }> = ({task}) => {
  const [openTodos, setOpenTodos] = useState(false)

  const toggleOpenTodo = () => setOpenTodos(!openTodos)

  return (
    <>
      <div className={styles.task}>
        <div className={styles.task__wrapper}>
          <p className={styles.task__wrapper_text}>
            {task.name}
          </p>
          <div className={openTodos ? clsx(styles.task__wrapper_icon, styles.task__wrapper_icon_active)
            : styles.task__wrapper_icon
          }
               onClick={toggleOpenTodo}
          >
            {chevron}
          </div>
        </div>
      </div>
      <TodoList open={openTodos} />
    </>
  );
};

export default TaskItem;