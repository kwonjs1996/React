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
## React 강의
- 리엑트가 시작 될 때 index.js 자바스크립트 파일을 가장 먼저 불러온다.
- 리액트에서 컴포넌트는 자바스크립트 함수이다.
- 컴포넌트 = HTML코드를 리턴하는 함수이다.
- 리액트는 하나의 매개변수를 모든 컴포넌트에서 쓸 수 있게 한다.
- 컴포넌트를 합친다는 것은 컴포지션을 이용하는 것이다.
- 컴포지션에서 중요한 것은 props.children
- props.children = wrapper component를 만들 수 있는 특별한 컴포넌트다.
- prop은 컴포넌트 A에서B로 데이터를 옮기는 방법이다.
- 따라서 데이터를 옮기기만 하는 컴포넌트가 있어도 상관 없다.
- 컴포넌트는 작게 유지할 수록 좋다 아마도 유지보수에 있어서 이점?
- React는 한번 렌더링 되면 다시 렌더링 하지 않는다. = 단일페이지?
-컴포넌스 인스턴스 기반 단위.
-한 페이지에 하나 이상의 컴포넌트를 생성할 때에도 개별 상태를 가지게 된다.
--> state = 컴포넌트 인스턴스 기반 단위로 나누어져 있다.
react가 최초로 실행되었을 때 = git에 add를 해 놓은 상태?
state를 쓰고 해당 컴포넌트에 이벤트를 발생 시키면 add되어있던 상태를 push 해준다? 라고 이해를 한번 해보자.
```
```
```js
state를 사용했을 때
const[title(값자체),setTitle(업데이트 함수)] = useState(props.title);
const clickHandler = () =>{
	setTitle('updated');
	console.log(title);
};
````

```js
// component의 종류
// dumb 데이터 출력만을 목적으로 내용 없이 작성된 component
// 많은 부분을 차지하고있다.
// 상태저장 component