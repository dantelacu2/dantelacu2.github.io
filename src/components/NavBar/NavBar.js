import React, { useState } from "react";
import classnames from 'classnames';

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  Collapse,
  NavbarText
} from "reactstrap";

//material-ui icons
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

//imgs
import Brand from './img/brand.png';

//styles
import { makeStyles } from '@material-ui/core/styles';
import styles from './navbarStyle';

const useStyles = makeStyles(styles);

const NavBar = () => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
      <header>
        <Navbar dark color="dark" expand="md" style={{zIndex: "9999"}}>
          <NavbarBrand href="/"><img className={classes.brand} src={Brand} alt="Dante"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames(classes.portfolioLink)} href="/portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>            
            </Nav>
            <NavbarText>
                <a target="_blank" href="https://www.linkedin.com/in/dante-lacuadra-33567b168/"><LinkedIn/></a>&nbsp;&nbsp;
                <a target="_blank" href="https://github.com/dantelacu2"><GitHub/></a>&nbsp;&nbsp;
                <a href="mailto:dlacuadra@college.harvard.edu"><Email/></a>
            </NavbarText>
          </Collapse>
        </Navbar>
      </header>
    );
}

export default NavBar;