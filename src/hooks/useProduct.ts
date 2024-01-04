import axios from 'axios';
import {useQueries, useQuery} from 'react-query';
import {useAppContext} from '../context';
import {FAKESTOREAPI} from '../constants';
import {Product} from '../types';

async function fetchProduct(id: number): Promise<Product> {
  const response = await axios.get(FAKESTOREAPI.PRODUCT(id));
  return response.data;
}

export function useProduct(id: number) {
  const [state, dispatch] = useAppContext();
  const query = useQuery({
    queryKey: [`product:${id}`],
    queryFn: () => fetchProduct(id),
    onSuccess(data) {},
    onError(error) {},
  });

  return query;
}
