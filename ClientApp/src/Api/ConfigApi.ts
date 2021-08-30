import { IAuthConfig } from '../Models/AuthConfig';
import { Get } from './RequestBase';

export const GetAuth0Config = async (): Promise<IAuthConfig | null> => {
  const res = await Get<IAuthConfig>('api/public');

  return res;
};
