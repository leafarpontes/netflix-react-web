import styled from 'styled-components';
import { Grid } from '@mui/material';

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  background-color: #1A1A1A;
`

export const Error = styled.p`
  color: ${props => props.theme.palette.core.primary};
  font-weight: 800;
  margin: 0 0 22px;
  text-align: center;
`
