// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// }

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
// keys.push(key);
// values.push(apartment[key]);
// }
  
// console.log(keys);
// // ['descr', 'rating', 'price']
// console.log(values);
// // ['Spacious apartment in the city center', 4, 2153]

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }


// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = [];

// for (const key of keys) {
// values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values)

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень. Використовуй методи Object.keys() і Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);


// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат.

// function countTotalSalary(salaries){
//   let totalSalary = 0;
//   const salaryValues = Object.values(salaries);
//   for (let i = 0; i < salaryValues.length; i++){
//     totalSalary += salaryValues[i];
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// // повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// // повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// // повертає 400

// Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.
// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];


// const hexColors = [];
// const rgbColors = [];

// for (key of colors) {
//   hexColors.push(key.hex);
//   rgbColors.push(key.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		// console.log(book.title)
//     // console.log(book.rating)
//     // console.log(book.author)
// 	}
// }

// Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
// 	if(product.name === productName) {
//     return product.price;
//    }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// // 1300
// console.log(getProductPrice("Grip"));
// // 1200

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
// 	titles.push(book.title)
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const propValues = [];

// for (const product of products) {
// 	if(propName in product) {
//     propValues.push(product[propName]);
//    }
//   }
//   return propValues;
// }

// console.log(getAllPropValues("quantity"));
// // [4, 3, 7, 9]
// console.log(getAllPropValues("price"));
// // [1300, 2700, 400, 1200]

// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
      
//       return product.price * product.quantity;
//     }
//   }
 
//   return `Product ${productName} not found!`;

// Variant 2
// let totalPrice = 0;
// let productFound = false;

// for (const product of products){
//   if (product.name === productName) {
//     totalPrice += product.price * product.quantity;
//     productFound = true;
//   }
//   }

//   if (!productFound){
//     return `Product ${productName} not found!`;
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice("Blaster"));
// // "Product Blaster not found!"
// console.log(calculateTotalPrice("Radar"));
// // 5200
// console.log(calculateTotalPrice("Droid"));
// // 2800

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     return "Returning all books";
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
// 		return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// console.log(bookShelf.getBooks());
// // поверне "Returning all books"
// console.log(bookShelf.addBook("New book 1"));
// // поверне "Adding book New book 1"
// console.log(bookShelf.addBook("New book 2"));
// // поверне "Adding book New book 2"



// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.

// Оголоси об'єкт atTheOldToad з наступними властивостями:

// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName

// const atTheOldToad = {
//   potions: [
  
//   ],

//  getPotions() {
//     return "List of all available potions";
//   },
 
//   addPotion(potionName) {
// 		return `Adding ${potionName}`;
//   },

// };

// console.log(atTheOldToad.getPotions());
// // "List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility"));
// // "Adding Invisibility"

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]


// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає рядок "List of all available potions"
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   }
// }

// console.log(atTheOldToad.getPotions());
// // повертає поточне значення властивості potions

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// bookShelf.addBook("New Start");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

// Об'єкт atTheOldToad має наступні властивості:
// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.


// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotions(potionName) {
//     this.potions.push(potionName);
//   },
// };

// console.log(atTheOldToad.getPotions());
// //  повертає поточне значення властивості potions

// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 }
// 	],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//     return this.books;
//   }
// };

// console.log(bookShelf.addBook({ title: "Dream Guardian", rating: 9 }));

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// console.log(bookShelf.getAvarageRating()); // 7

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },],
//   getPotions() {
//     return this.potions;
//   },

//   addPotions(newPotion) {
//     this.potions.push(newPotion);
//   },

//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice +=potion.price;
//     }
//     return totalPrice;
//   },
//   };

// // console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotions({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.getPotions());


// function multiply() {
// 	console.log(arguments)
// }

// multiply(1, 2); // псевдомасив [1, 2]
// multiply(1, 2, 3); // псевдомасив [1, 2, 3]
// multiply(1, 2, 3, 4); // псевдомасив [1, 2, 3, 4]

// Використовуючи синтаксис залишкових параметрів, доповни код функції add() так, щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.

// function add(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++){
//     sum += args[i];
//   }
//   return sum;
// }



// console.log(add(15, 27));
// // повертає 42

// function addOverNum(value, ...rest) {
//   let totalSum = 0;
  
//   for (let i = 0; i < rest.length; i++) {
//     if (rest[i] > value) {
//   totalSum += rest[i];
//   }
// }
// return totalSum;
// }

// console.log(addOverNum(50, 15, 27));
// // повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// //  повертає 71

// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3]
// multiply(1, 2, 3, 4); // 1 2 [3, 4]

// const temps = [14, -4, 25, 8, 11];

// console.log(...temps); // 14 -4 25 8 11  набір окремих чисел 

// // ✅ Передамо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// console.log(apartment.tags); // ["historical prose", "adventure"]
// console.log(apartment["tags"]); // ["historical prose", "adventure"]

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }
