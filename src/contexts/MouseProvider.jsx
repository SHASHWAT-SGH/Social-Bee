const { useContext, createContext, useState } = require("react");

const MouseContext = createContext();

export const MouseProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <MouseContext.Provider value={{ mousePosition, setMousePosition }}>
      {children}
    </MouseContext.Provider>
  );
};

export const useMouse = () => {
  return useContext(MouseContext);
};
