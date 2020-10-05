export default () => ({
    viewWrapper: {
        height: "100%",
        borderBottom: '2px solid rgba(0, 0, 0, 0.12)'
    },
    viewWrapperActive: {
        borderColor: "blue"
    },
    patientInfoTitle: {
        padding: "2%",
        position: 'relative',
        fontSize: "16px",
        backgroundColor: "#007fff",
        color: "white",
        "&:after": {
            content: "''",
            position: 'absolute',
            right: "15px",
            top: '50%',
            display: 'block',
            borderLeft: '3px solid white',
            borderTop: '3px solid white',
            width: '10px',
            height: '10px',
            float: 'right',
            transform: 'translate(50%, -50%) rotate(-45deg)'
        }
    },
    patientInfoWrapper: {
        padding: "2% 0"
    }
})