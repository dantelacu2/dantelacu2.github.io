import React from 'react';

import { Container, Row, Col, Card } from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import styles from './valideaCapitalStyle';

import ValideaCapital1 from './img/ValideaCapital1.png';
import ValideaCapital2 from './img/ValideaCapital2.png';
import ValideaCapital3 from './img/ValideaCapital3.png';

const useStyles = makeStyles(styles);

const ValideaCapital = () => {
    const classes = useStyles();
    return (
        <Container fluid className={classes.container}>
            <h2 className={classes.h2}>Validea Capital Management</h2>
            <p style={{maxWidth: "400px", marginLeft: "auto", marginRight: "auto"}}>Full-stack site for a capital management firm to attract new clients, provide resources to potential clients, and manage internal systems.</p>
            <Row className="mt-5">
                <Col lg={4} md={12}>
                    <Card style={{marginTop: "25%", boxShadow: "6px 9px 5px 0px rgba(97,97,97,1)"}}>
                        <img className={classes.img} src={ValideaCapital1} />
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card className="rounded-0" style={{width: "50%", marginLeft: "auto", marginRight: "auto", boxShadow: "6px 9px 5px 0px rgba(97,97,97,1)"}}>
                        <img className={classes.imgPhone} src={ValideaCapital2} />
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card style={{marginTop: "25%", boxShadow: "6px 9px 5px 0px rgba(97,97,97,1)"}}>
                        <img className={classes.img} src={ValideaCapital3} />
                    </Card>
                </Col>
            </Row>
            <p className="mt-5">React.js, Node.js, Express.js, MSSQL, Azure</p>
        </Container>
    );
}

export default ValideaCapital;