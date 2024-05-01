import { Flex, VStack} from "@chakra-ui/react";
const Footer = () => {

    
    return (
                <Flex
                margin="0 auto"
                justifyContent="center"
                alignItems="center"
                width={"100%"}
                backgroundColor={"#235789"}
                height={132}
                px={12}>
                    <VStack
                    spacing={1}
                    color={'#FDFFFC'}>
                        <p>Copyright © 2024. All Rights Reserved. - Muscle Tuners And Builders</p>
                        <p>Made by <a href='isaiasdominguez.com'>Isaias Dominguez</a></p>
                    </VStack>
                </Flex>
    )
}

export default Footer;