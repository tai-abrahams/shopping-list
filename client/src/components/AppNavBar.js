import React, { useState } from 'react';
import {
    Navbar,
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
 } from 'reactstrap';

const AppNavBar = (props) => {
     const [ isOpen, setIsOpen ] = useState( false );

     const toggler = () => {
         setIsOpen(!isOpen)
     }
    return (
        <div>
            <Navbar color='dark' dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={toggler} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
                
        </div>

    );
 }

 export default AppNavBar;