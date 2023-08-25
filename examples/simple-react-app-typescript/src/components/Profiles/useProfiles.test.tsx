import axios from 'axios';
import { profilesListMock } from './testUtils';
import { renderHook, waitFor } from '@testing-library/react';
import { useProfiles } from './useProfiles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

describe('useProfiles', () => {
  it('should return a profile list', async () => {
    // arrange
    const spyGet = jest.spyOn(axios, 'get');
    spyGet.mockResolvedValue({
      data: profilesListMock
    });

    // act
    const { result } = renderHook(
      () => {
        return useProfiles();
      },
      {
        wrapper: ({ children }: { children: ReactNode }) => {
          return (
            <QueryClientProvider client={new QueryClient()}>
              {children}
            </QueryClientProvider>
          );
        }
      }
    );

    // assert
    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.data).toBeUndefined();

    await waitFor(() => {
      expect(result.current.data).toBe(profilesListMock);
    });

    expect(result.current.isLoading).toBeFalsy();

    // expect(result.current.data).toBe(profilesListMock);
    // expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });
});
