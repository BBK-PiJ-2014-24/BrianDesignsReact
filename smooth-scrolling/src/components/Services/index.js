import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'

import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP,

} from './ServicesElements'

function Services() {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>The Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Engineering</ServicesH2>
                    <ServicesP>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Economics</ServicesH2>
                    <ServicesP>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Mathematics</ServicesH2>
                    <ServicesP>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius </ServicesP>
                </ServicesCard>
            </ServicesWrapper>            
        </ServicesContainer>
    )
}

export default Services
