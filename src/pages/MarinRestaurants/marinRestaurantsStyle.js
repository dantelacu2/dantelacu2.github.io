const valideaCapitalStyle = {
    container: {
        paddingTop: "30px",
        position: "absolute",
        backgroundColor: "#343a40",
        bottom: 0,
        color: "white",
        textAlign: "center",
        minHeight: "calc(100% - 56px)"
    },
    h2: {
        textAlign: "center",
        fontSize: "200%",
        fontWeight: "bolder"
    },
    img: {
        width: "100%",
        height: "auto"
    },
    imgPhone: {
        width: "100%",
        height: "auto"
    },
    "@media only screen and (max-width : 768px)": {
        container: {
            position: "relative",
            paddingBottom: "30px"
        },
        imgPhone: {
        }   
    }
}

export default valideaCapitalStyle;