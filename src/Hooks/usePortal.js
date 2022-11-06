import { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";

function usePortal(el) {
  const [portal, setPortal] = useState({
    render: () => null,
    remove: () => null,
  });

  const createPortal = useCallback((el) => {
    const Portal = ({ children }) => ReactDOM.createPortal(children, el);
    const remove = () => ReactDOM.unmountComponentAtNode(el);
    return { render: Portal, remove };
  }, []);

  useEffect(() => {
    if (el) portal.remove();
    const newPortal = createPortal(el);
    setPortal(newPortal);
    return () => newPortal.remove(el);
  }, [el]);

  return portal.render;
}

export default usePortal;

//example use in a component

// const App = () => {
//   const Portal = usePortal(document.querySelector("title"));
//   return (
//     <p>
//       Hello world!
//       <Portal className={`${classes.portal}`}>Portalized Title</Portal>
//     </p>
//   );
// };
