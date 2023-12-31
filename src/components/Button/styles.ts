import { styled } from '~/styles/stitches.config'

export const StyledButton = styled('button', {
  textDecoration: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',

  borderRadius: '$full',
  fontWeight: '$regular',

  transition: '$fast',
  textAlign: 'center',
  lineHeight: '$short',

  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',

        '&:not(:disabled):hover': {
          filter: 'brightness(1.1)',
        },
      },
    },

    size: {
      sm: {
        fontSize: '$sm',
        padding: '0.5rem 1rem',
        gap: '0.5rem',
      },

      md: {
        fontSize: '$md',
        padding: '0.75rem 1rem',

        '@bp2': {
          fontSize: '$sm',
          padding: '0.5rem 1rem',
        },
      },

      lg: {
        fontSize: '$lg',
        padding: '0.75rem 2.5rem',

        '@bp2': {
          fontSize: '$md',
        },
      },

      xl: {
        fontSize: '$2xl',
        padding: '1rem 2rem',

        '@bp2': {
          fontSize: '$lg',
          padding: '0.75rem 1.5rem',
        },
      },
    },

    isFullWidth: {
      true: {
        width: '100%',
      },
    },

    isOnlyIcon: {
      true: {
        fontSize: '$lg',
        padding: '0.75rem !important',
      },
    },

    isLoading: {
      true: {
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})
