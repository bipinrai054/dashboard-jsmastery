import React from 'react';

const StateContext = React.createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = React.useState(true);
  const [isClicked, setIsClicked] = React.useState(initialState);
  const [screenSize, setScreenSize] = React.useState(undefined);
  const [currentColor, setCurrentColor] = React.useState('#03C9D7');
  const [currentMode, setCurrentMode] = React.useState('light');
  const [themeSettings, setThemeSettings] = React.useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (e) => {
    setCurrentColor(e.target.value);
    localStorage.setItem('colorMode', e.target.value);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => React.useContext(StateContext);
