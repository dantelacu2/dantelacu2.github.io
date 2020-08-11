import React from 'react';

// animation
import "animate.css/animate.min.css";

// reactstrap
import { Container, Col, Row, Button } from 'reactstrap';

//icons
import Book from '@material-ui/icons/MenuBook';
import About from '@material-ui/icons/PermIdentity';

// styles
import styles from './mastheadStyle';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import "./masthead.scss";



const useStyles = makeStyles(styles);

const Masthead = () => {
    const classes = useStyles();
    return (
        <body style={{minHeight: "100%"}}>
            <Container fluid className={classes.container}>
                <div className={classnames(classes.circle, classes.bounce7)}>
                    <h1 className={classes.h1}>Hello! I'm Dante.</h1>
                </div>
            </Container>
        </body>
    );
}

export default Masthead;