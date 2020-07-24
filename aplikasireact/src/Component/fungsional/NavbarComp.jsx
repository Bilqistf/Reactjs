import React, { useState} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    //Button
} from 'reactstrap';
//import { AuthContext } from '../../App';
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
                            <NavLink href="/login" >Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Menu">Menu</NavLink>
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