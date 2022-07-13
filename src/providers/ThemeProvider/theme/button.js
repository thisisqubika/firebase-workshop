const variantSolid = props => {
  const { colorScheme } = props;

  return {
    color: 'white',
    bg: `${colorScheme}.500`,
    border: '2px solid',
    borderColor: 'transparent',

    _focus: {
      boxShadow: 'none'
    },

    _active: {
      border: '2px solid',
      borderColor: `${colorScheme}.200`,
      bg: `${colorScheme}.500`,
      boxShadow: 'none',
    },

    _hover: {
      bg: `${colorScheme}.600`,
    },

    _disabled: {
      opacity: 0.4,
      pointerEvents: 'none',
      boxShadow: 'none',
      _hover: {
        bg: `${colorScheme}.500`,
      },
    },

    _loading: {
      opacity: 0.4,
      pointerEvents: 'none',
      boxShadow: 'none',
      _hover: {
        bg: `${colorScheme}.500`,
      },
    },
  };
};

const variantOutline = (props) => {
  const { colorScheme } = props;

  const textColor = colorScheme === 'epsilon' ? 'epsilon.500' : 'gray.800';
  const hoverColor = colorScheme === 'alpha' ? `alpha.100` : `${colorScheme}.50`;

  return {
    color: textColor,
    bg: 'white',
    border: '1px solid',
    borderColor: 'gray.200',

    _focus: {
      boxShadow: 'none'
    },

    _active: {
      border: '1px solid',
      borderColor: `${colorScheme}.500`,
      bg: 'white',
      boxShadow: 'none',
    },

    _hover: {
      bg: hoverColor,
    },

    _disabled: {
      opacity: 0.4,
      pointerEvents: 'none',
      boxShadow: 'none',
      _hover: {
        bg: 'white',
      },
    },

    _loading: {
      opacity: 0.4,
      pointerEvents: 'none',
      boxShadow: 'none',
      _hover: {
        bg: 'white',
      },
    },
  };
};

const variantLink = (props) => {
  const { colorScheme } = props;

  return {
    padding: 'auto',
    color: `${colorScheme}.500`,
    bg: 'transparent',

    _focus: {
      boxShadow: 'none'
    },

    _active: {
      bg: 'transparent',
      boxShadow: 'none',
      color: `${colorScheme}.500`,
    },

    _disabled: {
      opacity: 0.4,
      pointerEvents: 'none',
      boxShadow: 'none',
      _hover: {
        bg: 'transparent',
      },
    },

    _loading: {
      opacity: 0.4,
      pointerEvents: 'none',
      boxShadow: 'none',
      _hover: {
        bg: 'transparent',
      },
    },

    _hover: {
      bg: `${colorScheme}.50`,
      textDecoration: 'none',
    },
  };
};

const variants = {
  solid: variantSolid,
  outline: variantOutline,
  link: variantLink,
};

const defaultProps = {
  variant: "solid",
  colorScheme: "alpha",
  size: 'md'
};

const ButtonStyle = {
  baseStyle: {
    borderRadius: '32px',
  },
  sizes: {
    lg: {
      h: '48px',
      px: 6,
      py: 2.5,
      fontSize: '18px',
      lineHeight: '150%',
      fontWeight: 'bold',
    },
    md: {
      h: '34px',
      px: 6,
      py: 2,
      fontSize: '16px',
      lineHeight: '110%',
      fontWeight: 'extrabold',
    },
    sm: {
      h: '31px',
      px: 4,
      py: 1.25,
      fontSize: '14px',
      lineHeight: '150%',
      fontWeight: 'bold',
    },
  },
  variants,
  defaultProps,
};

export default ButtonStyle;
