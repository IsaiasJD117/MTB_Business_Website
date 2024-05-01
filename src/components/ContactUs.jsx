import {Box, VStack, Heading, Text} from "@chakra-ui/react";

const ContactUs = () => {
    return(
        <Box id="contact">
            <VStack>
                <Heading>Contact Us</Heading>
                <Text>Hours: 9AM - 6PM</Text>
                <Text>Phone:</Text>
                <Text as="a" href="tel:617-906-1925">617-906-1925</Text>
                <Text>Email:</Text>
                <Text as="a" href="mailto:Emmcintron@gmail.com">Emmcintron@gmail.com</Text>
            </VStack>
        </Box>
    );
};

export default ContactUs;