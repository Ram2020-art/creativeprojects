import styled from 'styled-components';
import { motion } from 'framer-motion';

import { tween } from 'components/Animations/framerTransitions';

interface Props {}

export const ContentWrapper = styled(motion.div)<Props>`
  position: relative;
`;

ContentWrapper.defaultProps = {
  variants: {
    initial: {
      y: '100%',
    },
    animate: {
      y: '0%',
    },
  },

  transition: {
    ...tween,
    duration: 0.6,
  },
};
