import React from "react";

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [height, setHeight] = React.useState(null);
  const [width, setWidth] = React.useState(null);
  if (process.browser) {
    React.useEffect(
      () => setHeight(document.children[0].clientHeight),
      [document.children[0].clientHeight]
    );
    React.useEffect(
      () => setWidth(document.children[0].clientWidth),
      [document.children[0].clientWidth]
    );
  }
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

function Viewport(props) {
  const MobileComponent = () => props.mobile;
  const DesktopComponent = () => props.desktop;

  const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
  };
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}

export default Viewport;
