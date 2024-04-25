import { Box, Flex, Heading, Select, Text, VStack, Image, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import { FaGlobeEurope, FaStore } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="xl">
          Lindt Chocolate Price Dashboard
        </Heading>
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW5kdCUyMGxvZ298ZW58MHx8fHwxNzE0MDM0NDQzfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" objectFit="contain" />
      </Flex>
      <VStack spacing={4} align="stretch" my={5}>
        <Box>
          <Text fontSize="lg" mb={2}>
            <FaGlobeEurope /> Select Market:
          </Text>
          <Select placeholder="Select market">
            <option value="czechia">Czechia</option>
            <option value="germany">Germany</option>
            <option value="poland">Poland</option>
          </Select>
        </Box>
        <Box>
          <Text fontSize="lg" mb={2}>
            <FaStore /> Select Retailer:
          </Text>
          <Select placeholder="Select retailer">
            <option value="retailer1">Retailer 1</option>
            <option value="retailer2">Retailer 2</option>
            <option value="retailer3">Retailer 3</option>
          </Select>
        </Box>
      </VStack>
      <Heading as="h2" size="lg" mb={4}>
        Price Trends
      </Heading>
      <SimpleGrid columns={3} spacing={10}>
        <Stat>
          <StatLabel>Dark Chocolate</StatLabel>
          <StatNumber>€2.99</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            1.1% last month
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Milk Chocolate</StatLabel>
          <StatNumber>€2.79</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            0.9% last month
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>White Chocolate</StatLabel>
          <StatNumber>€3.19</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            1.5% last month
          </StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
