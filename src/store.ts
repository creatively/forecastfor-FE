import create from "zustand";
//import WeatherJsonInterface  from './interfaces/WeatherJsonInterface'

interface Temp {
    myText: string
}

// >>>> NEXT >>>>> add default WeatherJsonInterface object to the store

const useStore = create<Temp>((set, get) => ({
    myText: 'this is the original value of myText'
}))

export default useStore;

/*
getPosts: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    set({ posts: await response.json() })
  }
*/