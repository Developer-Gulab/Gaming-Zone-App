import React from 'react';
import {Box,Container,Heading,Image,Stack, Text} from '@chakra-ui/react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/one.jpg';
import img2 from '../assets/Two.jpg';
import img3 from '../assets/Three.jpg';
import img4 from '../assets/Four.jpg';
import img5 from '../assets/Five.jpg';
import img6 from '../assets/Six.jpg';




const headingOptions = {
    pos: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '3xl',
}





const Home = () => {
  return (

<Box>
    <MyCarousel />

<Container maxW={'container.xl'} minH={'100vh'} p='16'>

    <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
        Services
    </Heading>

    <Stack
    h='full'
    p={'4'}
    alignItems={'center'}
    direction={['column','row']}
    >

        <Image src={img6} h={['40','400']} filter={'hue-rotate(-130deg)'} />

        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo, iure fuga quisquam nemo et recusandae atque tenetur! Aliquid dolorum doloribus consectetur commodi. Ipsa consequatur quasi, doloribus quos obcaecati neque.
            Ipsum ducimus quos voluptates! Aliquam rerum iusto quis aut dolorum laudantium nulla necessitatibus, labore, a accusamus ducimus, officia esse blanditiis praesentium? Porro exercitationem nam tempore velit dolor sapiente, ipsam deserunt.
            Reiciendis, est dolore iste amet itaque modi! Pariatur et unde tempora? Neque ut vero inventore itaque ullam, autem debitis similique ipsum possimus mollitia suscipit laboriosam, ipsa et voluptates pariatur. Quos.
            Atque ad doloribus neque aperiam dolorum sapiente, sequi voluptate quaerat quis, obcaecati, explicabo rerum vero. Cupiditate asperiores illo aliquid eos quaerat ratione repudiandae eius sed facilis quod, obcaecati consectetur inventore.
        </Text>

        


    </Stack>

</Container>

</Box>



  )
};

const MyCarousel = () => (
    <Carousel 
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    >

<Box w='full' h={'100vh'}>

  <Image src={img5} alt='img5' />

  <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future
  </Heading>

</Box>

<Box w='full' h={'100vh'}>

  <Image src={img2} alt='img2' />

  <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Gaming is Future
  </Heading>

</Box>

<Box w='full' h={'100vh'}>

  <Image src={img3} alt='img3' />

  <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Popular Games
  </Heading>

</Box>

<Box w='full' h={'100vh'}>

  <Image src={img4} alt='img4' />

  <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Game is Life
  </Heading>

</Box>

<Box w='full' h={'100vh'}>

  <Image src={img1} alt='img1' />

  <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Gaming on Console
  </Heading>

</Box>
        
    </Carousel>
)

export default Home;
