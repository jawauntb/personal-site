/* Reference: https://styled-components.com/docs/api#create-a-declarations-file */

import 'styled-components';
import theme from './design-tokens';

type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
