import { Catalog } from "./features/catalog/Catalog";
import { createTheme, ThemeProvider ,Container, CssBaseline } from "@mui/material";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const paletteType = darkmode? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  const handleThemeChange = () => {
    setDarkmode(!darkmode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkmode={darkmode} handleThemeChange={handleThemeChange}/>
      <Container >
          <Catalog/>
      </Container>
    </ThemeProvider>
  )
}

export default App
