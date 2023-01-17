const person = {
  name: 'Taehyeon',
  age: 29,
  greet: () => {
    //this는 이제 이 객체가 아닌 전역 범위, 전역 노드 런타임 글로벌스코프 범위를 참조한다.
    //이는 화살표함수때문이고, undefined를 해결하려면 function 선언하듯이 선언하면되고,
    //혹은 객체 내에서 약간 다른 접근법 또는 구문을 사용해야 한다.
    //  greet() { 이런식으로 사용하면된다. 키이름 다음 괄호에 있는 콜론을 생략, 함수 키워드나 그런것 없이 함수 본문을 추가한다.
    console.log('Hi, I am ' + this.name);
  }
}

const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
  console.log(hobby);
}


person.greet()
//맵은 새로운 배열을 반환해준다.
//맵은 항상 함수의 형태이며 어떻게 배열 또는 배열의 원소를 편집할지 정의해야한다.
//해당 함수는 배열의 모든 원소에 하나씩 적용되고
// 업데이트된 버전의 원소가 새로운 배열에 반환된다.
//반환 선언이 있는 화살표 함수에는 하나의 구문만이 있음.
// console.log(hobbies.map(hobby => {
//   return 'Hobby:' + hobby
// }));
// // 기존 배열이 변경되지 않았다.
// console.log(hobbies)
// 참조타입의 경우 배열이 저장된 메모리 위치를 가리키는 주소만을 저장하기에
// 새로운 원소를 추가했다고 주소를 나타내는 포인터가 바뀌지 않았기 때문
//따라서 상수로 저장된 값은 포인터로 주소만 나타내고 이 값은 바뀌지 않았다.
//가리키는 대상은 바뀌었지만, 여기선 상관없다
//상수에 저장된 대상을 편집하는것이 아닌
//상수가 가리키는 대상을 편집하기 때문에 이게 가능한것.
hobbies.push('Programming');
console.log(hobbies);