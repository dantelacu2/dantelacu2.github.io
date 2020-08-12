import React from 'react';

import { Container, Row, Col, Card } from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import styles from './marinRestaurantsStyle';

import MarinRestaurants1 from './img/MarinRestaurants1.png';
import MarinRestaurants2 from './img/MarinRestaurants2.png';
import MarinRestaurants3 from './img/MarinRestaurants3.png';

const useStyles = makeStyles(styles);

const MarinRestaurants = () => {
    const classes = useStyles();
    return (
        <Container fluid className={classes.container}>
            <h2 className={classes.h2}>Marin Restaurants Database</h2>
            <p style={{maxWidth: "400px", marginLeft: "auto", marginRight: "auto"}}>Aggregates about 1,000 restaurants in the Marin County area. Scrapes google, yelp, and individual restaurant sites to inform residents about closures.</p>
            <Row className="mt-5">
                <Col lg={4} md={12}>
                    <Card style={{marginTop: "25%", boxShadow: "6px 9px 5px 0px rgba(97,97,97,1)"}}>
                        <img className={classes.img} src={MarinRestaurants1} />
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card className="rounded-0" style={{width: "50%", marginLeft: "auto", marginRight: "auto", boxShadow: "6px 9px 5px 0px rgba(97,97,97,1)"}}>
                        <img className={classes.imgPhone} src={MarinRestaurants2} />
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card style={{marginTop: "25%", boxShadow: "6px 9px 5px 0px rgba(97,97,97,1)"}}>
                        <img className={classes.img} src={MarinRestaurants3} />
                    </Card>
                </Col>
            </Row>
            <p className="mt-5">MongoDB, Express.js, React.js, Node.js</p>
        </Container>
    );
}

export default MarinRestaurants;