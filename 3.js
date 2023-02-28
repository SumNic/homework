class Product {

    constructor(name, price, quantity, description) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description
    }

}

let products = [
	new Product('edhn', 2, 5, 'mcnd ldog abce'),
	new Product('jfdn', 25, 10, 'mcnd abc ldog'),
	new Product('john', 7, 3, 'abc mcnd ldog'),
    new Product('fdfd', 2, 37, 'mcnd ldog abc'),
    new Product('jofd', 40, 35, 'abcsddf'),
];

// let str = 'name-contains-fd&price-=2&quantity->=5&description-ends-abc';
let str = 'name-ends-fd&quantity->=35&description-ends-abc';

function filterProduct(str) {

    let strArr = str.split('&').map(item => item.split('-'));

    let newArr = products.filter(function(item) {

        let coll = 0;
        let total = 0;

        for (let val of strArr) {

            coll += 1;

            let id;

            if (val[0] === 'name') id = item.name;
            if (val[0] === 'description') id = item.description;
            if (val[0] === 'price') id = item.price;
            if (val[0] === 'quantity') id = item.quantity;

            let num1 = Number(val[1].substring(1));
            let num2 = Number(val[1].substring(2));

            if (val[1].includes('contains') && id.includes(val[2])) total++;
            if (val[1].includes('starts') && id.startsWith(val[2])) total++;
            if (val[1].includes('ends') && id.endsWith(val[2])) total++;
            if (val[1].includes('=') && id == num1) total++;
            if (val[1].includes('>') && id > num1) total++;
            if (val[1].includes('<') && id < num1) total++;
            if (val[1].includes('>=') && id >= num2) total++;
            if (val[1].includes('<=') && id <= num2) total++;
        }

        if (coll === total) return item;
    });

    return newArr;
}

console.log( filterProduct(str) );



