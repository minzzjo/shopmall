import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, getProducts as fetchProducts } from '../api/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({ queryKey: ['products'], queryFn: fetchProducts })

  const addProduct = useMutation({
    mutationFn: ({ url, product }) => addNewProduct(url, product),
    onSuccess: async () => queryClient.invalidateQueries(['products'])
  })

  return { productsQuery, addProduct };
}