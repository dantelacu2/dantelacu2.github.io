import React from 'react';
import classnames from 'classnames';

import { Card } from 'reactstrap';

import styles from './messageStyle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Message = (props) => {
    const classes = useStyles();
    var myMessageClasses = classes.whiteCard;
    if (props.blue) {
        myMessageClasses = classes.blueCard;
    }
    return (
        <Card className={classnames(myMessageClasses, "animate__animated animate__slideInLeft")}>
            {props.content}
        </Card>
    );
}

export default Message;