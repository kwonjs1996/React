```js
class human {
	constructor(){

	}
}

class Person{
	constructor(){
		this.name = 'max';
	}

	printMyName(){
		console.log(this.name);
	}
}

const person = new Person();
person.printMyName();
///
///전개연산자 ...

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);
[1, 2, 3, 4]

const newNumbers = [numbers, 4];
console.log(newNumbers)
[[1, 2, 3], 4]
///     ... = 매개변수를 배열로 통합한다.


const person = {
	name: 'max'
};
const secondPerson = person
console.log(secondPerson)
/// 객체와 배열은 참조 타입이다.
/// 재할당 한다면 값이 아니라 포인터를 복사하는 것이다.

const person = {
	name: 'max'
};
const secondPerson = {
	...person
}
console.log(secondPerson)
/// 제대로 복사하고 싶다면 새 객체를 만들고 속성만 복사해야한다.

```