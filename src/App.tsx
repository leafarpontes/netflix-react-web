import { ThemeProvider } from 'styled-components';
import './App.css';
import Login from './screens/login/login.screen';
import theme from './themes/main/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
