import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type StoreState = {
  // State
  isLoading: boolean;

  // Actions
  setLoading: (loading: boolean) => void;

};

const useBox = create<StoreState>()(
  devtools(
    set => ({
      // Initial state
      isLoading: false,
      setLoading: (isLoading: boolean) => set({ isLoading }),
    }),
  )
);

export default useBox;
