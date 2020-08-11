const aboutStyle = {
    container: {
        paddingTop: "20px",
        position: "absolute",
        backgroundColor: "#343a40",
        bottom: 0,
        minHeight: "calc(100% - 56px)",
        overflowY: "scroll"
    },
    img2: {
        marginTop: "20px",
        height: "250px",
        width: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    imgLogo: {
        marginTop: "20px",
        width: "30px",
        paddingRight: "10px",
        height: "auto",
        display: "inline"
    },
    columnOne: {
        color: "white",
        textAlign: "center",
    },
    row: {
        height: "100%",
        paddingTop: "20%"
    },
    "@media only screen and (max-width : 768px)": {
        container: {
            position: "relative",
            paddingBottom: "80px"
        },
        columnOne: {
            paddingLeft: "0px !important"
        },
        img2: {
            display: "none !important"
        },
    },
    columnThree: {
        marginTop: "-25px"
    },
    imgMe: {
        marginTop: "20px",
        top: 0,
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    },
}

export default aboutStyle;