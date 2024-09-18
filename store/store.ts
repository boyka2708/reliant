import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User } from 'firebase/auth';
import { Product } from '@/Product';
import { auth } from '../firebase'; // Adjust the path to your Firebase setup
import { onAuthStateChanged, signOut} from 'firebase/auth';

interface StoreState {
  user: User | null;
  setUser: (user: User | null) => void;
  signOutUser: () => void;

  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        setUser: (user: User | null) => set({ user }),
        signOutUser: async () => {
          try {
            await signOut(auth);
            set({ user: null, cart: [] }); // Optional: Clear cart on sign out
          } catch (error) {
            console.error('Error signing out:', error);
          }
        },
        cart: [],
        addToCart: (product: Product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }));
        },
        removeFromCart: (product: Product) => {
          const index = get().cart.findIndex((p) => p.title === product.title);

          if (index !== -1) {
            set((state) => {
              const newCart = [...state.cart];
              newCart.splice(index, 1);
              return { cart: newCart };
            });
          }
        },
      }),
      {
        name: 'store', // name of the item in localStorage
      }
    )
  )
);

onAuthStateChanged(auth, (user) => {
  useStore.getState().setUser(user);
});
