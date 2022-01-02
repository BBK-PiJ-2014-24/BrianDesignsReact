import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements'

import {Button} from '../ButtonElements'

function HeroSection() {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoplay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>The Hero Section</HeroH1>
                <HeroP>The Hero Paragraph</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'>
                            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection