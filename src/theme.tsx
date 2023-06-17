import {createTheme} from "@mui/material";

const theme = createTheme({
palette: {
    mode: "dark",
    primary: {
        main: "#ff7200",
    },
},
    components:{
        MuiButton:{
            styleOverrides: {
                root: {
                    borderRadius: 25,
                }
            }
    }
    },
    typography: {
            button: {
                fontSize: "1em",
            }
    }
});

export default theme;