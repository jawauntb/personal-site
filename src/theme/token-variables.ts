import { createGlobalStyle, css } from 'styled-components';

const colors = css`
  /* Primary */
  --primary-100: #0439c0;
  --primary-100-opaque: rgb(4 57 192 / 40%);
  --primary-88: #2251c7;
  --primary-50: #819cdf;
  --primary-10: #0439c01a;
  --primary-5: #f2f5fc;

  /* Secondary */
  --secondary-100: #3694f2;
  --secondary-100-opaque: rgb(54 148 242 / 40%);
  --secondary-88: #4ea1f4;
  --accent-blue: #38a8c2;
  --accent-blue-opaque: rgb(56 168 194 / 40%);
  --accent-green: #34cf5c;
  --accent-gray: #3e4f56;
  --accent-gray-opaque: rgb(62 79 86 / 40%);

  /* Text */
  --text-100: #252727;
  --text-88: #3f4141;
  --text-50: #5b5d5d;
  --text-25: #9fa1a1;
  --text-15: #dedfdf;
  --text-10: #e9e9e9;

  /* Status */
  --status-status-100: #4ba55a;
  --status-status-10: #edf6ef;
  --status-caution-100: #ffb50e;
  --status-caution-25: #fff5de;
  --status-error-100: #cd4325;
  --status-error-10: #faece9;
  --status-disable-100: #9b9b9b;
  --status-disable-10: #f5f5f5;
  --status-success-100: #4ba55a;
  --status-success-10: #edf6ef;

  /* Background */
  --bg-dark: #d8d8d9;
  --bg-medium: #ececed;
  --bg-light: #f1f4f6;
  --bg-dark-blue: #0d1233;

  /* Borders */
  --border-light: #f4f5f6;
  --border-dark: #d8d8d9;

  /* Other */
  --black: #000000;
  --white: #ffffff;
  --destructive: #e84c31;
  --divider: #e6e8eb;
  --hover-light: #f7f9fd;
`;

const fonts = css`
  /* Size */
  --text-h1: 27.5px;
  --text-h2: 22px;
  --text-h3: 16.5px;
  --text-h4: 13.75px;
  --text-default: 16.5px;
  --text-small: 13.25px;
  --text-xsmall: 11px;

  /* Weights */
  --text-light: 300;
  --text-regular: 400;
  --text-medium: 500;
  --text-semibold: 600;
  --text-bold: 700;
`;

const spacing = css`
  --spacing: 8px;
  --spacing-half: calc(var(--spacing) / 2);
  --spacing-2x: calc(var(--spacing) * 2);
  --spacing-3x: calc(var(--spacing) * 3);
  --spacing-4x: calc(var(--spacing) * 4);
  --spacing-5x: calc(var(--spacing) * 5);
  --spacing-6x: calc(var(--spacing) * 6);
  --spacing-10x: calc(var(--spacing) * 10);
`;

const TokenVariables = createGlobalStyle`
  :root {
    ${colors}
    ${fonts}
    ${spacing}
  }
`;

export default TokenVariables;
