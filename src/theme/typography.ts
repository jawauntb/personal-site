import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    font-size: ${({ theme }) => theme.text.size.default};
    color: ${({ theme }) => theme.colors.text[100]};
    background-color: ${({ theme }) => theme.colors.background.light};
  }

  h1 {
    font-size: ${({ theme }) => theme.text.size.h1};
    font-weight: ${({ theme }) => theme.text.weights.bold};
    margin: 0;
  }

  h2 {
    font-size: ${({ theme }) => theme.text.size.h2};
    font-weight: ${({ theme }) => theme.text.weights.light};
    margin: 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.text.size.h3};
    font-weight: ${({ theme }) => theme.text.weights.semibold};
    margin: 0;
  }

  h4 {
    font-size: ${({ theme }) => theme.text.size.h4};
    font-weight: ${({ theme }) => theme.text.weights.regular};
    margin: 0;
  }

  /* Temporary helpers, should not be used on new implementations */
  .text-25 {
    color: ${({ theme }) => theme.colors.text[25]};
  }

  .text-xsmall {
    font-size: ${({ theme }) => theme.text.size['xsmall']};
  }

  .text-medium {
    font-weight: ${({ theme }) => theme.text.weights['medium']};
  }
`;

export default Typography;
