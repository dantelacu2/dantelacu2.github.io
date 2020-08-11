import React from 'react';

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Button,
    CardFooter }
from 'reactstrap';

//styles 
import styles from './portfolioCardStyle';
import { makeStyles } from '@material-ui/core/styles';

//icons
import ArrowForward from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(styles);

const PortfolioCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader className="font-weight-bold" tag="h6">{props.title}</CardHeader>
            <CardBody>
                <CardTitle>{props.subtitle}</CardTitle>
                <CardText>{props.description}</CardText>
                <Button className={classes.btn} href={props.link}>View <ArrowForward/></Button>
            </CardBody>
            <CardFooter className="text-muted">{props.footer}</CardFooter>
        </Card>
    );
}

export default PortfolioCard;