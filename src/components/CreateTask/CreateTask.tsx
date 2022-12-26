import React, { ChangeEvent, useContext, useState } from 'react';
import { TextField } from '@mui/material';
import styles from './create-task.module.scss';
import { TaskContext } from 'context/tasks.context';

const saveIcon =
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
    <path
      d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'
    />
  </svg>;

const CreateTask = () => {
  const { addTask, tasks } = useContext(TaskContext);
  const [taskName, setTaskName] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const saveTask = () => {
    const task = {
      id: Date.now(),
      name: taskName.toString().trim(),
    };
    addTask(task);
    setTaskName('');
  };

  return (
    <section className={styles.create_task}>
      {tasks.length ?
        <p className={styles.create_task__heading}>
          Создать новый таск
        </p>
        :
        <></>
      }
      <div className={styles.create_task__data}>
        <TextField
          label='Введите название'
          variant='outlined'
          onChange={changeHandler}
          className={styles.input}
          value={taskName}
        />
        {taskName.length ?
          <div className={styles.icon} onClick={saveTask}>
            {saveIcon}
          </div>
          :
          <></>
        }
      </div>
    </section>
  );
};

export default CreateTask;