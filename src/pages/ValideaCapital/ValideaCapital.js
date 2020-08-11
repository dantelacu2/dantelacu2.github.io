import React from 'react';

import { Container } from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import styles from './valideaCapitalStyle';
const useStyles = makeStyles(styles);

const ValideaCapital = () => {
    const classes = useStyles();
    return (
        <Container fluid className={classes.container}>
            <h2 className={classes.h2}>Validea Capital Management</h2>
            <p>Full-stack site for a capital management firm to attract new clients, provide resources to potential clients, and manage internal systems.</p>
        </Container>
    );
}

export default ValideaCapital;