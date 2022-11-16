import { styled } from '../../style/stitches.config';

export const Menu = styled('aside', {
  borderRight: '2px solid',
  borderColor: '$bgalt',
  minWidth: '58px',

  '@dsk2': {
    minWidth: '240px',
  },
});

export const Line = styled('div', {
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  padding: '16px 20px',
  color: '$gray',

  '&:hover': {
    color: '$white',
  },

  h3: {
    display: 'none',
  },

  '@dsk2': {
    minHeight: '68px',

    h3: {
      display: 'block',
    },
  },

  variants: {
    active: {
      true: {
        color: '$white',
      },
    },
  },
});
