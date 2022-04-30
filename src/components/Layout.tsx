import React from 'react';
import { Container } from '@chakra-ui/react'; 
import {Navbar} from './Navbar';
import {Footer} from './Footer';
import Wrapper from './Wrapper';

interface LayoutProps {

}

export const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Navbar /> 
                <Wrapper>
                    {children}
                </Wrapper>
            <Footer /> 
        </>
    )
}