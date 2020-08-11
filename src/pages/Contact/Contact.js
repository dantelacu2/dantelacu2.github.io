import React from 'react';
import classnames from 'classnames';
import emailjs from 'emailjs-com';

//reactstrap
import { Container, Card } from 'reactstrap';
import { Form, Button } from 'react-bootstrap';

//style
import styles from './contactStyle';
import { withStyles } from '@material-ui/core/styles';

//core components
import Typing from '../../components/Typing/Typing';

//data
import messages from './data/messages';
import Message from '../../components/Message/Message';

const MESSAGE_COUNT = 8;

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMessages: [],
            myMessages: [],
            messageBody: null,
            messageSent: false,
            isDisabled: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.randomInteger = this.randomInteger.bind(this);
    }

    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log();
        if (!this.state.messageBody) {
            console.log("didn't send message");
        }
        else if (this.state.messageBody.length > 500) {
            console.log("Too big");
        }
        else {
            console.log("sending email");
            emailjs.sendForm('gmail', 'template_B6pYTG0l', e.target, 'user_VMCUhafdlEu5TrJQC0nYE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            this.state.myMessages
            .push(<Message 
                    blue 
                    alignRight 
                    content={this.state.messageBody} 
                 />);
            this.state.messageBody = null;
            document.getElementById("myForm").reset();
            this.setState({ isDisabled: true, messageSent: true });
        }
    }
    
    handleChange(e) {
        this.setState({ messageBody: e.target.value });
    }

    async componentDidMount() {
        // time between messages
        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }

        for (let i = 0; i < MESSAGE_COUNT; i++) {
            // adds and removes from currentMessages (the messages being displayed)
            this.state.currentMessages.push(<Typing/>);
            this.forceUpdate();
            await sleep(this.randomInteger(300, 500));

            this.state.currentMessages.pop();
            this.state.currentMessages.push(<Message alignLeft content={messages(i)}/>)
            this.forceUpdate();
            await sleep(300);
        }
        this.setState({ isDisabled: false });
    }

    render() {
        const { classes } = this.props;
        var formClass = classes.inputBox;
        if (this.state.isDisabled) {
            formClass = classes.inputBoxDisabled;
        }
        return (
            <Container fluid className={classes.container}>
                {this.state.currentMessages.map((ele, index) => {
                    return (
                        <div key={index}>
                            {ele}
                            <br/>
                        </div>
                    );
                })}
                {this.state.myMessages.map((ele, index) => {
                    return (
                        <div key={index}>
                            {ele}
                            <br/>
                        </div>
                    );
                })}
                <br/>
                {this.state.messageSent ? <Message content="Thank you! Dante will get back to you soon."/> : <></>}
                <div className={formClass}>
                    <hr className={classes.hr} />
                    <Form id="myForm" onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Control className={classes.input} disabled={this.state.isDisabled} type="text" name="message" id="message" value={this.state.messageBody} onChange={this.handleChange} placeholder="Enter your message to Dante" />
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        );
    }
}

export default withStyles(styles)(Contact);