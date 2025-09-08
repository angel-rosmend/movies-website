"use client";

import { MovieCardType } from "@/lib/models";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface WatchListState {
  items: MovieCardType[];
  addItem: (item: MovieCardType) => void;
  removeItem: (id: number) => void;
  hasItem: (id: number) => boolean;
  clearItems: () => void;
}
interface ItemsProviderProps {
  children: ReactNode;
}

const WatchListItemsContext = createContext<WatchListState | undefined>(
  undefined
);

export function WatchListProvider({ children }: ItemsProviderProps) {
  const [items, setItems] = useState<MovieCardType[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedItems = localStorage.getItem("movies-watch-list");
    if (savedItems) {
      try {
        const parsedItems = JSON.parse(savedItems);
        if (Array.isArray(parsedItems)) {
          setItems(parsedItems);
        }
      } catch (error) {
        console.error("Failed to parse saved items:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("movies-watch-list", JSON.stringify(items));
    }
  }, [items, isLoaded]);
  
  const addItem = (newMovie: MovieCardType) => {
    setItems((prevItems) => {
      if (prevItems.some((item) => item.id === newMovie.id)) {
        return prevItems;
      } else {
        return [...prevItems, newMovie];
      }
    });
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const hasItem = (id: number) => {
    return items.some((item) => item.id === id);
  };

  const clearItems = () => {
    setItems([]);
  };

  const value: WatchListState = {
    items,
    addItem,
    removeItem,
    hasItem,
    clearItems,
  };

  return (
    <WatchListItemsContext.Provider value={value}>
      {children}
    </WatchListItemsContext.Provider>
  );
}

export function useWatchList() {
  const context = useContext(WatchListItemsContext);
  if (context === undefined) {
    throw new Error("useWatchList must be used within an ItemsProvider");
  }
  return context;
}
