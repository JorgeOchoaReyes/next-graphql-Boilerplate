import { Box, Text, Button, Image, Stack, Link, Flex} from '@chakra-ui/react';
import React, {useState} from 'react';
import { lightThemeGrad } from '../Util/constants';
import {GiHamburgerMenu, GiAnt} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';
import AntLogo from '../Util/ant.png';

interface NavbarProps {

}

const Logo = (props) => {
    return(
        <Box {...props} flexDirection='row' display='flex'  justifyContent='center' >
            <Flex align='center' >
                <GiAnt color='black' size={25}/>
            </Flex>
            <Flex align='center' >
                <Text fontSize='xl' textColor="white" fontWeight='bold'>
                    SpellAnt
                </Text>
            </Flex>

        </Box>
    )
}

const MenuToggle = ({toggle, isOpen}) => {
    return (
        <Box display={{base: 'block', md: 'none'}} onClick={toggle}>
            {isOpen ? <GrClose color='white' /> : <GiHamburgerMenu /> }
        </Box>
    )
}

const MenuItem = ({children, isLast, to='/', ...rest}) => {
    return (
        <Link href={to}>
            <Text display='block' {...rest}> 
                {children}
            </Text>
        </Link>
    )
}

const MenuLinks = ({isOpen}) => {
    return (
        <Box 
            display={{base: isOpen ? 'block' : 'none', md: "block"}}
            flexBasis={{base: "100%", md: "auto"}}

    >   
            <Stack 
                spacing={8} 
                align='center' 
                justify={["center", "space-between", "flex-end", 'flex-end']}
                direction={["column", "column", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/" isLast={0}> Home </MenuItem>
                <MenuItem to="/about" isLast={0}> About </MenuItem>
                <MenuItem to="/contact" isLast={0}> Contact </MenuItem>
                <MenuItem to="/other" isLast={0}> Other </MenuItem>
                <Button colorScheme="green"> Register </Button>
            </Stack>
        </Box>
    )
}


const NavbarContainer = ({children, ...props}) => {
    return (
        <Flex 
            as="nav"
            align="center"
            justify="space-around" 
            position="sticky" 
            top={0}
            zIndex={1}
            wrap='wrap'
            w="100%"
            mb={5}
            p={5}
            px={1}
            bg={lightThemeGrad}
            opacity={.9}
            color={["white"]}
            {...props}
        >
            {children}
        </Flex>
    )
}


export const Navbar: React.FC<NavbarProps> = ({}) => {
    const [isOpen, setIsOpen] = useState(false); 
    const toggle = () => setIsOpen(!isOpen); 
    return (
        <NavbarContainer>
            <Logo
                w="100px"
                color={["white", "white", "primary.500", "primary.500"]}
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavbarContainer>
    );
}