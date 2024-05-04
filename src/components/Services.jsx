import { Box, SimpleGrid, Image, Text, Stack, Heading } from '@chakra-ui/react';

const services = [
    {
        id: 1,
        name: "Performance Upgrades",
        description: "From Engine swaps and modifications to Transmission upgrades. When it comes to upgrading the performance of your vehicle, you cant go wrong with Muscle Tuners and Builders.",
        imageUrl: "https://images.unsplash.com/photo-1527383418406-f85a3b146499?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2luZSUyMHN3YXB8ZW58MHwwfDB8fHww",
    },
    {
        id: 2,
        name: "Maintenance",
        description: "We take care of everything from routine inspections and oil changes to comprehensive maintenance. We have the expertise to keep your vehicle in top shape.",
        imageUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lY2hhbmljfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
        id: 3,
        name: "Auto Restoration",
        description: "Let our skilled technicians restore your classics and hot rods. We can restore your car to its former glory.",
        imageUrl: "https://images.unsplash.com/photo-1511002760150-2efa5e4bdeca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        name: "Auto Parts",
        description: "Whether is basic brake repairs or vintage parts and accessories, we can complete auto repairs of all types. We stand behind all of our work.",
        imageUrl: "https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhciUyMHBhcnRzfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
        id: 5,
        name: "Body Work",
        description: "Is there a dent or scratch you need fixed? Or a vehicle collision that needs repairs?. We do it all.",
        imageUrl: "https://images.unsplash.com/photo-1559146897-1d74cb85faad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG11c2NsZSUyMGNhcnxlbnwwfDB8MHx8fDA%3D",
    }
    
];
const Services =() => {
    return (
        <Box p={5} backgroundColor={"gray.100"} borderRadius={10} id="services">
            <Heading mb={4}>Our Services</Heading>
            <SimpleGrid columns={[1, null, 2, 3]} spacing="40px">
                {services.map((service) => (
                <Box key={service.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
                    <Image src={service.imageUrl} alt={service.name} maxH={300} objectFit="cover" />
                    <Stack p={5}>
                    <Heading size="md">{service.name}</Heading>
                    <Text as="p">{service.description}</Text>
                    </Stack>
                </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Services;