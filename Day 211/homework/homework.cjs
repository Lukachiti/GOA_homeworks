//modularization არის პროგრამის მოდულებად დაყოფა
import { add, subtract, multiply, divide } from './utils/math.js';
import { capitalizeFirstLetter } from './utils/formatter.js';
import { database } from './config/database.js';
import { sum, randomNumber, isEven } from './utils/helpers.js';
import { logmessage } from './utils/logger.js';
import { userservice } from './services/userservice.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15
console.log(divide(5, 3)); // 1.666...

console.log(capitalizeFirstLetter('helloWorld')); // Hello
console.log(database); // idk

console.log(sum([1, 2, 3, 4, 5])); // 15
console.log(randomNumber());
console.log(isEven(4)); // true
logmessage('This is a log message.'); // This is a log message.
console.log(userservice()); // ["anna", "bob", "charlie"]



//- რა არის მოდულიზაცია?
// - რატომ არის კარგი პრაქტიკა კოდის სხვადასხვა ფაილებად დაყოფა?
// - რისთვის გამოიყენება controllers?
// - რისთვის გამოიყენება models?
// - რისთვის გამოიყენება utils?
// - რისთვის გამოიყენება middlewares?
// - რისთვის გამოიყენება config?
// - რა პრობლემები შეიძლება შეიქმნას, თუ მთელი პროექტი მხოლოდ app.js ფაილში იქნება?
// - რა განსხვავებაა require()/import-სა და module.exports/export-ს შორის?
// - სად შეინახავდი Database Connection-ს, Helper Function-ს, Authentication Middleware-ს და User Controller-ს?


//- მოდულიზაცია არის პროგრამის დაყოფა სხვადასხვა ფაილებად, რათა კოდი იყოს უფრო ორგანიზებული
// - კარგი პრაქტიკაა კოდის დაყოფა სხვადასხვა ფაილებად, რადგან ეს ზრდის კოდის წაკითხვის და შენახვის შესაძლებლობას, ასევე ხელს უწყობს კოდის ხელმისაწვდომობას და ხელმისაწვდომობის გაზრდას
// - Controllers გამოიყენება HTTP მოთხოვნების მართვისთვის და პასუხების გაგზავნისთვის
// - Models გამოიყენება მონაცემთა სტრუქტურების განსაზღვრისთვის და მონაცემთა ბაზასთან ურთიერთობისთვის
// - Utils გამოიყენება საერთო ფუნქციების შესანახად, რომლებიც შეიძლება გამოყენებულ იქნას სხვადასხვა ადგილებში
// - Middlewares გამოიყენება HTTP მოთხოვნების დამუშავების პროცესში, რათა დაამატოს დამატებითი ფუნქციონალობა ან შეცვალოს მოთხოვნის ან პასუხის მონაცემები
// - Config გამოიყენება კონფიგურაციის პარამეტრების შესანახად, როგორიცაა მონაცემთა ბაზის კავშირი, სერვერის პარამეტრები და ა.შ.
// - თუ მთელი პროექტი მხოლოდ app.js ფაილში იქნება, შეიძლება შეიქმნას კოდის სირთულე, კოდის წაკითხვის სირთულე და კოდის ხელმისაწვდომობის შემცირება
// - require()/import გამოიყენება სხვა ფაილებიდან კოდის ჩასატვირთად, ხოლო module.exports/export გამოიყენება კოდის გასატანად სხვა ფაილებიდან
// - Database Connection-ს შეინახავდი config-ში, Helper Function-ს utils-ში, Authentication Middleware-ს middlewares-ში და User Controller-ს controllers-ში