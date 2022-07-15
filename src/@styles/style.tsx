import { CssScrollbar } from '@styles/mixins/_scrollbar';
import { CssDebug } from '@styles/_debug';
import { CssReset } from '@styles/_reset';
import { CssTypography } from '@styles/_typography';
import { CssVars } from '@styles/_vars';
import { createGlobalStyle } from 'styled-components';

// Import Swiper styles
// @ts-ignore
import swiperCss from '!!raw-loader!swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const GlobalStyle = createGlobalStyle`

  ${swiperCss}

  ${CssReset}
  ${CssVars}
  ${CssTypography}
  ${CssScrollbar}
  ${CssDebug}

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle
