import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface AnimatedLogoProps {
  size?: number;
}

export function AnimatedLogo({ size = 240 }: AnimatedLogoProps) {
  return (
    <motion.div
      className="rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: 'linear-gradient(135deg, #FF4000 0%, #FF6B3D 50%, #FF8C42 100%)',
      }}
      animate={{
        background: [
          'linear-gradient(135deg, #FF4000 0%, #FF6B3D 50%, #FF8C42 100%)',
          'linear-gradient(145deg, #FF5522 0%, #FF7A50 50%, #FFA060 100%)',
          'linear-gradient(155deg, #FF6644 0%, #FF8866 50%, #FFB388 100%)',
          'linear-gradient(165deg, #FF7766 0%, #F08080 50%, #EC9999 100%)',
          'linear-gradient(175deg, #F08888 0%, #E88AA0 50%, #E090B0 100%)',
          'linear-gradient(185deg, #DD99AA 0%, #D59AC0 50%, #CD9BD0 100%)',
          'linear-gradient(195deg, #CAAACC 0%, #B0A0D8 50%, #9698E0 100%)',
          'linear-gradient(205deg, #9BA8DD 0%, #88ADE5 50%, #75B2ED 100%)',
          'linear-gradient(215deg, #80B8E8 0%, #70C8E8 50%, #60D8E8 100%)',
          'linear-gradient(225deg, #60CCDD 0%, #58D0CC 50%, #50D4BB 100%)',
          'linear-gradient(235deg, #55D0B0 0%, #60D0A0 50%, #6BD090 100%)',
          'linear-gradient(245deg, #70CC88 0%, #88CC80 50%, #A0CC78 100%)',
          'linear-gradient(255deg, #99CC70 0%, #AACC68 50%, #BBCC60 100%)',
          'linear-gradient(265deg, #C0CC60 0%, #D0CC58 50%, #E0CC50 100%)',
          'linear-gradient(275deg, #DDCC55 0%, #E5C055 50%, #EDB455 100%)',
          'linear-gradient(285deg, #EEBB60 0%, #F0AA60 50%, #F29960 100%)',
          'linear-gradient(295deg, #F09966 0%, #EE8866 50%, #EC7766 100%)',
          'linear-gradient(305deg, #EB7766 0%, #EA6666 50%, #E95566 100%)',
          'linear-gradient(315deg, #E96688 0%, #DE6699 50%, #D366AA 100%)',
          'linear-gradient(325deg, #CA77B0 0%, #B577C0 50%, #A077D0 100%)',
          'linear-gradient(335deg, #9988CC 0%, #8888D8 50%, #7788E4 100%)',
          'linear-gradient(345deg, #7799DD 0%, #66AAE0 50%, #55BBE3 100%)',
          'linear-gradient(355deg, #60BBDD 0%, #60C0CC 50%, #60C5BB 100%)',
          'linear-gradient(5deg, #66C5AA 0%, #70CA99 50%, #7ACF88 100%)',
          'linear-gradient(15deg, #80CC88 0%, #95CC80 50%, #AACC78 100%)',
          'linear-gradient(25deg, #B0CC77 0%, #C5CC70 50%, #DACC69 100%)',
          'linear-gradient(35deg, #DDCC70 0%, #E8C070 50%, #F3B470 100%)',
          'linear-gradient(45deg, #F0B077 0%, #F0A077 50%, #F09077 100%)',
          'linear-gradient(55deg, #EE9080 0%, #EC8080 50%, #EA7080 100%)',
          'linear-gradient(65deg, #E87788 0%, #DD7799 50%, #D277AA 100%)',
          'linear-gradient(75deg, #C888B0 0%, #B088C0 50%, #9888D0 100%)',
          'linear-gradient(85deg, #9099CC 0%, #88A5D8 50%, #80B1E4 100%)',
          'linear-gradient(95deg, #80B5DD 0%, #70C0DD 50%, #60CBDD 100%)',
          'linear-gradient(105deg, #66CACC 0%, #70CABB 50%, #7ACAAA 100%)',
          'linear-gradient(115deg, #80CCAA 0%, #90CC99 50%, #A0CC88 100%)',
          'linear-gradient(125deg, #FFAA66 0%, #FF9955 50%, #FF8844 100%)',
          'linear-gradient(135deg, #FF7733 0%, #FF5D2A 50%, #FF4321 100%)',
          'linear-gradient(135deg, #FF4000 0%, #FF6B3D 50%, #FF8C42 100%)',
        ],
      }}
      transition={{
        duration: 120,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
}