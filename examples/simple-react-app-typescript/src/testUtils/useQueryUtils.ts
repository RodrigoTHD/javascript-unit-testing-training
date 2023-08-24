import { UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const createUseQueryResultMock = <TData = unknown, TError = AxiosError>(
  props = {}
) => ({ data: {}, ...props } as UseQueryResult<TData, TError>);
