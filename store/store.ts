import { Product } from '@/Product';
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

interface Cartstate {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}
export const useCartStore = create<Cartstate>()(
  devtools(
    persist(
      (set,get) =>({
        cart: [],
        addToCart: (product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }));
        },
        removeFromCart : (product) => {
          const producttoRemove = get().cart.findIndex((p) => p.title === product.title);

          set((state) => {
            const newCart = [...state.cart];
            newCart.splice(producttoRemove, 1);
            return {cart: newCart};
          });
        }
      }),
      {
        name: 'cart'
      }
    )
  )
)
 
 