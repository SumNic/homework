export let string = {
    capital: function (str) {
        let strLower = str[0].toUpperCase() + str.slice(1).toLowerCase(); 
        return strLower;
    },

    convert: function (str) {
        return str
                .split(/\s* \s*/)
                .map(item => item.trim())
                .join(' ')
                .split('.')
                .map(item => item.trim())
                .join('. ')
                .split(',')
                .map(item => item.trim())
                .join(', ')
    },

    quantity: function (str) {
        let strArr = this.convert(str).split(' ');
        return strArr.length;
    },

    uniq: function (str) {
        let newStr = str
                    .toLowerCase()
                    .split(',')
                    .map(item => item.trim())
                    .join(' ')
                    .split('.')
                    .map(item => item.trim())
                    .join(' ')
                    .split(/\s* \s*/)
                    .map(item => item.trim());

        let set = new Set(newStr);
        let result = [];

        for (let valSet of set) {
            let sum = 0;
            for (let valStr of newStr) {
                if (valSet === valStr) sum++;
            }
            let last = Number(sum.toString().slice(-1));
            let word;
            if (last > 1 && last < 5) {
                word = ' раза';
            } else {
                word = ' раз';
            }
            result.push(valSet + ' - ' + sum + word);
        }

        return result;
    }
}