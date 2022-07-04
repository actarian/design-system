
  import { css } from 'styled-components';

  export const CssVars = css`
:root {
  --font-primary: -apple-system, 'Helvetica Neue', 'Segoe UI', Roboto, Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-secondary: 'Petrona', serif;
  --font-size-xs: 13px;
  --font-size-sm: 14px;
  --font-size-md: 15px;
  --font-size-lg: 16px;
  --font-size-xl: 17px;
  --grid-columns: 12;
  --grid-size: 1fr;
  --grid-column-gap: Max(4vw, Min(96px, 5vw));
  --grid-row-gap: 0;
  --max-width-xs: calc(100% - var(--grid-column-gap) * 2);
  --max-width-sm: calc(100% - var(--grid-column-gap) * 2);
  --max-width-md: Min(928px, calc(100% - var(--grid-column-gap) * 2));
  --max-width-lg: Min(1344px, calc(100% - var(--grid-column-gap) * 4));
  --max-width-xl: Min(1204px, calc(100% - var(--grid-column-gap) * 6));
  --media-query-xs: 0;
  --media-query-sm: 768;
  --media-query-md: 1024;
  --media-query-lg: 1440;
  --media-query-xl: 1600;
  --button-border-radius: 0;
  --card-shadow: 0 20px 20px -10px rgba(0,0,0,0.2);
  --color-neutral-100: #FFFFFF;
  --color-neutral-200: #DFDFE2;
  --color-neutral-300: #BFBFC5;
  --color-neutral-400: #9F9FA8;
  --color-neutral-500: #7E7E8B;
  --color-neutral-600: #61616B;
  --color-neutral-700: #4444B;
  --color-neutral-800: #27272B;
  --color-neutral-900: #09090A;
  --color-primary-100: #DDDAFD;
  --color-primary-200: #BBB6FC;
  --color-primary-300: #9790F7;
  --color-primary-400: #7A72EF;
  --color-primary-500: #4F46E5;
  --color-primary-600: #3A33C4;
  --color-primary-700: #2923A4;
  --color-primary-800: #1A1684;
  --color-primary-900: #100D6D;
  --color-secondary-100: #FFCDD8;
  --color-secondary-200: #FF9BBC;
  --color-secondary-300: #FF69AA;
  --color-secondary-400: #FF43A7;
  --color-secondary-500: #ff05a3;
  --color-secondary-600: #DB03A1;
  --color-secondary-700: #B70298;
  --color-secondary-800: #930189;
  --color-secondary-900: #76007A;
  --color-success-100: #CFFDD5;
  --color-success-200: #A1FCB5;
  --color-success-300: #70F69B;
  --color-success-400: #4CED90;
  --color-success-500: #16e280;
  --color-success-600: #10C27E;
  --color-success-700: #0BA278;
  --color-success-800: #07836C;
  --color-success-900: #046C64;
  --color-warning-100: #FEF9CB;
  --color-warning-200: #FEF198;
  --color-warning-300: #FEE765;
  --color-warning-400: #FDDE3F;
  --color-warning-500: #fdce00;
  --color-warning-600: #D9AC00;
  --color-warning-700: #B68D00;
  --color-warning-800: #926E00;
  --color-warning-900: #795900;
  --color-danger-100: #FEE9CD;
  --color-danger-200: #FECC9C;
  --color-danger-300: #FCA86A;
  --color-danger-400: #FA8645;
  --color-danger-500: #f74e09;
  --color-danger-600: #D43406;
  --color-danger-700: #B11F04;
  --color-danger-800: #8F0F02;
  --color-danger-900: #760301;
  --color-bak-2-neutral-900: #F3F4F7;
  --color-bak-2-neutral-800: #E8EAEF;
  --color-bak-2-neutral-700: #C7CAD1;
  --color-bak-2-neutral-600: #999CA3;
  --color-bak-2-neutral-500: #5E6066;
  --color-bak-2-neutral-400: #444857;
  --color-bak-2-neutral-300: #2F3449;
  --color-bak-2-neutral-200: #1D233B;
  --color-bak-2-neutral-100: #121630;
  --color-bak-2-primary-900: #CBFEFA;
  --color-bak-2-primary-800: #98FDFE;
  --color-bak-2-primary-700: #65F1FC;
  --color-bak-2-primary-600: #3FDEF9;
  --color-bak-2-primary-500: #01c0f6;
  --color-bak-2-primary-400: #0095D3;
  --color-bak-2-primary-300: #0070B1;
  --color-bak-2-primary-200: #00508E;
  --color-bak-2-primary-100: #003976;
  --color-bak-2-secondary-900: #FEF7CB;
  --color-bak-2-secondary-800: #FEED98;
  --color-bak-2-secondary-700: #FEE165;
  --color-bak-2-secondary-600: #FDD43F;
  --color-bak-2-secondary-500: #fcc000;
  --color-bak-2-secondary-400: #D89F00;
  --color-bak-2-secondary-300: #B58100;
  --color-bak-2-secondary-200: #926400;
  --color-bak-2-secondary-100: #785000;
  --color-bak-2-alternative-100: #A1A9B0;
  --color-bak-2-alternative-300: #bcc2c7;
  --color-bak-2-alternative-500: #d3d6da;
  --color-bak-2-alternative-700: #e9ebec;
  --color-bak-2-alternative-900: #ffffff;
  --color-bak-2-success-900: #CAFCD3;
  --color-bak-2-success-800: #97FAB2;
  --color-bak-2-success-700: #62F097;
  --color-bak-2-success-600: #3BE28A;
  --color-bak-2-success-500: #03cf78;
  --color-bak-2-success-400: #02B278;
  --color-bak-2-success-300: #019573;
  --color-bak-2-success-200: #007868;
  --color-bak-2-success-100: #006360;
  --color-bak-2-danger-900: #FFE6D6;
  --color-bak-2-danger-800: #FFC6AE;
  --color-bak-2-danger-700: #FFA085;
  --color-bak-2-danger-600: #FF7B67;
  --color-bak-2-danger-500: #FF3F35;
  --color-bak-2-danger-400: #DB262C;
  --color-bak-2-danger-300: #B71A2D;
  --color-bak-2-danger-200: #93102B;
  --color-bak-2-danger-100: #7A0A2A;
  --color-bak-url: 'https://coolors.co/030911-236ca4-bc9710-a1a9b0-aa4c32, https://colors.eva.design/';
  --color-bak-neutral-100: #030911;
  --color-bak-neutral-200: #0c2545;
  --color-bak-neutral-300: #154179;
  --color-bak-neutral-400: #1f5cad;
  --color-bak-neutral-500: #2f79da;
  --color-bak-neutral-600: #639be3;
  --color-bak-neutral-700: #97bced;
  --color-bak-neutral-800: #cbdef6;
  --color-bak-neutral-900: #ffffff;
  --color-bak-primary-100: #236ca4;
  --color-bak-primary-300: #358fd4;
  --color-bak-primary-500: #68a8df;
  --color-bak-primary-700: #9ac7ea;
  --color-bak-primary-900: #cde3f4;
  --color-bak-secondary-100: #BC9710;
  --color-bak-secondary-300: #ebbf1e;
  --color-bak-secondary-500: #f0cf56;
  --color-bak-secondary-700: #f5df8e;
  --color-bak-secondary-900: #faefc7;
  --color-bak-danger-100: #AA4C32;
  --color-bak-danger-300: #cd6c51;
  --color-bak-danger-500: #da9481;
  --color-bak-danger-700: #e8bcb0;
  --color-bak-danger-900: #f6e4df;
  --color-bak-button-neutral-0: #ffffff;
  --color-bak-button-primary-500: #7b79ff;
  --color-bak-button-primary-600: #4945ff;
  --color-bak-success-100: #eafbe7;
  --color-bak-success-200: #c6f0c2;
  --color-bak-success-500: #5cb176;
  --color-bak-success-600: #328048;
  --color-bak-success-700: #2f6846;
  --color-bak-warning-100: #fdf4dc;
  --color-bak-warning-200: #fae7b9;
  --color-bak-warning-500: #f29d41;
  --color-bak-warning-600: #d9822f;
  --color-bak-warning-700: #be5d01;
}
`;
  