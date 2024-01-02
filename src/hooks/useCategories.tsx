import axios from 'axios';
import {useQueries, useQuery} from 'react-query';
import {useAppContext} from '../context';
import {FAKESTOREAPI} from '../constants';

export function useCategories() {
  const [] = useAppContext();
  const query = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return axios.get(FAKESTOREAPI.CATEGORIES());
    },
    onSuccess(data) {
      console.log('FETCHED CATEGORIES => ', data.data);
    },
    onError(error) {
      console.log('ERROR FETCHING CATEGORIES => ', error);
    },
  });

  return query;
}
