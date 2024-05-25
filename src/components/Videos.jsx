import React, {useState} from 'react';
import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';








const Videos = () => {

  const videosArr = [
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    
  ];

  const [videoSrc,setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column','row']} h={'100vh'}>
      <VStack w={'full'}>

        <video 
        controls
        controlsList='nodownload'
        src={videoSrc}
        style={{
          width: '100%',
        }}
        >

        </video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>

          <Heading>
            Sample Video 
          </Heading>
          <Text>
          This is a sample video for testing and demo. This is called description.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit deserunt, dolorem quam corrupti distinctio quo mollitia officia laudantium minima? Rem alias nihil, laudantium eligendi iusto hic? Qui, non repellendus!
          Ipsa nulla laboriosam ullam atque sit commodi eaque voluptatibus obcaecati modi laborum voluptate quaerat, tempore maiores esse fugit alias praesentium accusantium quia explicabo facere quod, expedita consequatur. At, animi id!
          
          
          </Text>

        </VStack>

      </VStack>
      <VStack w={['full','xl']} alignItems={'stretch'} p='8' spacing={'8'} overflowY={'auto'}>

       {
         videosArr.map((item,index) => (
          <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>setVideoSrc(item)}>
          Lecture {index+1}
        </Button>
        ))

       }
      </VStack>
    </Stack>
  )
}

export default Videos