import { Switch, AppBar, Toolbar, Typography } from "@mui/material"

interface Props {
    darkmode: boolean;
    handleThemeChange: () => void;
}

export const Header = ({darkmode, handleThemeChange}: Props) => {
  return (
    <AppBar position="static" sx={{mb: 4}}>
        <Toolbar>
            <Typography variant="h6">My store</Typography>
            <Switch checked={darkmode} onChange={handleThemeChange}/>
        </Toolbar>
    </AppBar>
  )
}
