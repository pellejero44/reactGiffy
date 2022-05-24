import { useState, useEffect, useRef } from 'react';

export default function useNearScreen({ distance = '100px' } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(function () {
    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(fromRef.current);

    return () => observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
