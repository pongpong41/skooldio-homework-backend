export const encode = (text) => {
    if (!text) {
        return {success: false, desc: 'Don\'t have string to encode'}
    }

    let count = 0
    let lastLetter;
    let output = '';

    for (const c of text) {
        if (c >= '0' && c <= '9') {
            return {success: false, desc: 'Input string contains some number'}
        }

        if (!lastLetter) {
            lastLetter = c
            count = 1
        } else if (c != lastLetter) {
            output += `${lastLetter}${count}`
            lastLetter = c
            count = 1
        } else {
            count++
        }
    }

    output += `${lastLetter}${count}`
    return {success: true, desc: output}
}