import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import TasksList from 'components/TasksList/TasksList';
import News from 'components/News/News';
import Context from './context/index';

const queryClient = new QueryClient();

function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Context>
          <TasksList />
          <News />
        </Context>
      </QueryClientProvider>
    </main>
  );
}

export default App;
