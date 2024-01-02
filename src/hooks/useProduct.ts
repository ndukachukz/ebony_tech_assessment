import axios from 'axios';
import {useQueries, useQuery} from 'react-query';
import {useAppContext} from '../context';
import {FAKESTOREAPI} from '../constants';

export function useProduct(id: string) {
  const [state, dispatch] = useAppContext();
  const query = useQuery({
    queryKey: [`product:${id}`],
    queryFn: () => {
      return axios.get(FAKESTOREAPI.CATEGORIES());
    },
    onSuccess(data) {
      console.log('FETCHED PRODUCT => ', data.data);
    },
    onError(error) {
      console.log('ERROR FETCHING PRODUCT => ', error);
    },
  });

  return query;
}
