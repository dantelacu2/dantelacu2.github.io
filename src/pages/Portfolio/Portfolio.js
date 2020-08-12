import React from 'react';

//reactstrap
import { Container, Row, Col } from 'reactstrap';

//styles
import { makeStyles } from '@material-ui/core/styles';
import styles from './portfolioStyle';

// components
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

const useStyles = makeStyles(styles);

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Container fluid className={classes.container}>
            <Row>
                <Col lg={3} md={12} sm={12}>
                    <PortfolioCard
                        title="Validea Capital Management, LLC."
                        subtitle="Full-stack site"
                        description="Engineered a flashy landing page for clients: boosted SEO scores, 
                                    improved antiquated design features & server load time,
                                    and built to be highly scalable."
                        footer="React.js, Node.js, Express.js, MSSQL"
                        link="validea-capital"
                    />
                </Col>
                <Col lg={3} md={12} sm={12}>
                    <PortfolioCard
                        title="Quadrant Health"
                        subtitle="React demo"
                        description="Created a React app to help achieve pre-seed funding for a healthcare startup. Worked with a designer and a team of backend developers."
                        link="#"
                        footer="React.js, Redux, Node.js"
                    />
                </Col>
                <Col lg={3} md={12} sm={12}>
                    <PortfolioCard
                        title="Challenge Capital"
                        subtitle="Full-stack site"
                        description="Created a site for investors & analysts. Gives analysts a way to login and edit their displayed information. Describes our investment stratgies/decision making to investors. Gives prospective analysts a glimpse at how we operate."
                        footer="Node.js, Express.js, MongoDB, SCSS"
                        link="/challenge-capital"
                    />
                </Col>
                <Col lg={3} md={12} sm={12}>
                    <PortfolioCard
                        title="Marin Restaurants"
                        subtitle="Full-stack site"
                        description="Aggregates 1,000 local restaurants closure status with takeout & delivery options. Scrapes, google uses yelp's API, and attempts to verify information on each restaurant's website."
                        footer="MongoDB, Express.js, React.js, Node.js"
                        link="/marin-restaurants"
                    />
                </Col>
                <Col lg={3} md={12} sm={12}>
                    <PortfolioCard
                        title="Validea Guru Investor Blog"
                        subtitle="Wordpress Blog"
                        description="Heavily customized, optimized blog with around 100,000 visits a month. Wrote PHP code, worked with a team to design an amazing UX/UI."
                        footer="Wordpress, PHP"
                        link="https://blog.validea.com"
                        target="_blank"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;