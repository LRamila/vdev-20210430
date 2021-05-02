import create from "zustand";
type Store = {
    count: number;
    newCount: number;
    setCount: (count: number) => void;
  };
  
  const useStore = create<Store>(
    (set): Store => ({
        count: 3,
        newCount: 0,
        setCount: (count: number) =>
        set((state) => ({
          ...state,
          count,
        })),
    })
  );
  export default useStore;
  