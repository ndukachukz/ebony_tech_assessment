import axios from 'axios';
import {useQuery} from 'react-query';
import {useAppContext} from '../context';
import {FAKESTOREAPI} from '../constants';
import {Product} from '../types';

async function fetchtProducts(): Promise<ReadonlyArray<Product>> {
  const response = await axios.get(FAKESTOREAPI.PRODUCTS());

  return response.data;
}

export function useProducts() {
  const [state, dispatch] = useAppContext();

  const query = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchtProducts(),
    onSuccess(data) {},
    onError(error) {},
  });

  return query;
}
