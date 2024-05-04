import { Box, VStack, Heading, Text, Image} from "@chakra-ui/react";
import muscleCarImg from "../assets/images/muscle.jpg";


const LandingSection = () => {

    return (
        <Box
        margin="0 auto"
        padding={0}
        backgroundColor={"#161925"}
        id={'Home'}
        >
            <VStack>
                <Box marginTop={67}>
                    <Image src={muscleCarImg} alt="car" size="full" maxHeight={600}/>
                </Box>
                <Box padding={4}>
                    <Heading as="h1" className="about_title" color={"#C1292E"} size={"2xl"}>Restoring and Customizing Classic Cars, Hot Rods and More!</Heading>
                    <Text color={'#FDFFFC'} as="p" className="about_text" padding={4} size={"lg"} border={"1px solid #F1D302"} borderRadius={"lg"}>Driven by Passion, Fueled by Expertise. Welcome to Muscle Tuners And Builders, Your Premier Destination for Muscle Cars, Classics, and Imports. At Muscle Tuners And Builders, we are more than just a mechanics shop; we are curators of speed, enthusiasts of engineering, and guardians of automotive history. Located in Cummings, Georgia, our state-of-the-art facility is a sanctuary for every make and model of muscle cars, classic beauties, and exotic imports. Founded by Emmanuel and Ray, lifelong aficionados with a mechanical touch that turns cars into legends, our mission is to provide unparalleled service, meticulous attention to detail, and the expertise required to maintain, restore, and enhance the performance of your prized possessions.</Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default LandingSection;