import { ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import React from "react";
import TransitionWrapper from "../components/Transition";

const About = () => {
  return (
    <>
      <TransitionWrapper>
        <VStack gap={4} fontSize={["smaller", "sm"]} alignItems={"flex-start"}>
          <Text>
            Hey everyone 👋, I am{" "}
            <span className="highlight">Arvind kumar</span>, a final year MCA
            student (2024-26) from{" "}
            <span className="highlight">
              Vellore Institute of Technology, Vellore
            </span>
          </Text>
          <Text>
            I am a very curious person. I always have a keen curiosity of how
            the things, technologies and tools around which the life moves
            works. This quality of mine has always benefitted me and helped me
            to learn things better, easier and faster.
          </Text>
          <Text>
            My journey took a complete U-turn when I enrolled in the BCA
            program. During my graduation, I was introduced to the core concepts
            of computer systems — including hardware, software, data, security,
            and most importantly, programming through{" "}
            <span className="highlight">JavaScript</span>. That turning point
            not only changed my mindset but also shaped the career path I
            proudly walk today as a passionate Full Stack Developer.
          </Text>
          <Text>
            With the passage of time, I started developing interest in
            programming as soon as I got to undestand the syntax and logic
            behind programming. Then, I never stopped. Time went by and covid
            period arrived. I realised that I am having a lot of time to explore
            the device resting on my table. I randomly searched on youtube,
            "Best Computer Science Careers for Future" and the number one option
            I got was a <span className="highlight">Web Developer.</span>
          </Text>
          <Text>
            Then what? I started searching for what a web developer does? what
            are the best resources? Is it really for me? and so on. Finally, I
            started learning the core technologies behind web, understood how
            web works and how to develop web-applications.
          </Text>{" "}
          <br />
          <Text>
            Through my never-ending journey of consistent learning, I got to
            understand few of the most important life lesson which I think, I
            will never forget throughout my life.
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              Life is a teacher and you are a life-long student. Person who
              stays student forever survives.
            </ListItem>
            <ListItem>
              Motivation could be the spark to the fuel but Discipline is the
              real fire.
            </ListItem>
            <ListItem>
              Happiness is a Choice and you should choose to be happy.
            </ListItem>
            <ListItem>Comparison is the biggest enemy of joy.</ListItem>
          </UnorderedList>
        </VStack>
      </TransitionWrapper>
    </>
  );
};

export default About;
