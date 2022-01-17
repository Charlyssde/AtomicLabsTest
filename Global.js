export const Colors = {
    White: "#ffffff",
    Black: "#000000",
    Orange: "#fa4d09",
    Blue: "#428db5",
    Gray: "#5a5c55",
    Red: "#9c000a",
    OrangeLight: "#ed6132"

}

export const getImage = (name) => {
    switch (name) {
        case "first":
            return require('./assets/Group4035.png')
        case "second":
            return require('./assets/Group4036.png')
        case "third":
            return require('./assets/Group4037.png')
        default:
            return require('./assets/logo.png')
    }
}