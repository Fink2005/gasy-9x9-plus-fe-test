import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type StoreState = {
  // State
  loadingItems: {
    [boxNumber: number]: boolean;
  };

  // Actions
  setLoading: (loading: boolean, boxNumber: number) => void;
};

const useBox = create<StoreState>()(
  devtools(
    set => ({
      // Initial state
      loadingItems: {},
      setLoading: (isLoading: boolean, boxNumber: number) => set({ loadingItems: {
        [boxNumber]: isLoading,
      } }),
    }),
  )
);

export default useBox;
