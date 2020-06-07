import { Result } from './result'

export const encode = (text: string) => {
    if (!text) {
        return Result.fail('Don\'t have string to encode')
    }

    let count = 0
    let lastLetter = ''
    let output = ''

    for (const c of text) {
        if (c >= '0' && c <= '9') {
            return Result.fail('Input string contains some number')
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
    return Result.ok(output)
}