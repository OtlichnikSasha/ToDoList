import React, { FC } from 'react';
import { ITodo } from '@/types/ITodo';
import styles from './todo-item.module.scss';
import { Switch } from '@mui/material';
import { SwitchUnstyled } from '@mui/base';
import UseSwitchesCustom from '../ui/CustomSwitch';
import clsx from 'clsx';

type TodoItemProps = {
  todo: ITodo
  index: number
  onChange: (id: number) => void
}


const TodoItem: FC<TodoItemProps> = ({todo, index, onChange}) => {
  const determinateBorderColor = () => {
    switch (index) {
      case 1:
        return '#FF0000';
      case 2:
        return '#366EFF';
      case 3:
        return '#FFEB33';

      default:
        return '#FF0000';
    }
  };

  const toggleCompleted = () => {
    onChange(todo.id)
  };

  return (
    <div className={styles.todo_item}>
      <div className={styles.todo_item_data} style={{ borderColor: determinateBorderColor() }}>
        <h5 className={todo.completed ? clsx(styles.todo_item_data__heading, styles.todo_item_data__heading_completed) :
          styles.todo_item_data__heading
        }>
          {todo.name}
        </h5>
        <p className={styles.todo_item_data__description}>
          {todo.description}
        </p>
      </div>
      <div>
        <Switch
          checked={todo.completed}
          onChange={toggleCompleted}
          className={styles.todo_item_switch}
        />
      </div>
    </div>
  );
};

export default TodoItem;