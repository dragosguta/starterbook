export const getGenericSizes = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small': {
      return {
        fontSize: [3, 3, 3, 4],
        fontFamily: 'body',
        letterSpacing: 'body',
        lineHeight: [1.2],
      };
    }
    case 'medium': {
      return {
        fontSize: [4, 4, 4, 5],
        fontFamily: 'body',
        letterSpacing: 'body',
        lineHeight: [1.2],
      };
    }
    case 'large': {
      return {
        fontSize: [5, 5, 6, 7],
        fontFamily: 'heading',
        letterSpacing: 'heading',
        lineHeight: [1.2, 1.2, 1.25, 1.25],
      };
    }
    default: {
      throw new Error(
        `Field 'size' must be of type: 'small' | 'medium' | 'large'`
      );
    }
  }
};
