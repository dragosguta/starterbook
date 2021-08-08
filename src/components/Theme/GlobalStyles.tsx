import React from 'react';

import { Global, css, SerializedStyles } from '@emotion/react';

const fonts = css`
  @font-face {
    font-family: relative-book-pro;
    font-style: normal;
    font-weight: 400;
    src: url(/relative-book-pro.woff2);
  }
  @font-face {
    font-family: relative-medium-pro;
    font-style: normal;
    font-weight: 400;
    src: url(/relative-medium-pro.woff2);
  }
  @font-face {
    fontfamily: relative-mono-11-pitch-pro;
    fontstyle: normal;
    fontweight: 400;
    src: url(/relative-mono-11-pitch-pro.woff2);
  }
  @font-face {
    fontfamily: relative-faux-book-pro;
    fontstyle: normal;
    fontweight: 400;
    src: url(/relative-faux-book-pro.woff2);
  }
`;

export function GlobalStyles({ styles }: { styles?: SerializedStyles } = {}) {
  return (
    <Global
      styles={{
        ...fonts,
        ...styles,
      }}
    />
  );
}
