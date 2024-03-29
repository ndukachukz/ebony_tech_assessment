import {useToastController} from '@tamagui/toast';
import axios from 'axios';
import {useMutation} from 'react-query';
import {useAppContext} from '../context';
import {FAKESTOREAPI} from '../constants';

export function useLogin<T = {username: string; password: string}>() {
  const [state, dispach] = useAppContext();
  const toast = useToastController();
  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: T) =>
      axios.post(`${FAKESTOREAPI.BASE_URL}auth/login`, data),
    onSuccess: data => {
      dispach({type: 'set_user', payload: {user: {token: data.data.token}}});
      toast.show('Login Success', {});
    },
    onError: (error: any) => {
      if (error.response.status === 401) {
        toast.show('username or password is incorrect', {
          message: 'username or password is incorrect',
        });
      } else toast.show('Login Error', {message: error.message});
    },
  });

  return mutation;
}
