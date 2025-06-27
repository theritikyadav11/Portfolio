import {
  AspectRatio,
  Button,
  Card,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsFillRecordFill } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import python from "../src/assets/certificates/python.jpg";
import alpha from "../src/assets/certificates/alpha.jpg";
import TransitionWrapper from "../components/Transition";

const Certifications = () => {
  const certificates = [
    {
      title: "Python Programming Course",
      description:
        "This course laid the foundation of my programming journey. It helped me understand core concepts of Python and problem-solving effectively.",
      url: python,
      link: "https://drive.google.com/file/d/13YombabraslNU514mssR5_1eweXjhU5V/view?usp=drive_link",
      issuer: "Udemy",
    },
    {
      title: "Java + DSA Course",
      description:
        "This course was a major boost in my understanding of Data Structures and Algorithms. It helped me strengthen my logic and Java programming skills.",
      url: alpha,
      link: "https://drive.google.com/file/d/11W5uyizAs6c_Ey0W2v8Vjx-_Sp8MhNbD/view?usp=sharing",
      issuer: "Apna College",
    },
  ];
  return (
    <>
      <TransitionWrapper>
        <HStack
          position={"relative"}
          alignItems={"flex-start"}
          gap={4}
          justifyContent={"space-evenly"}
          wrap={"wrap"}
        >
          {certificates.map((certificate, index) => {
            return (
              <Card
                _hover={{ transform: "translateY(-10px)" }}
                transition={"all 0.4s ease-in-out"}
                mb={4}
                bg={"#25282c"}
                w={["full", "45%", "30%", "30%"]}
                key={index}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <AspectRatio>
                  <Image
                    width={"full"}
                    src={certificate.url}
                    alt="certificate"
                  />
                </AspectRatio>

                <VStack
                  p={4}
                  color={"white"}
                  fontSize={"sm"}
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                >
                  <HStack>
                    <Text color={""} noOfLines={1} fontWeight={"600"}>
                      {certificate.title}
                    </Text>
                    <LuBadgeCheck color="gold" size={16} />
                  </HStack>
                  <Text fontSize={"xs"} color={"gray"} noOfLines={"2"}>
                    {certificate.description}
                  </Text>
                  <Text fontSize={"xs"} color={"gray"} noOfLines={"1"}>
                    Issued by:{" "}
                    <span className="highlight" style={{ color: "white" }}>
                      {certificate.issuer}
                    </span>
                  </Text>
                  <Button
                    border={"1px solid black"}
                    _hover={{ borderColor: "red" }}
                    gap={1}
                    mt={2}
                    bg={"black"}
                    color={"white"}
                    size={"sm"}
                  >
                    <Link to={certificate.link} target="_blank">
                      Live
                    </Link>{" "}
                    <BsFillRecordFill color="red" />
                  </Button>
                </VStack>
              </Card>
            );
          })}
        </HStack>
      </TransitionWrapper>
    </>
  );
};

export default Certifications;
