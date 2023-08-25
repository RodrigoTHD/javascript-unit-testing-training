import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query/queryClient';
import { Profiles } from './components/Profiles';
import { Calculator } from './components/Calculator';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Profiles />
      <Calculator />
    </QueryClientProvider>
  );
}

export default App;
