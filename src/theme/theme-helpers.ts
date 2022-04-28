import { ButtonSize, ButtonVariant } from '../types';
import { theme } from '.';

export const whiteWithOpacity = (opacityPercent: number) => {
  return `rgb(255 255 255 / ${opacityPercent}%)`;
};

export const getButtonColor = (
  variant: ButtonVariant,
  disabled = false
): string => {
  if (disabled) {
    return theme.colors.text[25];
  }

  switch (variant) {
    case 'primary':
    case 'destructive':
      return theme.colors.other.white;
    case 'outline':
    case 'secondary':
      return theme.colors.primary[100];
    case 'outline-destructive':
      return theme.colors.other.destructive;
    case 'none':
    default:
      return theme.colors.text[50];
  }
};

export const getButtonBackgroundColor = (
  variant: ButtonVariant,
  disabled = false
): string => {
  if (disabled) {
    return '#E4E5E6';
  }

  switch (variant) {
    case 'primary':
      return theme.colors.primary[100];
    case 'secondary':
      return theme.colors.primary[5];
    case 'destructive':
      return theme.colors.other.destructive;
    case 'outline-destructive':
    case 'outline':
    case 'none':
    default:
      return 'transparent';
  }
};

export const getDimensions = (size?: ButtonSize) => {
  switch (size) {
    case 'small':
      return '34px';
    case 'default':
    default:
      return '44px';
  }
};

export const navBarHeight = 54;
