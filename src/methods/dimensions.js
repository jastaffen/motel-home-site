export const handleWidth = (width) => {
    if (width < 250) {
        return width * 1.25
    }
    if (width < 400 && width > 250) {
        return width * 0.7
    } else if (width < 550 && width > 400) {
        return width * 0.55
    } else if (width < 800 && width > 550) {
        return width * 0.39
    } else if (width > 800 && width < 1000) {
        return width * 0.38
    } else {
        return width * .29
    }
}

export const handleHeight = (height) => {
    if (height > 800) {
        return height * 0.35
    } else if (height < 800 && height > 500) {
        return height * 0.4
    } else if (height < 500) {
        return height * .8
    }
    return height;
}