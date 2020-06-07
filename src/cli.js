import { encode } from './encoding'

const [, , ...args] = process.argv

if (args.length < 1) {
    console.log('Error: please input at least one argument\n')
    console.log('Usage: encode <string to encode>')
    console.log('\t(This program don\'t support string that have character is number and concern on \'\\\')')
} else {
    for (const text of args) {
        let rle = encode(text)
        if (rle.success) {
            console.log(rle.desc)
        } else {
            console.log(`Error: ${rle.desc}`)
        }
    }
}