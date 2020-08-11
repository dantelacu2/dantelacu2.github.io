import React from 'react';
import classnames from 'classnames';

import { Container, Row, Col } from 'reactstrap';

// images
import MeWorking from './img/me_working.png';
import MeAvatar from './img/me_avatar.png';
import JavaScriptLogo from './img/logos/JavaScriptLogo.png';
import ReactLogo from './img/logos/ReactLogo.png';
import PythonLogo from './img/logos/PythonLogo.png';
import MongoLogo from './img/logos/MongoLogo.png';

import { makeStyles } from '@material-ui/core/styles';
import styles from './aboutStyle';
const useStyles = makeStyles(styles);

const About = () => {
    const classes = useStyles();
    return (
        <Container fluid className={classnames(classes.container, "h-100")}>
            <Row className={classes.row}>
                <Col lg={4} md={12} sm={12}>
                    <img className={classes.img2} src={MeWorking}/>
                </Col>
                <Col lg={4} md={12} sm={12} className={classes.columnOne}>
                    <h2 className={classes.h2}>
                        Dante Lacuadra
                    </h2>
                    <p>I am a Harvard College student studying Computer Science with a minor in Economics. I also code.</p>
                    <br/>
                    <h2 className={classes.h2}>My skills</h2>
                    <img className={classes.imgLogo} src={JavaScriptLogo} />
                    <img className={classes.imgLogo} src={ReactLogo} />
                    <img className={classes.imgLogo}  src={PythonLogo} />
                    <img className={classes.imgLogo}  src={MongoLogo} />
                </Col>
                <Col lg={4} md={12} sm={12} className={classes.columnThree}>
                    <img className={classes.imgMe} src={MeAvatar} />
                </Col>
            </Row>
        </Container>
    );
}

export default About;