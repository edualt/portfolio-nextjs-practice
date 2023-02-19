import { ThemeProvider } from "styled-components";

import theme from "../themes/default";
import GlobalStyles from "./globals";

interface props {
    children: React.ReactNode;
};

const Theme = ({ children }: props) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default Theme;