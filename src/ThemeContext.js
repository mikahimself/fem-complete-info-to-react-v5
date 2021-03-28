import { createContext } from 'react';

// The empty function is a placeholder. If there is no provider
// above the context, it will use this (although there's probably always a provider)
// The stuff passed as an argument is really a hook that has a state and 
// an set State updater, but in this case, the updater doesn't do anything.
const ThemeContext = createContext(["green", () => {}])

// Check usage from SearchParams and Details

export default ThemeContext;