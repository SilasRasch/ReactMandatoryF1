const Points = (index) => {
    if (index === 0) {
        return {backgroundColor: 'goldenrod'}
    } 
    else if (index === 1) {
        return {backgroundColor: 'silver'}
    }
    else if (index === 2) {
        return {backgroundColor: 'rgb(205, 127, 50)'}
    }
    else {
        return {backgroundColor: 'rgba(0, 0, 0, 0.4)'}
    }
}

export default Points;
