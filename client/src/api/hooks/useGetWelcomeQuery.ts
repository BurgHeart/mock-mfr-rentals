import { AxiosResponse } from 'axios';
import { axiosClient } from '../axios';
import { useQuery } from '@tanstack/react-query';

type Message = { message: string }
export const useWelcomeMessageQuery = () => {
  return useQuery({
    queryKey: ['home'],
    queryFn: async () => (await axiosClient.get<Message, AxiosResponse<Message>, Error>('/')).data
  })
}