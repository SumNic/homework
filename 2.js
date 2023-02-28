export let mathemat = {

    trans: function (num1, num2) {

        let dec1length = 0;
        let dec2length = 0;
        let num1str = num1;
        let num2str = num2;
        let num1prev;
        let num2prev;
            
            if (num1.includes('.')) {
                let num1arr = num1.split('.');
                dec1length = num1arr[1].length;
                num1str = num1arr.join('');
            } 

            if (num2.includes('.')) {
                let num2arr = num2.split('.');
                dec2length = num2arr[1].length;
                num2str = num2arr.join('');
            } 

            if (dec1length < dec2length) {
                let diff = dec2length - dec1length;
                let str1len = num1str.length + diff;
                num1prev = num1str.padEnd(str1len, '0');
                num1str = num1prev;

            } else if (dec1length > dec2length) {
                let diff = dec1length - dec2length;
                let str2len = num2str.length + diff;
                num2prev = num2str.padEnd(str2len, '0');
                num2str = num2prev;
            }

        let num1Big = BigInt(num1str);
        let num2Big = BigInt(num2str);

        return [num1Big, num2Big, dec1length, dec2length];
    },

    addition: function (num1, num2) {

        let obj = this.trans(num1, num2);
        let decmax = (obj[2] >= obj[3]) ? obj[2] : obj[3];
        let resultBig = (BigInt(obj[0]) + BigInt(obj[1])).toString().split("");

        if (decmax >= resultBig.length) {

            let dif = decmax - resultBig.length;

            for (let i = 0; i <= dif; i++) {
                resultBig.splice(0, 0, '0');
            }
        }

        resultBig.splice(-decmax, 0, '.');
        let add = resultBig.join('');

        return add;
    },

    subtraction: function (num1, num2) {

        let obj = this.trans(num1, num2);
        let decmax = (obj[2] >= obj[3]) ? obj[2] : obj[3];
        let resultBig = (BigInt(obj[0]) - BigInt(obj[1])).toString().split("");

        if (decmax >= resultBig.length) {

            let minus = 0;
            if (resultBig[0] === '-') minus = 1;

            let dif = decmax - resultBig.length + minus;

            for (let i = 0; i <= dif; i++) {
                resultBig.splice(0 + minus, 0, '0');
            }
        }

        resultBig.splice(-decmax, 0, '.');
        let sub = resultBig.join('');

        return sub;
    },

    multiplication: function (num1, num2) {

        let obj = this.trans(num1, num2);
        let decmax =  (obj[2] >= obj[3]) ? 2 * obj[2] : 2 * obj[3];
        let resultBig = (BigInt(obj[0]) * BigInt(obj[1])).toString().split("");

        if (decmax >= resultBig.length) {

            let dif = decmax - resultBig.length;

            for (let i = 0; i <= dif; i++) {
                resultBig.splice(0, 0, '0');
            }
        }

        resultBig.splice(-decmax, 0, '.');
        let mult = resultBig.join('');

        return mult;
    },

    division: function (num1, num2) {

        let obj = this.trans(num1, num2);
        let decmax =  3; // точность три знака после запятой, 1000n
        let resultBig = (BigInt(obj[0]) *1000n / BigInt(obj[1])).toString().split(""); 

        if (decmax >= resultBig.length) {

            let dif = decmax - resultBig.length;

            for (let i = 0; i <= dif; i++) {
                resultBig.splice(0, 0, '0');
            }
        }

        resultBig.splice(-decmax, 0, '.');
        let div = resultBig.join('');

        return div;
    }
}