import Home from "./pages/Home";
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import GlobalStyles from './styles/global'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles/>
    </ThemeProvider>
  );
}

export default App;
