export class Result {
    constructor(
        readonly success: boolean,
        readonly value?: string,
        readonly error?: string,
    ) {}

    static ok(value: string) {
        return new Result(true, value);
    }
  
    static fail(error: string) {
        return new Result(false, undefined, error);
    }
}
  