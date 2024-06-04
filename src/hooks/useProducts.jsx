import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, getProducts } from '../api/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({ queryKey: ['products'], queryFn: () => getProducts })
  
  const addProduct = useMutation({
    mutationFn: ({ url, product }) => addNewProduct(url, product),
    onSuccess: async () => queryClient.invalidateQueries(['products'])
  })

  return { productsQuery, addProduct };
}