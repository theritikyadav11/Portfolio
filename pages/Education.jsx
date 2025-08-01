import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import TransitionWrapper from "../components/Transition";

const educations = [
  {
    id: 1,
    date: "2024-2026",
    title: "Master in Computer Application",
    description: `from Vellore Institute of Technology, Vellore, Tamil Nadu`,
    score: "9.29 CGPA",
  },
  {
    id: 2,
    date: "2021-24",
    title: "Bachelor in Computer Application",
    description: `From Dr. Zakir Hussain Institute, Patna, Bihar`,
    score: "8.02 CGPA",
  },
  {
    id: 3,
    date: "2017-19",
    title: "Higher Secondary School",
    description: `From Basant College, Basant, Bihar BSEB Borad`,
    score: "76.2%",
  },
];

const Education = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <TransitionWrapper>
      <Container maxWidth="7xl" p={{ base: 0, sm: 4 }}>
        {educations.map((education) => (
          <Flex key={education.id} mb="10px">
            {/* Desktop view(left card) */}
            {isDesktop && education.id % 2 === 0 && (
              <>
                <EmptyCard />
                <LineWithDot />
                <Card {...education} />
              </>
            )}

            {/* Mobile view */}
            {isMobile && (
              <>
                <LineWithDot />
                <Card {...education} />
              </>
            )}

            {/* Desktop view(right card) */}
            {isDesktop && education.id % 2 !== 0 && (
              <>
                <Card {...education} />

                <LineWithDot />
                <EmptyCard />
              </>
            )}
          </Flex>
        ))}
      </Container>
    </TransitionWrapper>
  );
};

const Card = ({ id, title, description, date, score }) => {
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={"#25282c"}
      gap={4}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="md" mb={2} color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            fontSize={["md", "md", "xl", "xl"]}
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            {title}
          </chakra.h1>
          <Text fontSize="sm">{description}</Text>
          <Text
            textAlign={"left"}
            width={"full"}
            textDecor={"underline"}
            color={"gold"}
            fontWeight={"semibold"}
          >
            Scored: {score}
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "20px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
        borderRadius={"4px"}
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={"white"}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Education;
