'use client';
import React, { useState } from 'react';

const useTimeInterval = () => {
  const [count, setCount] = useState<{
    isCounting: boolean;
    timeLeft: number;
  }>({
    isCounting: false,
    timeLeft: 0,
  });
  const [isCompleted, setCompleted] = useState<boolean>(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleTimeInterval = (timeLeft: number, isCounting: boolean) => {
    setCount({ isCounting, timeLeft });
    if (intervalRef.current) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev.timeLeft <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setCompleted(true);
          }
          return { isCounting: false, timeLeft };
        }
        return { isCounting: true, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
  };

  return { handleTimeInterval, isCounting: count.isCounting, timeLeft: count.timeLeft, isCompleted };
};

export default useTimeInterval;
