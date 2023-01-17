const person = {
  name: 'Taehyeon',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

//이렇게 써도 상관없음, 항상 personData를 얻을 수 있는데
//실제로 제3자 패키지에서 호출된 함수
//이제 받는 데이터를 변경할 수 없음.
//이 함수는 오직 name에만 관심이 있음.
//이때 객체구조분해를 이용해 들어오는 객체의 속성 중 관심 있는것을 명시함.

// const printName = (personData) => {
//   console.log(personData.name);
// }
// printName(person)

//해당 속성이 객체에서 추출됨. 다른 속성은 이 함수에 대해서는 무시되며
//이 속성은 name이라는 변수로 저장되어 사용할 수 있고
//이를 다시 실행하면 결과는 똑같다.
//구조 분해 구문을 사용하여 age, greet함수도 가능하다. 들어오는 객체에서 무엇을 필요로 하는지
//어떤 값을 로컬 변수에 저장해서 이 함수에 사용할지 확실히 명시함으로써 이해하기 쉬운 코드를 작성하는데 도움이 되는 구문이다.
//구조 분해는 함수 안에서만 사용할 수 있는것이 아니라 밖에서도 사용이 가능하다.
const printName = ( {name} ) => {
  console.log(name);
}
printName(person)


const {name, age} = person;
console.log(name, age);
//출력은 console.log에서 오고 출력값은 객체 구조 분해를 통해 추출된 값이다.
//객체 구조 분해만 있는건 아니고
// 배열 구조 분해도 있다.


const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);


//객체나 배열 내의 원소를 액세스 하거나, 이름이나 위치에 따라 무시할 수 있도록 해줌.
//이는 삭제와는 달라서 삭제되는것은 아니고 우리가 작성하는 함수 또는 대상에 사용되지 않을 뿐
// 이렇게해서 특정 코드에 필요없는 데이터를 무시할 수 있음.