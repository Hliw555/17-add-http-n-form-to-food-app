console.log('-->> Using for in loop to convert objects in \
object into objects in array')


const objMeals = {
    m1: {
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    m2: {
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    m3: {
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    m4: {
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
};

console.log(objMeals)
console.log(objMeals.m1.price)
console.log(objMeals['m1']['price'])
console.log(objMeals['m3']['name'], objMeals['m3']['price'])

// ชื่อตัวแปร ต่อไปนี้เราจะเรียกว่า ชื่อของข้อมูล, ชื่อข้อมูล

const arrMeals = [];
// let otp = 0;
// for (let a = 1; a <= 5; a++) {
//     otp += Math.round(Math.random() * 9).toString()
//     // console.log('loop 10 times')

// }
// +otp
// console.log(otp)

for (const key in objMeals) {
    // console.log(key)
    arrMeals.push({
        idd: key,
        nnn: objMeals[key]['name'],
        des: objMeals[key].description,
        ppp: objMeals[key]['price']
    })
}

console.log(arrMeals)


const asyncFunction1 = async () => {
    return 'I am an asyncronous function'
}