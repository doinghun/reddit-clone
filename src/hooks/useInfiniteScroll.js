import { useState, useEffect, useCallback, useRef } from 'react';

const useInfiniteScroll = (element, isLoading) => {
  const [page, setPage] = useState(0);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((page) => page + 1);
      }
    },
    [setPage]
  );
  const observer = useRef(
    new IntersectionObserver(handleObserver, { threshold: 1 })
  );

  // Detect Scroll To End
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement && !isLoading) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement && !isLoading) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element, isLoading]);

  return page;
};
export default useInfiniteScroll;
