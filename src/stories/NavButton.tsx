import React from 'react';
import './navButton.css';

interface NavButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const NavButton = ({
  primary = false,
  size = 'h3',
  backgroundColor,
  label,
  ...props
}: NavButtonProps) => {
  const mode = primary
    ? 'fitted-nav-button--primary'
    : 'fitted-nav-button--secondary';
  return (
    <button
      type="button"
      className={['fitted-nav-button', `fitted-nav-button--${size}`, mode].join(
        ' ',
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
