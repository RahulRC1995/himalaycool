
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';

export const Navbarhead = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar light='true' expand="md" className="">
            <div className="navbar-translate">
                <NavbarBrand href="/">   <img
                    alt="logo"
                    src="logo.png"
                    style={{
                        height: 60,
                        width: 138
                    }}
                /></NavbarBrand>
            </div>
            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    {/* <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Contact Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Gallery                            </NavLink>
                        </NavItem> */}
                </Nav>
                <NavbarText>         <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="About">
                            About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="Product">
                            Products
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="Gallery">
                            Gallery
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="Contact">
                            Contact Us                         </NavLink>
                    </NavItem>
                </Nav></NavbarText>
            </Collapse>

        </Navbar>
    )
}
