import React from 'react'

import { UncontrolledCarousel } from 'reactstrap';

const items = [
     
     {
       src: 'http://www.eco-bravo.ca/wp-content/uploads/2019/09/windows22-1440x400.jpg',

       altText: 'Slide 1',
       caption: 'Slide 1',
       header: 'Sistem',
       key: '1'
     },
     {
       src: 'https://evonomics.com/wp-content/uploads/2020/07/kotler.jpg',
       altText: 'Slide 2',
       caption: '',
       header: 'Pepustakaan',
       key: 'Informasi'
     },
     {
       src: 'https://metztiles.com.au/wp-content/uploads/bfi_thumb/BANNER_FORTEZZA_ISLAND_GREY-o9mk1c01njwwhdrjczoj9s8ugt7o5f0pxsdnmrqmjk.png',
       altText: 'Perpustakaan',
       caption: '',
       header: '',
       key: '3'
     },
     {
      src: 'https://applaudible.net/wp-content/uploads/2020/05/Addressing-Mental-Health-1440-x-960-1440x400.jpg',
      altText: 'Perpustakaan',
      caption: '',
      header: '',
      key: '4'
    },
     {
         
     }
     
   ];
   
   const Home = () => <UncontrolledCarousel items={items} />;

export default Home;