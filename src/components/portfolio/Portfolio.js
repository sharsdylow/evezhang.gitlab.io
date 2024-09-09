import React from 'react';
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import PortfolioCard from './PortfolioCard';

export default function Portfolio({innerRef}) {
    return (
        <Box id={'portfolio'} ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            {info.portfolio.map((project, index) => (
                <Box mb={'4rem'} width={{xs: '80%', md: '50%'}} component={'card'}>
                    <PortfolioCard project={project} />
                </Box>
            ))}
        </Box>
    );
};