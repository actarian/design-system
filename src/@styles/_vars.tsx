
  import { css } from 'styled-components';

  export const CssVars = css`
:root {
  --base-font-size-xs: 13px;
  --base-font-size-sm: 14px;
  --base-font-size-md: 15px;
  --base-font-size-lg: 16px;
  --base-font-size-xl: 17px;
  --font-primary-family: -apple-system, 'Helvetica Neue', 'Segoe UI', Roboto, Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-primary-size-0: Min(6.25rem, 16vw);
  --font-primary-size-1: Min(4.5rem, 11.5vw);
  --font-primary-size-2: Min(2.75rem, 7vw);
  --font-primary-size-3: Min(2.5rem, 6.4vw);
  --font-primary-size-4: 2.25rem;
  --font-primary-size-5: 1.875rem;
  --font-primary-size-6: 1.5rem;
  --font-primary-size-7: 1.125rem;
  --font-primary-size-8: 1rem;
  --font-primary-size-9: 0.9rem;
  --font-primary-size-10: 0.8rem;
  --font-primary-size-11: 0.7rem;
  --font-primary-line-height-0: 0.9;
  --font-primary-line-height-1: 1.0;
  --font-primary-line-height-2: 1.1;
  --font-primary-line-height-3: 1.2;
  --font-primary-line-height-4: 1.3;
  --font-primary-line-height-5: 1.4;
  --font-primary-line-height-6: 1.5;
  --font-primary-line-height-7: 1.625;
  --font-primary-line-height-8: 1.5;
  --font-primary-line-height-9: 1.6;
  --font-primary-line-height-10: 1.7;
  --font-primary-line-height-11: 1.8;
  --font-secondary-family: 'Petrona', serif;
  --font-secondary-size-0: 7.5rem;
  --font-secondary-size-1: 5.4rem;
  --font-secondary-size-2: 3.3rem;
  --font-secondary-size-3: 3rem;
  --font-secondary-size-4: 2.7rem;
  --font-secondary-size-5: 2.25rem;
  --font-secondary-size-6: 1.8rem;
  --font-secondary-size-7: 1.35rem;
  --font-secondary-size-8: 1.2rem;
  --font-secondary-size-9: 1.08rem;
  --font-secondary-size-10: 0.96rem;
  --font-secondary-size-11: 0.84rem;
  --font-secondary-line-height-0: 0.9;
  --font-secondary-line-height-1: 1.0;
  --font-secondary-line-height-2: 1.1;
  --font-secondary-line-height-3: 1.2;
  --font-secondary-line-height-4: 1.3;
  --font-secondary-line-height-5: 1.4;
  --font-secondary-line-height-6: 1.5;
  --font-secondary-line-height-7: 1.625;
  --font-secondary-line-height-8: 1.5;
  --font-secondary-line-height-9: 1.6;
  --font-secondary-line-height-10: 1.7;
  --font-secondary-line-height-11: 1.8;
  --form-font-size: 1.125rem;
  --form-line-height: 1.6;
  --form-padding: 0.8em;
  --grid-columns: 12;
  --grid-size: 1fr;
  --grid-column-gap: Max(4vw, Min(96px, 5vw));
  --grid-row-gap: 0;
  --media-query-xs: 0;
  --media-query-sm: 768;
  --media-query-md: 1024;
  --media-query-lg: 1440;
  --media-query-xl: 1600;
  --container-max-width-xs: calc(100% - var(--grid-column-gap) * 2);
  --container-max-width-sm: calc(100% - var(--grid-column-gap) * 2);
  --container-max-width-md: calc(1024px - var(--grid-column-gap) * 2);
  --container-max-width-lg: calc(1440px - var(--grid-column-gap) * 2);
  --container-max-width-xl: calc(1600px - var(--grid-column-gap) * 2);
  --max-width-xs: calc(100% - var(--grid-column-gap) * 2);
  --max-width-sm: calc(100% - var(--grid-column-gap) * 2);
  --max-width-md: Min(928px, calc(100% - var(--grid-column-gap) * 2));
  --max-width-lg: Min(1344px, calc(100% - var(--grid-column-gap) * 4));
  --max-width-xl: Min(1204px, calc(100% - var(--grid-column-gap) * 6));
  --button-size-xs: 0.7rem;
  --button-size-sm: 0.8rem;
  --button-size-md: 1rem;
  --button-size-lg: 1.25rem;
  --button-size-xl: 1.45rem;
  --button-border-radius: 0.2em;
  --card-shadow: 0 20px 20px -10px rgba(0,0,0,0.2);
  --border-radius: 0.5em;
  --shadow-xs: 0 0.3rem 1rem -0.2rem rgba(0, 0, 0, 0.2);
  --shadow-sm: 0 0.6rem 2rem -0.3rem rgba(0, 0, 0, 0.3);
  --shadow-md: 0 0.9rem 3rem -0.4rem rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 1.2rem 4rem -0.5rem rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 1.5rem 5rem -0.6rem rgba(0, 0, 0, 0.6);
  --backdrop-opacity: 0.5;
  --color-neutral-100: #FFFFFF;
  --color-neutral-200: #EFEFF2;
  --color-neutral-300: #DBDBD7;
  --color-neutral-400: #B1B1B1;
  --color-neutral-500: #7E7E8B;
  --color-neutral-600: #61616B;
  --color-neutral-700: #44444B;
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
}
`;
  