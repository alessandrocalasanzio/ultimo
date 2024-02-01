import React from 'react';
import styled from 'styled-components'
import Carousel from 'react-grid-carousel'

import guida from "../img/guidaMichelin.avif";
import gambero from "../img/gambero.avif";
import espresso from "../img/espresso.avif";
import slurpy from "../img/slurpy.avif";
import guru from "../img/guru.avif";
import vivi from "../img/vivi.svg";


const images=[
  {id:'0',img:guida},
  {id:'1',img:gambero},
  {id:'2',img:espresso},
  {id:'3',img:guru},
  {id:'4',img:slurpy},
  {id:'5', img:vivi}
]



const Container = styled.div`
  top: 0;
  width: 100%;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor:auto;
  
`

const Row = styled.div`
  max-width: 100%;
  margin: 0 0 0 0;
  padding:0px;
  cursor:auto;
  
`

const Logo = styled.div`
  background-image: ${({ images }) => `url(${images})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: auto;
`





const GalleriaLogo = () => {
  return (
    <div>
    <Container>
      <Row>
        <Carousel  cols={3} rows={1} gap={15} loop={true}  hideArrow={true} autoplay={2400} mobileBreakpoint={200}  containerStyle={{backgroundColor:"rgb(230, 183, 96)"}} responsiveLayout={[
          {
            breakpoint: 800,
            cols: 3
          },
          {
            breakpoint: 500,
            cols: 3
          }
        ]}>
        {images.map((image,index) => (
            <Carousel.Item key={index}>
              <Logo >< img alt="logo" className='imgLogo' src={image.img}/></Logo>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
    </div>
  )
}

export default GalleriaLogo;