import {
  QueryClient,
  QueryClientProvider,
  UseQueryResult
} from '@tanstack/react-query';
import { RenderHookResult, renderHook } from '@testing-library/react';
import { AxiosError } from 'axios';
import { ReactNode } from 'react';

const defaultOptionsQueries = {
  retry: 0,
  retryDelay: 0,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  structuralSharing: false,
  cacheTime: 0
};

export const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: defaultOptionsQueries
  }
});

export const createUseQueryResultMock = <TData = unknown, TError = AxiosError>(
  props = {}
) => ({ data: {}, ...props } as UseQueryResult<TData, TError>);

const createUseQueryWrapper = (queryClient: QueryClient) => {
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const renderHookUseQuery = <TResult, TProps>(
  render: (initialProps: TProps) => TResult,
  queryClient?: QueryClient
): RenderHookResult<TResult, TProps> => {
  return renderHook(render, {
    wrapper: createUseQueryWrapper(queryClient || mockQueryClient)
  });
};
