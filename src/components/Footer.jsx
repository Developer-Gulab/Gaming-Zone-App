import React from 'react';
import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai';





const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>

        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size='md' textTransform={'uppercase'}>
                    Subscribe to get updates
                </Heading>

                <HStack borderBottom={'2px solid white'} py='2'>
                    
                    <Input type='text' placeholder='Enter your email' border={'none'} borderRadius={'none'} focusBorderColor='none'/>
                    <Button
                    p={'0'}
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={20}/>

                    </Button>
                </HStack>

            </VStack>

            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>

                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    Gaming Zone
                </Heading>
                <Text>
                    All rights reserved
                </Text>
                    
            </VStack>

            <VStack w={'full'}>

                <Heading size={'md'} textTransform={'uppercase'}>
                    social media
                </Heading>
                
                <Button variant={'link'} colorScheme={'white'}>
                    <a href='https://youtube.com' target='blank'>Youtube</a>
                </Button>

                <Button variant={'link'} colorScheme={'white'}>
                    <a href='https://instagram.com' target='blank'>Instagram</a>
                </Button>

                <Button variant={'link'} colorScheme={'white'}>
                    <a href='https://facebook.com' target='blank'>Facebook</a>
                </Button>

            </VStack>

        </Stack>        

    </Box>
  )
}

export default Footer