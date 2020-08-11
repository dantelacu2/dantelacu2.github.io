const mastheadStyle = {
    container: {
        position: "absolute",
        backgroundColor: "#343a40",
        bottom: 0,
        minHeight: "calc(100% - 56px)",
        overflow: "hidden"
    },
    h1: {
        color: "#343a40",
        marginTop: "20%",
        paddingTop: "150px",
        textAlign: "center"
    },
    circle: {
        marginTop: "200px",
        marginLeft: "auto",
        marginRight: "auto",
        alignSelf: "flex-end",
        backgroundColor: "#ff8c69",
        zIndex: 9998,
        borderRadius: "100%",
        width: 500,
        animationDuration: "2s",
        animationIterationCount: "infinite",
        transformOrigin: "bottom",
        height: 500,
        boxShadow: "-7px 10px 5px 0px rgba(117,117,117,1)"
    },
    "@media only screen and (max-width : 768px)": {
        circle: {
            width: 300,
            height: 300
        },
        h1: {
            fontSize: "200%",
            paddingTop: "130px"
        }
    },
    bounce7: {
        animationName: "$bounce7",
        animationTimingFunction: "cubic-bezier(0.280, 0.840, 0.420, 1)"
    },
    "@keyframes bounce7": {
        "0%": { transform: "scale(1,1) translateY(0)" },
        "10%": { transform: "scale(1.1,.9) translateY(0)" },
        "30%": { transform: "scale(.9,1.1) translateY(-100px)" },
        "50%": { transform: "scale(1.05,.95) translateY(0)" },
        "57%": { transform: "scale(1,1) translateY(-7px)" },
        "64%":  { transform: "scale(1,1) translateY(0)"},
        "100%": { transform: "scale(1,1) translateY(0)" }
    }
}

export default mastheadStyle;