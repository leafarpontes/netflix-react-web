import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Login from './screens/login/login.screen';
import { LOGIN_URL } from './screens/login/login.type';
import MoviesList from './screens/movies-list/movies-list';
import { MOVIES_LIST_URL } from './screens/movies-list/movies-list.type';
import { GlobalStyles } from './themes/main/global-styles';
import theme from './themes/main/theme';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<MoviesList />} path={MOVIES_LIST_URL} />
        </Routes>
        
      </ThemeProvider>
    </>
  );
}

export default App;
