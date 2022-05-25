import { useState, useEffect, useRef } from 'react';

export default function useNearScreen({
  distance = '100px',
  externalRef,
  once = true,
} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(function () {
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    if (element) observer.observe(element);

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
