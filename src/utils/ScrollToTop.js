import { useEffect } from 'react';

function ScrollToTop() {
  useEffect(() => {
    const onRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Add an event listener to the 'popstate' event, which occurs on route change
    window.addEventListener('popstate', onRouteChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', onRouteChange);
    };
  }, []);

  return null;
}

export default ScrollToTop;
