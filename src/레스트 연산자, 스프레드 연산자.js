const person = {
  name: 'Taehyeon',
  age: 29,
  greet: () => {
    console.log('Hi, I am ' + this.name);
  }
}
//person의 사본이 나타남
//객체에 모든 원소를 추출해 새로운 객체에 추가했기 때문.
const copiedPerson = {...person};
  console.log(copiedPerson);


const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
  console.log(hobby);
}
//불변성
//기존의 값을 절대 편집하지 않고 사본에 변경된 값을 더한 배열로 대체하는 방식
//복사해서 편집함으로 오류를 피할 수 있고 기존 객체를 편집하지 않음으로써
//코드를 읽어올 수 없게 되는 일을 방지 할 수 있다
hobbies.push('Programming');
//인수가 없으면 전체 배열을 복사함.
const copiedArray = hobbies.slice();
const copiedArray2 = [hobbies];
const copiedArray3 = [...hobbies]
console.log(copiedArray);
//그러나 이건 외부 배열에 하나의 원소만이 있고, 그 원소가 배열임.
//사본이 아니라 첫 원소가 기존의 배열인 새로운 배열일 뿐임.
//동일한 객체를 의미.
//게다가 중첩배열로 원하던게 아님. copiedArray2 그렇다면 어떻게해야나ㅏ?
console.log(copiedArray2);
//이처럼 객체앞에 ...을 찍어
// + - 의 뜻으로 연산자 뒤에 오는 배열이나 객체를 받아서 원소나 속성을 끄집어냄.
//배열의 원소나 객체의 속성을 스프레드 연산자 주위에 있는 대상에 추가함.
//스프레드 연산자로 원소를 끄집어내 새로운 배열에 하나씩 추가했기 때문에 결과는 copiedArray와 같다.
//기존의 배열이나 객체에 이런일을 많이 하게 될것이다.

console.log(copiedArray3);



//레스트 연산자
//이렇게 쓰면 모든 인수를 가져와서
//하나의 배열로 나타냄
//args는 배열이되며 이를 반환할수 있음.
const toArray = (...args) => {
  return args;
}
console.log(toArray(1, 2, 3,4,5,6,6)) //[1, 2, 3]

//레스트 연산자는 스프레드 연산자처럼 ... 으로 되어있지만 사용하는 위치에 따라 정의가 달라짐.
//배열이나 객체에서 원소나 속성을 추출하는 데 사용된다 ? 스프레드 연산자
//인수 목록이나 함수에서 여러 인수를 하나의 배열로 묶는데 사용한다면 ? 레스트 연산자