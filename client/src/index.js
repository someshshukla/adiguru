import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import App from './App';


const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  
  return (
    <Box>
      <Navbar/>
      <Box
      width="100%"
      padding="2rem 6%">
      </Box>
    </Box>
  )

};


