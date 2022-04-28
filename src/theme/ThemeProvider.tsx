import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Typography from './typography';
import TokenVariables from './token-variables';
import theme from './design-tokens';

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  return (
    <StyledThemeProvider theme={theme}>
      <TokenVariables />
      <Typography />

      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
