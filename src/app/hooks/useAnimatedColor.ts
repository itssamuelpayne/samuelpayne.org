import { useState, useEffect } from 'react';

// Color sequence matching the animated logo
const colorSequence = [
  '#FF4000', '#FF5522', '#FF6644', '#FF7766', '#F08888', '#DD99AA',
  '#CAAACC', '#9BA8DD', '#80B8E8', '#60CCDD', '#55D0B0', '#70CC88',
  '#99CC70', '#C0CC60', '#DDCC55', '#EEBB60', '#F09966', '#EB7766',
  '#E96688', '#CA77B0', '#9988CC', '#7799DD', '#60BBDD', '#66C5AA',
  '#80CC88', '#B0CC77', '#DDCC70', '#F0B077', '#EE9080', '#E87788',
  '#C888B0', '#9099CC', '#80B5DD', '#66CACC', '#80CCAA', '#FFAA66',
  '#FF7733', '#FF4000'
];

const CYCLE_DURATION = 120000; // 2 minutes in milliseconds

export function useAnimatedColor() {
  const [currentColor, setCurrentColor] = useState(colorSequence[0]);

  useEffect(() => {
    const startTime = Date.now();

    const updateColor = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % CYCLE_DURATION) / CYCLE_DURATION;
      const index = Math.floor(progress * colorSequence.length);
      setCurrentColor(colorSequence[index]);
    };

    updateColor();
    const interval = setInterval(updateColor, 100); // Update every 100ms

    return () => clearInterval(interval);
  }, []);

  return currentColor;
}
