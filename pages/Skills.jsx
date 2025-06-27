import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import TransitionWrapper from '../components/Transition';

const Skills = () => {
  const languages = ['C', 'C++', 'JavaScript', 'TypeScript', 'SQL']
  const frontend = ['HTML', 'CSS', 'React', 'Next.js', 'Chakra UI', 'Bootstrap', 'ShadCN', 'Tailwind CSS', 'SaSS', 'Redux Toolkit', 'Recoil', 'Zustand'];
  const paymentGateways = ['Razorpay', 'Stripe'];
  const backend = ['Node.js', 'Express.js', 'MongoDB', 'Hono', 'Firebase', 'Zod', 'NextAuth', 'AuthJS', 'JWT'];
  const database = ['Prisma', 'MySQL', 'MongoDB', 'Firebase', 'PostgreSQL'];
  const tools = ['Git', 'GitHub', 'VS Code', 'Postman', 'WSL', 'Compass', 'pgAdmin'];
  const clouds = ['Vercel', 'Netlify', 'Render', 'AWS', 'Firebase'];
  const testing = ['Jest', 'Vitest', 'Supertest', 'Cypress'];
  const devOps = ['Docker', 'Kubernetes(working upon)']
  const softskills = ['Problem Solving', 'Team player', 'Public Speaking']

  return (
    <>
      <TransitionWrapper>
        <Accordion width={'full'} index={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} allowMultiple allowToggle>
          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Languages I prefer programming in
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack w={'full'} wrap="wrap" justifyContent={'flex-start'} alignItems={'flex-start'}>
                {
                  languages.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                  ))

                }
              </HStack>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Frontend Technologies I am proficient in
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack wrap={'wrap'} w={'full'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                {
                  frontend.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                  ))

                }
              </HStack>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Backend Technologies I have mastered
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack wrap={'wrap'} w={'full'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                {
                  backend.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                  ))

                }
              </HStack>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Databases & ORM's I prefer using
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack wrap={'wrap'} w={'full'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                {
                  database.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                  ))

                }
              </HStack>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Tools that makes my life easier
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack w={'full'} wrap="wrap" justifyContent={'flex-start'} alignItems={'flex-start'}>
                {
                  tools.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                  ))

                }
              </HStack>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Payment Gateways I have intergrated & used till now
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack w={'full'} wrap="wrap" justifyContent={'flex-start'} alignItems={'flex-start'}>
                {
                  paymentGateways.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                  ))

                }
              </HStack>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Best Cloud Services I prefer using
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack w={'full'} wrap="wrap" justifyContent={'flex-start'} alignItems={'flex-start'}>
                {
                  clouds.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                  ))

                }
              </HStack>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Testing Frameworks I have prefer for hassle free testing
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack w={'full'} wrap="wrap" justifyContent={'flex-start'} alignItems={'flex-start'}>
                {
                  testing.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                  ))

                }
              </HStack>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                DevOps Stuff that I have worked upon
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack w={'full'} wrap="wrap" justifyContent={'flex-start'} alignItems={'flex-start'}>
                {
                  devOps.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                  ))

                }
              </HStack>
            </AccordionPanel>


            <AccordionItem my={'4'} border={'none'}>
              <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
                <Box as='span' flex='1' textAlign='left'>
                  My Soft Skills that makes me unique
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel border={'1px solid #25282c'} pb={4}>
                <HStack w={'full'} wrap="wrap" justifyContent={'flex-start'} alignItems={'flex-start'}>
                  {
                    softskills.map((skill, index) => (
                      <Skill key={index} skill={skill} />
                    ))

                  }
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          </AccordionItem>


        </Accordion>
      </TransitionWrapper>

    </>
  )
}

const Skill = ({ skill }) => {
  return (
    <Text py={1} fontSize={['xs', 'xs', 'sm', 'sm']} fontWeight={'semibold'} px={4} borderRadius={'10px'} bg={'#25282c'} cursor={'pointer'}>{skill}</Text>
  )
}

export default Skills
