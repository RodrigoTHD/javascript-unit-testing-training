import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query/queryClient';
import { Calculator } from './components/Calculator';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Calculator />
      {/* <Profiles /> */}
    </QueryClientProvider>
  );
}

export default App;
