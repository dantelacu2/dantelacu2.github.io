import React from 'react';

import { Container, Row, Col, Card } from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import styles from './challengeCapitalStyle';

import ChallengeCapital1 from './img/ChallengeCapital1.png';
import ChallengeCapital2 from './img/ChallengeCapital2.png';
import ChallengeCapital3 from './img/ChallengeCapital3.png';

const useStyles = makeStyles(styles);

const ChallengeCapital = () => {
    const classes = useStyles();
    return (
        <Container fluid className={classes.container}>
            <h2 className={classes.h2}>Challenge Capital</h2>
            <p style={{maxWidth: "400px", marginLeft: "auto", marginRight: "auto"}}>Full-stack site for a student-run investment fund. Built to attract investors, provide information to prospective students, and provide internal resources for analysts.</p>
            <Row className="mt-5">
                <Col lg={4} md={12}>
                    <Card style={{marginTop: "25%", boxShadow: "6px 9px 5px 0px rgba(97,97,97,1)"}}>
                        <img className={classes.img} src={ChallengeCapital1} />
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card className="rounded-0" style={{width: "50%", marginLeft: "auto", marginRight: "auto", boxShadow: "6px 9px 5px 0px rgba(97,97,97,1)"}}>
                        <img className={classes.imgPhone} src={ChallengeCapital2} />
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card style={{marginTop: "25%", boxShadow: "6px 9px 5px 0px rgba(97,97,97,1)"}}>
                        <img className={classes.img} src={ChallengeCapital3} />
                    </Card>
                </Col>
            </Row>
            <p className="mt-5">React.js, Node.js, Express.js, MSSQL, Azure</p>
        </Container>
    );
}

export default ChallengeCapital;