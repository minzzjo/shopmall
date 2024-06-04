import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { addOrUpdateCarts, getCarts, removeCarts } from '../api/firebase';

export default function useCarts() {
  const queryClient = useQueryClient();
  const { uid } = useAuthContext();

  const cartsQuery = useQuery({ queryKey: ['carts', uid || ''], queryFn: () => getCarts(uid), enabled: !!uid });

  const addOrUpdateCartItem = useMutation({
    mutationFn: (product) => addOrUpdateCarts(uid, product),
    onSuccess: async () => {queryClient.invalidateQueries(['carts', uid])}
  })

  const removeCartItem = useMutation({
    mutationFn: (id) => removeCarts(uid, id),
    onSuccess: async () => {queryClient.invalidateQueries(['carts', uid])}
  })

  return { cartsQuery, addOrUpdateCartItem, removeCartItem };
}

