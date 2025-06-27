import { Image } from "@chakra-ui/image";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Tag,
  Text,
  Tooltip,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BsFillRecordFill } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import TransitionWrapper from "../components/Transition";

import wonderlust from "../src/assets/projects/wonderlust.png";
import fabric from "../src/assets/projects/fabric.png";

const Projects = () => {
  const projectsList = [
    {
      title: "Fabric Store: Multi-Vendor Platform",
      description:
        "A multi-vendor fabric store where vendors can register and sell fabrics, and users can browse, search, and buy fabrics with ease.",
      cover: fabric,
      techStack: ["React.js", "Tailwind CSS", "Express.js", "MongoDB"],
      url: "https://github.com/theritikyadav11/Multi_Vendor_Fabric_Store",
      live: "https://multi-vendor-fabric-store-frontend.onrender.com/",
    },
    {
      title: "Wonderlust: Travel Planner Website",
      description:
        "Wonderlust is a travel planner and Airbnb-like platform where users can explore, book, and review unique stays and travel experiences.",
      cover: wonderlust,
      techStack: ["Bootstrap", "EJS", "Express.js", "Node.js", "MongoDB"],
      url: "https://github.com/theritikyadav11/WonderLust",
      live: "https://github.com/theritikyadav11/WonderLust",
    },
  ];

  return (
    <TransitionWrapper>
      <Container maxW="7xl" mx="auto" px={["0", "3"]}>
        <SimpleGrid columns={[1, 3]} spacing={4} mt={4}>
          {projectsList.map((project, index) => (
            <TransitionWrapper>
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                cover={project.cover}
                techStack={project.techStack}
                url={project.url}
                live={project.live}
              />
            </TransitionWrapper>
          ))}
        </SimpleGrid>
      </Container>
    </TransitionWrapper>
  );
};

const LazyImage = (props) => {
  const { src, width, height, size, layout, rounded } = props;

  return (
    <Image
      src={src}
      objectFit="cover"
      alt="cover image"
      width={width}
      height={height}
      size={size}
      layout={layout}
      rounded={rounded}
    />
  );
};

const ProjectCard = (props) => {
  const { title, description, cover, techStack, url, live } = props;

  const handleLinkClick = (e, link) => {
    window.open(link);
    e.stopPropagation();
  };

  return (
    <Box
      cursor="pointer"
      size="xl"
      _hover={{ transform: "translateY(-10px)" }}
      transition={"all 0.4s ease-in-out"}
    >
      <VStack
        rounded="xl"
        bg={"#25282c"}
        _hover={{
          shadow: "lg",
          textDecoration: "none",
        }}
        overflow="hidden"
        align="start"
        spacing={4}
      >
        <Box position="relative" w="100%">
          <AspectRatio
            ratio={16 / 9}
            w="100%"
            borderColor={useColorModeValue("gray.100", "gray.700")}
          >
            <LazyImage src={cover} />
          </AspectRatio>
        </Box>

        <VStack py={2} px={4} spacing={2} align="start" w="100%">
          <Flex justifyContent="space-between" width="100%">
            <Tooltip hasArrow label="Github link" placement="top">
              <HStack>
                <Icon color={"white"} as={FiGithub} boxSize="0.9em" mt="1px" />
                <Text
                  fontSize="sm"
                  noOfLines={1}
                  color={"white"}
                  fontWeight="600"
                  align="left"
                  onClick={(e) => handleLinkClick(e, url)}
                >
                  {title}
                </Text>
              </HStack>
            </Tooltip>
          </Flex>
          <Text color={"gray"} fontSize={"xs"} noOfLines={2}>
            {description}
          </Text>
          <Flex justifyContent="space-between" width="100%">
            <Box>
              <HStack spacing="1">
                {techStack.map((tech, index) => (
                  <Tag
                    key={index}
                    size="sm"
                    color={"white"}
                    colorScheme="purple"
                  >
                    <Text fontSize={["0.55rem", "inherit", "inherit"]}>
                      {tech}
                    </Text>
                  </Tag>
                ))}
              </HStack>
            </Box>
          </Flex>

          <Button
            mt={4}
            border={"1px solid black"}
            background={"black"}
            color={"white"}
            size={"sm"}
            onClick={(e) => handleLinkClick(e, live)}
            gap={2}
            _hover={{ border: "1px solid red" }}
          >
            Live <BsFillRecordFill color="red" />{" "}
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Projects;
