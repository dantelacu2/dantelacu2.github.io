const portfolioStyle = {
    container: {
        paddingTop: "30px",
        position: "absolute",
        backgroundColor: "#343a40",
        bottom: 0,
        minHeight: "calc(100% - 56px)"
    },
    "@media only screen and (max-width : 768px)":{
        container: {
            position: "relative",
            paddingBottom: "30px"
        }
    }
}

export default portfolioStyle;