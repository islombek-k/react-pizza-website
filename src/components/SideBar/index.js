import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBtnWrapper, SideBarRoute} from "./SideBarElements";

const SideBar = () => {
    return ( 
        <SideBarContainer> 
            <Icon>
                <CloseIcon/>
            </Icon>
            <SideBarMenu>
                <SideBarLink to="/">Pizzas</SideBarLink>
                <SideBarLink to="/">Desserts</SideBarLink>
                <SideBarLink to="/">Full Menu</SideBarLink>
            </SideBarMenu>
            <SideBtnWrapper>
                <SideBarRoute to="/">Order Now</SideBarRoute>
            </SideBtnWrapper>
        </SideBarContainer>
     );
}
 
export default SideBar;