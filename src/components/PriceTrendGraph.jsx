import { Box, Text } from "@chakra-ui/react";

const PriceTrendGraph = () => {
  return (
    <Box mt={5}>
      <Text>
        Line graph (Placeholder):
        <br />
        120 | /\
        <br />
        100 | /\ / \ /\
        <br />
        80 | / \/ \/ \
        <br />
        60 | / \
        <br />
        40 | / \
        <br />
        20 |_____________/__________________\
        <br />
        Jan Feb Mar Apr May Jun Jul Aug
      </Text>
    </Box>
  );
};

export default PriceTrendGraph;
