import { Grid, Image, Box, Text, VStack, Heading } from '@chakra-ui/react';

// Sample data for the gallery
const cars = [
  { name: 'Ford', imageUrl: 'https://images.unsplash.com/photo-1536048284960-eb628c365abb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG11c2NsZSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Dodge', imageUrl: 'https://images.unsplash.com/photo-1676919656328-7771ad24eea2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNsYXNzaWMlMjBkb2RnZXxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Chevy', imageUrl: 'https://images.unsplash.com/photo-1688989563428-bda544c0ed0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMGNoZXZyb2xldHxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'GMC', imageUrl: 'https://images.unsplash.com/photo-1570129476817-afea7ce59295?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNsYXNzaWMlMjB0cnVja3N8ZW58MHx8MHx8fDA%3D' },
  { name: 'Imports', imageUrl: 'https://images.unsplash.com/photo-1555025303-82df93eb6e54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1wb3J0JTIwY2Fyc3xlbnwwfDB8MHx8fDA%3D'},
  { name: 'Modern Muscle', imageUrl: 'https://images.unsplash.com/photo-1596044021783-8f4b592565ed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2NsZSUyMGNhcnxlbnwwfDB8MHx8fDA%3D' },
  // Add more cars as needed
];

const GallerySection = () => {
  return (
    <Box p="5" backgroundColor={"#FDFFFC"}>
      <Text fontSize="2xl" mb="4">A Few Of Our Favorite Makes To Work On</Text>
      <Grid templateColumns="repeat(2,minmax(0, 1fr))" gap={6}>
        {cars.map((car, index) => (
          <VStack key={index} borderWidth="1px" borderRadius="lg" className="car-card" overflow="hidden">
            <Image src={car.imageUrl} alt={car.name} maxH={300} />
            <Heading p="4" size="lg" fontWeight={"bold"} as="h3">{car.name}</Heading>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default GallerySection;
