import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from "./container.module.scss"
import clsx from 'clsx';

const Container: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({className, children}) => {
  return (
    <div className={clsx(className, styles.container)}>
      {children}
    </div>
  );
};

export default Container;
