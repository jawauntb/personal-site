import { navBarHeight } from './theme-helpers';

const colors: { [key in string]: Record<string | number, string> } = {
  /**
   * Deep blue colors used for most vivid elements. Number indicates
   * percent opacity.
   */
  primary: {
    100: '#0439c0',
    88: '#2251c7',
    50: '#819cdf',
    10: '#0439c01a',
    5: '#f2f5fc',
  },

  /**
   * Blue colors used for backgrounds and shading on small
   * elements. Number indicates opacity.
   */
  secondary: {
    100: '#3694f2',
    88: '#4ea1f4',
  },

  /**
   * Colors used for text in the app. Number indicates opacity.
   */
  text: {
    100: '#252727',
    88: '#3f4141',
    50: '#5b5d5d',
    25: '#9fa1a1',
    15: '#dedfdf',
    10: '#e9e9e9',
  },

  /**
   * Colors for communicating statuses, messages, and various alternate
   * indicator elements, such as toasts, banners, tic-tacs, etc.
   */
  status: {
    100: '#11d4a0',
    10: '#c3f4e7',
    caution100: '#ffd77d',
    caution25: '#fff5de',
    error100: '#cd4325',
    error10: '#faece9',
    disable100: '#9b9b9b',
    disable10: '#f5f5f5',
    success100: '#4ba55a',
    success10: '#edf6ef',
    warning100: '#ffb50e',
  },

  /**
   * Colors for backgrounds of larger elements.
   */
  background: {
    dark: '#d8d8d9',
    medium: '#ececed',
    light: '#f1f4f6',
    darkBlue: '#010e30',
    lightGrey: '#e8e8e8',
    darkGrey: '#5b5d5d',
    gray10: '#e8ecee',
    gray50: '#fbfcfc',
    gray100: '#a4b5bc',
    green10: '#e2f3f1',
    green100: '#3caea3',
    yellow10: '#f9f1d3',
    yellow100: '#e7c74e',
    purple10: '#dfd1f0',
    purple100: '#7f46c2',
  },

  /**
   * Colors for borders of elements, or divider lines.
   */
  borders: {
    border: '#f1f2f5',
    borderLight: '#f4f5f6',
    borderMedium: '#e6e8eb',
    borderDark: '#d8d8d9',
  },

  /**
   * Color designations for document types, used for categorizing
   * workflows.
   */
  workflows: {
    quote: '#A4B5BC',
    order: '#3CAEA3',
    invoice: '#E7C74E',
    return: '#7F46C2',
    creditMemo: '#7F46C2',
    default: '#010E30',
  },

  /**
   * Colors that are commonly used, but don't fit in any of the other
   * groups.
   */
  other: {
    white: '#ffffff',
    destructive: '#e84c31',
    divider: '#e6e8eb',
    hoverLight: '#f7f9fd',
    loadingForeground: '#f4f5f6',
    loadingBackground: '#e6e8e9',
  },
};

const text = {
  /**
   * Font sizes used throughout the app.
   */
  size: {
    h1: '27.5px',
    mbH1: '19.2px',
    h2: '22px',
    h3: '16.5px',
    h4: '13.75px',
    large: '20px',
    default: '16.5px',
    small: '13.25px',
    xsmall: '11px',
  },
  /**
   * Font weights used throughout the app.
   */
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

const spacing = {
  /**
   * Specifies the number of 8px spaces to use.
   * @param factor The spacing factor to use
   * @returns A string representing the pixel size of the space.
   */
  factorOf: (factor: number) => {
    const defaultSpacing = 8;
    return `${factor * defaultSpacing}px`;
  },
  /**
   * Specifies an amount of space equal to the nav bar's height.
   */
  navBarHeight: `${navBarHeight}px`,
};

const tooltip = {
  background: '#000',
  border: '#c0c0c0',
};

const theme = {
  /**
   * Colors used throughout the app.
   */
  colors,
  /**
   * Font attributes used throughout the app.
   */
  text,
  /**
   * Spacing sizes used throughout the app.
   */
  spacing,
  /**
   * Colors used for AC tooltips.
   */
  tooltip,
};

export default theme;
