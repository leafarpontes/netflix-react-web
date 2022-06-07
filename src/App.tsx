import { ThemeProvider } from 'styled-components';
import './App.css';
import Login from './screens/login/login.screen';
import { GlobalStyles } from './themes/main/global-styles';
import theme from './themes/main/theme';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
