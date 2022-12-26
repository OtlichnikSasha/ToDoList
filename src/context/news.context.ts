import { createContext } from 'react';

type INewsContext = {
  isNewsVisible: boolean
  toggleNewsVisible: () => void
}

export const initialNewsState: INewsContext = {
  isNewsVisible: true,
  toggleNewsVisible: () => true
}

export const NewsContext = createContext<INewsContext>(initialNewsState)

export const NewsContextProvider = NewsContext.Provider