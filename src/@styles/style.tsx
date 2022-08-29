import { CssScrollbar } from '@styles/mixins/_scrollbar';
import { CssBase } from '@styles/_base';
import { CssDebug } from '@styles/_debug';
import { CssReset } from '@styles/_reset';
import { CssTypography } from '@styles/_typography';
import { CssVars } from '@styles/_vars';
import { createGlobalStyle } from 'styled-components';

// Import Swiper styles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import swiperCss from '!!raw-loader!swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const GlobalStyle = createGlobalStyle`

  ${swiperCss}

  ${CssReset}
  ${CssVars}
  ${CssBase}
  ${CssTypography}
  ${CssScrollbar}
  ${CssDebug}

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle
