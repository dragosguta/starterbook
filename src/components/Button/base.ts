import { ThemeUIStyleObject } from '@theme-ui/css';

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: JSX.Element | String;
}
