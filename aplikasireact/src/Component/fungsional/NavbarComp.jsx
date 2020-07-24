import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand} from 'reactstrap';
import { NavLink } from 'react-router-dom';

  function NavbarComp () {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/home">sia perpustakaan</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/utama" className="nav-link">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" className="nav-link" >LOGIN</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/menu" className="nav-link" > MENU </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/aktivitas" className="nav-link" >AKTIVITAS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/layanan" className="nav-link" >LAYANAN</NavLink>
                        </NavItem>

                        

                        
                    </Nav>

                
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;