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
                <NavbarBrand href="/">sia perpustakaan</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about" >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mahasiswa" >Mahasiswa </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/kelas" >Kelas </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/hooks" >Hooks</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/useffects" >Use Effects</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Search</NavbarText>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </Collapse>
            </Navbar>
            
        </div>
    )
}
export default NavbarComp 