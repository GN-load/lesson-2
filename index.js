
// const obj = [
//     { name: 'Radar', price: 1300, quantity: 8 },
//     { name: 'Scaner', price: 1330, quantity: 6 },
//     { name: 'Droid', price: 1320, quantity: 5 },
//     { name: 'Zahvat', price: 1350, quantity: 3 }
// ];
// const func = (a, b) => {
//     const arr = []
//     for (let i = 0; i < a.length; i++) {
//        for(key in a[i]) {
//            if(b == key) {
//                arr.push(a[i][key])
//            }
//        }
//     };
//     console.log(arr)
// };
// func(obj, 'price')

// const func = (obj) => {

// }

// `use strict`
// class Car {
//     constructor(options) {
//         this.name = options.name
//         this.speed = options.speed
//         this.color = options.color
//     }

//     voice(carName) {
//         console.log(`i am ${carName}`)
//     }
// };

// const toyota = new Car({
//     name: 'toyota',
//     speed: 300,
//     color: 'green'
// });

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);

//     }

//     hide() {
//         this.$el.style.display = "none"
//     }

//     show() {
//         this.$el.style.display = "block"
//     }

//     verticalBottom(a) {
//         this.$el.style.marginTop = `${a}%`
//     }

//     varticalTop(a) {
//         this.$el.style.marginBottom = `${a}%`
//     }

//     time() {
//         this.$el.style.marginLeft = '50%'
//         setTimeout(()=> {
//             this.$el.style.marginTop = '100px'
//         }, 2000)
//     }
// };

// class Box extends Component {
//     constructor(options) {
//         super(options.selector)
//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//     }
// };
// const box = new Box({
//     size: 100,
//     color: 'green',
//     selector: '#box1'
// })

// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.color = options.color
//     }


// };
// const cat = new Animal({
//     name: "Vasya",
//     age: 5,
//     color: 'red'
// });

// class Car {
//     constructor(options) {
//         this.carName = options.carName
//         this.country = options.country
//         this.color = options.color
//     }
// };
// class Mazda extends Car {
//     constructor(selector) {
//         super(selector)
//         this.doorsValue = selector.doorsValue
//         this.price = selector.price
//         this.speed = selector.speed
//     }
// };
// const mazda = new Mazda({
//     carName: 'adad',
//     country: 'Spain',
//     color: 'grey',
//     doorsValue: 4,
//     price: 20,
//     speed: 9393939
// })

// const obj = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//     steve: 67,
//     zoe: 77,
//     lora: 80
// };
// const func = (a) => {
//     let x = 0;
//     for (work in a) {
//         if (x < a[work]) {
//             x = a[work]
//         };
//     }
//     console.log(x)
//     for(key in a) {
//         if(a[key] == x) {
//             console.log(key)
//         }
//     }
// }
// func(obj)
