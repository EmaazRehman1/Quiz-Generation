import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.jpg";
import QuizifyLogo from "./Logo";
export default function NavBar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // localStorage.removeItem("token");
        // navigate("/login");
    };
    return (

        <AppBar position="sticky" className="shadow-md" sx={{ background: (theme) => theme.palette.primary.main }}>
            <Toolbar className="flex justify-between">
                <Box className="flex items-center gap-3" onClick={() => navigate('/')}>
                    <QuizifyLogo/>

                </Box>

                <Box className="md:flex font-mono gap-3">
                    {/* <Button
                        disableElevation
                        className="hover:font-semibold"
                        onClick={() => navigate('/quiz')}
                        sx={{
                            color: "white",
                            textTransform: "none",
                            border: "none",
                        }}
                    >
                        Quiz
                    </Button> */}
                    {/* <Button
                        disableElevation
                        className="hover:font-semibold"
                        onClick={handleLogout()}
                        sx={{
                            color: "white",
                            textTransform: "none",
                            border: "none",
                        }}
                    >
                        Logout
                    </Button>
                    <Button
                        className="hover:font-semibold"
                        disableElevation
                        onClick={() => navigate('/login')}
                        sx={{
                            color: "white",
                            textTransform: "none",
                            border: "none",
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        disableElevation
                        className="hover:font-semibold"
                        onClick={() => navigate('/signUp')}
                        sx={{
                            color: "white",
                            textTransform: "none",
                            border: "none",
                        }}
                    >
                        Sign Up
                    </Button> */}

                </Box>


            </Toolbar>
        </AppBar>
    );
}
