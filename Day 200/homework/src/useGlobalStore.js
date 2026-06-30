import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


const useGlobalStore = create(
  persist(
    (set) => ({
      
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

      
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),

      
      username: '',
      setUsername: (name) => set({ username: name }),
      clearUsername: () => set({ username: '' }),

      
      favorites: [],
      addFavorite: (item) =>
        set((state) => ({ favorites: [...state.favorites, item] })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== id),
        })),

      
      language: 'kaka',
      setLanguage: (lang) => set({ language: lang }),

      // 6) Notification Settings Slice
      notificationsEnabled: true,
      toggleNotifications: () =>
        set((state) => ({ notificationsEnabled: !state.notificationsEnabled })),

      
      todos: [],
      addTodo: (text) =>
        set((state) => ({
          todos: [...state.todos, { id: Date.now(), text, completed: false }],
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      
      cart: [],
      addProduct: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeProduct: (id) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'app-state-storage', // სახელი LocalStorage-ისთვის
    }
  )
);

export default useGlobalStore;