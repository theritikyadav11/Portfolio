import { HStack, Stack, Text } from '@chakra-ui/react'


const Footer = () => {
  return (
    <>
          <Stack direction={['column', 'row']} alignItems={'center'} justifyContent={'center'} py={[2,4]} color={'gray'} fontSize={['sm','sm']} bg={'#25282c'}>
              <Text>Arvind kumar © 2025-26</Text>         
      </Stack>
    </>
  )
}

export default Footer
