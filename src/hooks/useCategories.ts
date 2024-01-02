import axios, {isAxiosError} from 'axios';
import {useQueries, useQuery} from 'react-query';
import {useAppContext} from '../context';
import {FAKESTOREAPI} from '../constants';

async function fetchCategories(): Promise<string[]> {
  const url = FAKESTOREAPI.CATEGORIES();

  const response = await axios.get(url);
  return response.data;
}

export function useCategories() {
  const [_, dispatch] = useAppContext();

  const query = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    onSuccess(data) {
      console.log('FETCHED CATEGORIES => ', data);
      dispatch({type: 'set_categories', payload: {categories: data}});
    },
    onError(error) {
      if (isAxiosError(error))
        console.log('ERROR FETCHING CATEGORIES => ', error.message);
    },
  });

  return query;
}
