import 'styles-components/native';
import theme from '../theme';

declare module 'styled-components'{
  type ThemeType = typeof theme;

  export interface DefaultThme extends ThemeType {}
}

