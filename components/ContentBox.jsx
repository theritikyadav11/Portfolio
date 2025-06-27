import { Box } from '@chakra-ui/layout'
import React from 'react'

const ContentBox = ({children}) => {
  return (
    <>
      <Box width={['95%', '95%', '80%', '80%']} border={'1px solid rgb(54, 54, 54)'} my={[2,2,6,8]} mx={'auto'} p={4} borderRadius={'10px'} >
            {children}
        </Box> 
    </>
  )
}

export default ContentBox