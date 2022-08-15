import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  min-height: 36px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;
  box-shadow: ${({ isShadowDisabled }) => !isShadowDisabled && `0px 2px 3px rgba(51, 51, 51, 0.2)`};
  border-radius: 6px;
  outline: none;

  background-color: ${({ theme, variant, color }) => {
    if (variant === 'outline' || variant === 'text') {
      return theme.white;
    }
    switch (color) {
      case `primary`:
        return theme.primary;
      case `secondary`:
        return theme.secondary;
      case `danger`:
        return theme.danger;
      default:
        return `#E0E0E0`;
    }
  }};
  color: ${({ theme, color, isDisabled }) => {
    if (!isDisabled) {
      switch (color) {
        case `primary`:
        case `secondary`:
        case `danger`:
          return theme.white;
        default:
          return theme.default;
      }
    } else {
      return `#9E9E9E`;
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case `sm`:
        return `6px 12px`;
      case `lg`:
        return `11px 22px`;
      default:
        return `8px 16px`;
    }
  }};
  border: ${({ theme, variant }) => {
    switch (variant) {
      case `outline`:
        return `1px solid ${theme.primary}`;
      default:
        return 0;
    }
  }};

  &.default__hover {
    background-color: #aeaeae;
  }

  &.outline__hover {
    background-color: #2962ff1a;
  }

  &.text__hover {
    background-color: #2962ff1a;
  }

  &.color {
    &.default {
      background-color: #aeaeae;
    }
    &.primary {
      background-color: #0039cb;
    }
    &.secondary {
      background-color: #1c313a;
    }
    &.danger {
      background-color: #9a0007;
    }
  }

  svg {
    margin: ${({ startIcon }) => (startIcon ? `0 10px 0 0` : `0 0 0 10px`)};
  }
`;

export default Button;
