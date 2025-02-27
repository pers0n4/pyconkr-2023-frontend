import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, globalCss } from '@/stitches.config';

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily:
      '"Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',

    '&:lang(ko)': {
      wordBreak: 'keep-all',
    },
  },

  'html, body, #__next': {
    height: '100%',
    minHeight: '100%',
    background: '$backgroundPrimary',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
});
export default class Document extends NextDocument {
  render() {
    globalStyle();
    return (
      <Html lang="ko">
        <Head>
          <link
            href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
            rel="stylesheet"
            type="text/css"
          />
          <style dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
