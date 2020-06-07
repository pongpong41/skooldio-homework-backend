import { encode } from '../src/encoding'

describe('test encode function', () => {
    test('cannot encode empty string: ""', () => {
        const rle = encode('')
        expect(rle.success).toBe(false)
    })

    test('cannot encode string that is number: "0"', () => {
        const rle = encode('0')
        expect(rle.success).toBe(false)
    })

    test('cannot encode string that have some character is number: "aaabb1b2"', () => {
        const rle = encode('aaabb1b2')
        expect(rle.success).toBe(false)
    })

    test('encode one character: "a", result is "a1"', () => {
        const rle = encode('a')
        expect(rle.success).toBe(true)
        expect(rle.value).toBe('a1')
    })

    test('encode non-repeat string: "abc", result is "a1b1c1"', () => {
        const rle = encode('abc')
        expect(rle.success).toBe(true)
        expect(rle.value).toBe('a1b1c1')
    })

    test('encode all-repeat string: "aaa", result is "a3"', () => {
        const rle = encode('aaa')
        expect(rle.success).toBe(true)
        expect(rle.value).toBe('a3')
    })

    test('encode repeat string: "s1c1h1o2l1" result is "s1c1h1o2l1"', () => {
        const rle = encode('school')
        expect(rle.success).toBe(true)
        expect(rle.value).toBe('s1c1h1o2l1')
    })

    test('encode uppercase string: "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW", result is "W12B1W12B3W24B1W14"', () => {
        const rle = encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW')
        expect(rle.success).toBe(true)
        expect(rle.value).toBe('W12B1W12B3W24B1W14')
    })

    test('encode mix uppercase and lower case: "AaBBbCC", result is "A1a1B2b1C2"', () => {
        const rle = encode('AaBBbCC')
        expect(rle.success).toBe(true)
        expect(rle.value).toBe('A1a1B2b1C2')
    })

    test('encode special character : "a@@    $%  $$&*-", result is "a1@2 4$1%1 2$2&1*1-1"', () => {
        const rle = encode('a@@    $%  $$&*-')
        expect(rle.success).toBe(true)
        expect(rle.value).toBe('a1@2 4$1%1 2$2&1*1-1')
    })

    test('encode Thai language: "ฟหหกดดด", result is "ฟ1ห2ก1ด3"', () => {
        const rle = encode('ฟหหกดดด')
        expect(rle.success).toBe(true)
        expect(rle.value).toBe('ฟ1ห2ก1ด3')
    })
})