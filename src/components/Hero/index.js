import Navbar from "../Navbar"
import SideBar from "../SideBar"
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from "./HeroElements"

const Hero = () => {
    return (    
        <HeroContainer>
            <Navbar/>
            <SideBar/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}
 
export default Hero;