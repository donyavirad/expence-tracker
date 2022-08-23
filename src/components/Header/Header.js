import React from "react"
import "./Header.css"
import Stack from '@mui/material/Stack'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton'
import { Avatar, Box } from "@mui/material";
import {  deepPurple } from '@mui/material/colors'
import { Container, Link, Typography } from "@mui/material";
const Header= ()=>{
    return (
        <Box sx={{
            width: "100%",
            padding: "16px 0"
        }}>
            <Container>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Stack direction={"row"} alignItems={"center"}>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h1" component="h1" className="header-title" sx={{fontSize: "16px",fontWeight: "bold"}}>
                            Dashboard
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={1}>
                        <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                        <Link target="_blank" sx={{display: "flex", alignItems: "center", justifyContent: "center"}} href="https://github.com/donyavirad">
                            <Avatar  sx={{ bgcolor: deepPurple[500] }}>D</Avatar>
                        </Link>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Header