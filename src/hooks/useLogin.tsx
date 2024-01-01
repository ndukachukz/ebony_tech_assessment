import {useToastController} from '@tamagui/toast';
import axios from 'axios';
import {useMutation} from 'react-query';

export function useLogin<T = {username: string; password: string}>() {
  const toast = useToastController();
  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: T) =>
      axios.post('https://fakestoreapi.com/auth/login', data),
    onSuccess: data => {
      console.log('Login Success => ', data);
      toast.show('Login Success', {native: true});
    },
    onError: (error: any) => {
      if (error.response.status === 401) {
        toast.show('username or password is incorrect', {
          native: true,
          message: 'username or password is incorrect',
        });
      } else toast.show('Login Error', {native: true, message: error.message});
    },
  });

  return mutation;
}
