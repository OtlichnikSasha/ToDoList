import React, { FC, useState } from 'react';
import { todos } from 'components/TodoList/todoList.data';
import TodoItem from 'components/TodoItem/TodoItem';
import { domAnimation, LazyMotion, motion } from 'framer-motion';
import styles from './todo-list.module.scss';

type TodoList = {
  open: boolean
}

const todoListVariant = {
  open: {
    opacity: 1,
    height: 'auto',
    minHeight: '200px',
    margin: '-16px 0',
  },
  collapsed: { opacity: 0, height: 0, margin: '0px', minHeight: 0 },
};

const TodoListItem: FC<TodoList> = ({ open }) => {
  const [todosList, setTodosList] = useState(todos);

  const changeTodoCompleted = (id: number) => {
    const todoUpdates = todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodosList(todoUpdates);
  };

  return (
    <LazyMotion features={domAnimation}>
      {open && (
        <motion.div
          variants={todoListVariant}
          initial='collapsed'
          animate='open'
          exit='collapsed'
          inherit={false}
          className={styles.todo_item}
        >
          <motion.div className={styles.todo_data}>
            {todosList.map((todo, i) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                index={i + 1}
                onChange={changeTodoCompleted}
              />
            ))}
          </motion.div>
        </motion.div>
      )
      }
    </LazyMotion>
  );
};

export default TodoListItem;