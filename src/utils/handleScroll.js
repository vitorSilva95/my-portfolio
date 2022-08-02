import { useState } from 'react';

export const useScroll = () => {
  const [visible, setVisible] = useState(false);
  const [pixels, setPixelsValue] = useState(0);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > pixels) {
      setVisible(true);
    } else if (scrolled <= pixels) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', () => toggleVisible());

  return [visible, setPixelsValue];
};
