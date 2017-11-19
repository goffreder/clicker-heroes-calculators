import isEqual from 'lodash/isEqual';

class BigInt {
    constructor(number) {
        this.number = number;
        this.maxDiff = 5;
    }

    add = (number) => {
        const exponent = number[1];
        const e0 = this.number[1];
        const max = this.findMax(this.number, number);
        if (Math.abs(exponent - e0) > this.maxDiff) {
            return max;
        }
        let min = this.findMin(this.number, number);
        min = this.equalize(min, max);
        this.number = this.normalize([min[0] + max[0], max[1]]);
        return this.number;
    }

    subtract = (number) => {
        const exponent = number[1];
        const e0 = this.number[1];
        const max = this.findMax(this.number, number);
        if (isEqual(max, number)) {
            // the number you are trying to subtract is greater than the one your original number. Clicker Heroes does not deal with negatives.
            return false;
        }
        // at this point, we now that number is smaller than this.number
        if (Math.abs(exponent - e0) > this.maxDiff) {
            return max;
        }
        let min = this.equalize(number, this.number);
        this.number = this.normalize([max[0] - min[0], max[1]]);
        return this.number;
    }

    multiply = (number) => {
        let [base, exponent] = number;
        let [b0, e0] = this.number;

        this.number = this.normalize([base * b0, exponent + e0]);
        return this.number;
    }

    divide = (number) => {
        let [base, exponent] = number;
        let [b0, e0] = this.number;

        this.number = this.normalize([b0 / base, e0 - exponent]);
        return this.number;
    }

    // pow = (number) => {
    //
    // }

    show = (number = this.number) => {
        return `${this.round(number[0])}e+${number[1]}`;
    }

    round = (num, decimals = 3) => {
        const powerTen = Math.pow(10, decimals);
        return Math.floor(num * powerTen) / powerTen;
    };


    normalize = (number) => {
        let [base, exponent] = number;
        if (base >= 1 && base < 10) return number;
        if (base < 1) {
            while (base < 1) {
                base *= 10;
                exponent--;
            }
        }
        if (base >= 10) {
            while (base >= 10) {
                base /= 10;
                exponent++;
            }
        }
        return [base, exponent];
    }

    equalize = (num1, num2) => {
        let e1 = num1[1];
        let e2 = num2[1];
        let b1 = num1[0];
        while ( e1 < e2 ) {
            b1 = b1 / 10;
            e1++;
        }
        return [b1, e1];
    }

    findMax = (num1, num2) => {
        const [b1, e1] = num1;
        const [b2, e2] = num2;

        if (e2 > e1) {
            return num2;
        } else if (e2 < e1) {
            return num1;
        }

        if (b2 > b1) {
            return num2;
        }
        return num1;
    }

    findMin = (num1, num2) => {
        const [b1, e1] = num1;
        const [b2, e2] = num2;
        if (e2 < e1) {
            return num2;
        } else if (e2 > e1) {
            return num1;
        }

        if (b2 < b1) {
            return num2;
        }
        return num1;
    }
}

export default BigInt;
