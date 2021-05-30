import styled from 'styled-components';
import { motion } from 'framer-motion';

import { springMedium } from 'components/Animations/framerTransitions';
import { sharedValues } from 'utils/sharedValues';
import { media, computeValue } from 'utils/responsive';

interface Props {}

export const LinkItem = styled(motion.a)<Props>`
  color: ${sharedValues.colors.white};
  ${sharedValues.fontPresets.normal};
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  font-size: 6vw;
  padding: 4vw 20vw;

  ${media.tablet} {
    padding-left: ${computeValue({
      pixelValue: 190,
      referenceWidth: sharedValues.containers.normal.referenceWidth,
    })};

    padding-right: ${computeValue({
      pixelValue: 190,
      referenceWidth: sharedValues.containers.normal.referenceWidth,
    })};

    padding-top: ${computeValue({
      pixelValue: 30,
      referenceWidth: sharedValues.containers.normal.referenceWidth,
    })};

    padding-bottom: ${computeValue({
      pixelValue: 30,
      referenceWidth: sharedValues.containers.normal.referenceWidth,
    })};

    font-size: ${computeValue({
      pixelValue: 50,
      referenceWidth: sharedValues.containers.normal.referenceWidth,
    })};
  }

  ${media.custom(sharedValues.containers.normal.breakpoint)} {
    padding: 30px 190px;
    font-size: 50px;
  }
`;

LinkItem.defaultProps = {
  variants: {
    initial: {
      x: '-15vw',
      opacity: 0,
    },
    animate: {
      x: '0vw',
      opacity: 1,
    },
  },

  transition: {
    ...springMedium,
  },
};
