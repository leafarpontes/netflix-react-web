import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  ${props => {
    const { theme: { palette, layout } } = props;
    const { core, typography } = palette;

    return css`
      color: ${typography.primary};
      width: 100%;
      padding: 9px;
      margin: 0 0 22px;
      border-radius: ${layout.border.medium};
      background-color: ${core.primary};
      border: 0;
    `
  }}
`