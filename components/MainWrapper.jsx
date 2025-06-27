import { Stack } from '@chakra-ui/layout'
import React from 'react'

const MainWrapper = ({children}) => {
  return (
    <>
        <Stack flexDir={['column','column','row','row']} width={['full','full','97%','97%']} margin={'auto'} >
            {children}
        </Stack>  
    </>
  )
}

export default MainWrapper
