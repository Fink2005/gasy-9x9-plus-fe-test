import { create } from 'zustand';
import type { PersistOptions } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

type Base64Image = {
  id: number;
  data: string;
  position: string[];
};

type ImageState = {
  base64Images: Base64Image[];
  addBase64Image: (base64: string) => void;
  clearBase64Images: () => void;
  selectImageReview: (img: string) => void;
  numberPosition: string[];
  imageReview: string;
};

// Define persist options with explicit typing
type ImageStatePersist = PersistOptions<ImageState>;

// Array of positions to cycle through
const positions = ['top-10', 'top-20', 'top-28'];

// Create the store with persist middleware
const useImageStore = create<ImageState>()(
  persist(
    set => ({
      imageReview: '',
      numberPosition: positions, // Initial position
      base64Images: [],
      selectImageReview: (img: string) => set({ imageReview: img }),
      addBase64Image: (base64: string) => {
        set((state) => {
          return {
            base64Images: [
              ...state.base64Images,
              { id: Date.now(), data: base64, position: state.numberPosition },
            ],
          };
        });
      },
      clearBase64Images: () => set({ base64Images: [] }),
    }),
    {
      name: 'base64-image-storage',
    } as ImageStatePersist,
  ),
);

export default useImageStore;
