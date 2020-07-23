import React, { useState } from 'react'; 

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
            
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/home">sia perpustakaan</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        
                        <NavItem>
                            <NavLink href="/Homepage">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mahasiswa" >Aktivitas </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/useffects" >Layanan</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        </NavbarText>
    
                </Collapse>
            </Navbar>
            
        </div>
    )
}
export default NavbarComp 