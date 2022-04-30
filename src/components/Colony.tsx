import React from 'react'
import { Box, Flex, SlideFade, Text, VStack } from '@chakra-ui/react';
import {ColonyButton} from './ColonyButton'; 
import { animationDelay } from '../Util/constants';

interface ColonyProps {

}

const ants = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

const LeftContent: React.FC<ColonyProps> = () => {

    return (
            <VStack 
                w="full" 
                h="full" 
                p="10"  
                justifyContent='space-around'
                >
                <SlideFade delay={animationDelay} in={true} offsetY='100px'>
                    <Box textColor='white'>
                        <ColonyButton char={ants} /> 
                    </Box>
                </SlideFade>
            </VStack>
    )
}

const RightContent = () => {
    return (
        <VStack 
            w="full" 
            h="full" 
            p="10"  
            justifyContent='space-around'
            alignItems='center'>
            <SlideFade delay={animationDelay} in={true} offsetX='100px'>
                <Box>
                    <ColonyButton char={ants} /> 
                </Box>
            </SlideFade>
                           
        </VStack>
    )
}

export const Colony: React.FC<ColonyProps> = ({}) => {
    return (
        <Flex h={{base: "auto", xl: '80vh'}}   direction={{base: "column", md: "row"}}>
            <LeftContent   /> 
            <RightContent  />     
        </Flex> 
    );
}