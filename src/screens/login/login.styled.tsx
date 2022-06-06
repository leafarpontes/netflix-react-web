import styled from 'styled-components';
import { Grid } from '@mui/material';

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  background-color: #1A1A1A;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 0 0 22px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
`

export const Error = styled.p`
  color: ${props => props.theme.palette.core.primary};
  font-weight: 800;
  margin: 0 0 22px;
  text-align: center;
`
