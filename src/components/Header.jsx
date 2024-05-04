import { Box, HStack } from "@chakra-ui/react";
//import logo from "../assets/logo/mtb_logo.png";

const Header = () => {
    

    return (
        <Box 
        position={"fixed"}
        height= "auto"
        width="100%"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#235789"
        color={'#F1D302'}
        >
            <Box margin="0 auto" padding={4}>
                <HStack 
                justifyContent="space-between"
                alignItems="center"
                >
                    <nav>
                        <HStack>
                            <a href="index.html"><h1>Muscle Tuners And Builders</h1>{/*<img src='' alt="logo" size='small' /> */}</a>
                        </HStack>
                    </nav>
                    <>
                    {window.innerWidth > 768 ?
                        <nav>
                            <HStack spacing={8} fontSize={"xl"}>
                                <a href="">Sales</a>
                                <a href="#services">Services</a>
                                <a href="#contact">Contact Us</a>
                            </HStack>
                        </nav>
                    :
                    <div className="header_sm dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                        </button>
                        <ul className="header_sm dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="">Sales</a></li>
                            <li><a className="dropdown-item" href="#services">Services</a></li>
                            <li><a className="dropdown-item" href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                    }</>
                </HStack>
            </Box>
        </Box>
    );
};

export default Header;