import { MutableRefObject, useEffect, useState } from "react";

export default function useIntersection(
  targetRef: MutableRefObject<HTMLElement | null>
) {
  const [intersecting, setIntersecting] = useState<Boolean>(false);

  useEffect(() => {
    if (targetRef.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });

      observer.observe(targetRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [targetRef]);

  return intersecting;
}
