import { Box } from "@mui/material"
import { FC } from "react"
import Header from "../components/common/header"

interface LayoutProps {
    children: React.ReactElement
}

const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <Box component='div' >
            <Header />
            <Box component='div' >
                {children}
            </Box>
        </Box>
    )
}

export default Layout