import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import classes from './CardsCarousel.module.css';

function Card({ image, title, category,shade}) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})`, marginTop:'-200px', justifyContent:'center',alignItems:"center"}}
      className={classes.card}
    >
      <div style={{padding:"30px"}}>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Text className={classes.shade} >
          Shade : {shade}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      
      <Button variant="white" color="dark" className={classes.button}>
        Buy Now
      </Button></div>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://media.glamourmagazine.co.uk/photos/6138d95e236c41e83148c686/master/w_1920%2Cc_limit/pink-prods-body-balm_l.jpg',
    title: 'Best forests to visit in North America',
    category: 'moisturizer',
    shade:'',
  },
  {
    image:
      'https://media.glamourmagazine.co.uk/photos/6138d95f4c8f4b78b7c65b83/master/w_1920%2Cc_limit/EveLom_PinkMakeup_30aug.jpg',
    title: 'Hawaii beaches review: better than you think',
    category: 'lipbalm',
    shade:'Demure 💖',
  },
  {
    image:
      'https://media.glamourmagazine.co.uk/photos/6138d95f1145ea59e77e94e0/master/w_1920%2Cc_limit/Chanel_pinkmakeup_1SET.jpg',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'eyeshadow',
    shade:'Tissé Cambon 💖',
  },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //   title: 'Aurora in Norway: when to visit for best experience',
  //   category: 'nature',
  // },
  {
    image:
      'https://media.glamourmagazine.co.uk/photos/6138d95f6c53c747be7bf973/master/w_1920%2Cc_limit/CT2_PinkMakeup_30aug.jpg',
    title: 'Best places to visit this winter',
    category: 'lipstick',
    shade:'Valentine 💖',
  },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //   title: 'Active volcanos reviews: travel at your own risk',
  //   category: 'nature',
  // },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      
    >
      <div style={{ display:"flex",flexDirection: "row", gap:"20px"}}>{slides}</div>
      
    </Carousel>
  );
}
