import React, { useState } from 'react'; 
import { CartContext } from '../../CartContext';
import { useContext } from 'react';

import {
    Button,
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
    const { value } = useContext(CartContext)
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
                        <NavItem>
                            <NavLink href="/produk" >Produk</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/reducer" >Reducer</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                    <Button color="danger">
                        <i className="fa fa-shoping-cart"></i>
                        <span className="badge badge-light">{value}</span>
                        </Button>
                        </NavbarText>
    
                </Collapse>
            </Navbar>
            
        </div>
    )
}
export default NavbarComp 