const contactStyle = {
    container: {
        paddingTop: "30px",
        position: "absolute",
        backgroundColor: "#343a40",
        bottom: 0,
        minHeight: "calc(100% - 56px)"
    },
    card: {
        display: "inline-block",
        backgroundColor: "#e6e6e6",
        border: "none",
        fontFamily: "Helvetica Neue",
        padding: "8px 15px",
        marginTop: "5px",
        marginBottom: "5px",
        fontSize: "130%",
        opacity: 0.9,
        borderRadius: "20px",
        marginLeft: "20px"
    },
    cardRight: {
        display: "inline-block",
        backgroundColor: "#036de1",
        color: "white",
        border: "none",
        float: "right",
        fontFamily: "Helvetica Neue",
        padding: "8px 15px",
        marginTop: "5px",
        marginBottom: "5px",
        fontSize: "160%",
        opacity: 0.9,
        borderRadius: "20px",
        marginLeft: "20px"
    },
    cardLast: {
        borderBottomLeftRadius: "-40px"
    },
    inputBox: {
        fontFamily: "Helvetica Neue",
        color: "white",
        position: "absolute",
        bottom: 0,
        width: "calc(100% - 30px)"
    },
    inputBoxDisabled: {
        display: "none"
    },
    input: {
        borderRadius: "20px",
        outline: "none !important",
        border: "none !important",
        "&:hover": {
            outline: "none !important",
            boxShadow: "none !important"
        },
        "&:focus": {
            outline: "none !important",
            boxShadow: "none !important"
        }
    },
    hr: {
        backgroundColor: "lightgray"
    }
}

export default contactStyle;