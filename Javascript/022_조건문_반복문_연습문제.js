// 1부터 100까지 더하는 예제
// for(초깃값;조건;증감값)
// 1번 풀이
let s = 0
for (let i = 0; i < 101; i++) {
    s += i
}

// 2번 풀이
let s = 0
let i = 1
while (i < 101) {
    s += i
    ++i
}

new Array(10) // 10칸짜리 빈 array
new Array(10).fill(1) // 1로 채우다
new Array(10).fill(1).map((_, i) => i)
new Array(10).fill(1).map((_, i) => i+1)

// 강사님은 javascript도 python처럼 쓰기위해서
// range 구현하고, zip 구현하고, map 구현해놓고 사용합니다.
// 위처럼 개발하는것을 권하지는 않습니다.
// 개인 개발 속도는 빨라지지만 협업할 때 문제가 생깁니다.
// 회사 컨벤션으로 맞춰놓으면 개발속도는 높아집니다.

// 3번 풀이
let range = new Array(100).fill(1).map((_, i) => i+1)
let s = 0
for (const i of range) {
    s += i
}

// 4번 풀이
let range = new Array(100).fill(1).map((_, i) => i+1).reduce((a, c) => a + c, 0)

// 5번 풀이
let range = new Array(100).fill(1)
let s = 0
for (const index in range) {
    // index 가 문자열이라서 변환해줍니다.
    // s += parseInt(index) + 1
    s += +index + 1
}


// 1부터 100까지 짝수만 더하는 에제
// 100번 반복
let s = 0
for (let i = 0; i < 101; ++i) {
    if (i % 2 === 0) {
        s += i
    }
}

// 위보다는 효율적인 코드
// 50번 반복
let s = 0
for (let i = 0; i < 101; i += 2) {
    s += i
}

let s = 0
let i = 0
while (i < 101) {
    if (i % 2 == 0) {
        s += i
    }
    ++i
}


// [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]에서 5보다 작은 수만 다 더해주세요.
let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]
let s = 0
for (const i of data) {
    if (i < 5) {
        s += i
    }
}

let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]
let s = 0
let i = 0
while (i < data.length) {
    if (data[i] < 5) {
        s += data[i]
    }
    i++
}

data.filter(v => v < 5) // [4, 3, 2, 4, 4, 2, 1]
data.filter(v => v < 5).reduce((a, c) => a + c, 0)

data.map(v => v < 5) // [false, false, true...]
data.map(v => < 5 ? v : 0) // [0, 0, 4, 0 ...]
data.map(v => < 5 ? v : 0).reduce((a, c) => a + c, 0)

data.map(v => {
    if (v > 5) {
        return v
    }
    return 0
})

// 이렇게 풀이하는 것은 매우 어려운 방법입니다.
data.reduce((a, c) => c < 5 ? a + c: a, 0)

// forEach
let s = 0
data.forEach(v => v < 5 && (s += v))


// [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1'] 모든 숫자를 다 더해주세요.

let data = [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']
let s = 0
for (const i of data) {
    if (typeof(i) === 'number') {
        s += i
    }
}

function typeCheck(value) {
    return Object.prototype.toString.call(value).slice(8, -1)
}

let data = [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']
let s = 0
for (const i of data) {
    if (typeCheck(i) === 'Number') {
        s += i
    }
}

let data = [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']
let s = 0
let i = 0
while (i < data.length) {
    if (typeof(data[i]) === 'number') {
        s += data[i]
    }
    i++
}

data.filter(v => typeof(v) === 'number').reduce((a, c) => a + c, 0)

data.reduce((a, c) => (c === parseFloat(c) ? a + c : a), 0)

// 난이도가 있습니다.
// number 인 것만 더하는 것
data.reduce((a, c) => typeof(c) === 'number'? a + c: a, 0)

// number와 string 모두 더하는 것이었다면?
data.reduce((a, c) => a + parseInt(c), 0)
// 엔터를 이렇게 칠 수 있기 때문에 가독성 차원에서 이점을 볼 수 있습니다.
data
    .map(v => parseInt(v))
    .reduce((a, c) => a + c, 0)


// 모음 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120849

new Array('hello world') // ['hello world']

'hello world'.split('')
Array.from('hello world') // 위와 동일

// v in 'aeiou' 이렇게 쓰고 싶을 때에는
// includes 를 사용합니다.

Array.from('hello world').filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v))

Array.from('hello world').filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v)).join('')

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, "")
}

function solution(my_string) {
    result = ''
    for (const s of my_string) {
        if (['a', 'e', 'i', 'o', 'u'].includes(s)) {
            continue
        }
        result += s
    }
    return result
}


// 용돈은 매년 2배씩 오릅니다.
// 올해 받은 용돈은 10000원 입니다.
// 나이는 8살 입니다.
// 30만원 이상이 되면 용돈이 더이상 오르지 않습니다.
// for 와 continue 문법을 써서 8상부터 35살까지 받은 용돈의 총합을 구하세요.
money = 10000
sum = 0
for (let age = 8; age < 36; age++) {
    if (money <= 300000) {
       sum += money
       money = money * 2 
    }
    else {
        sum += money
    }
}


// https://school.programmers.co.kr/learn/courses/30/lessons/120850
// isNaN 을 사용하면 숫자는 false 가 나옵니다.
// 문자는 true 가 나옵니다.

function solution(my_string) {
    my_string
        .split("")
        .filter(v => !isNaN(v))
        .map(v => v * 1)
        .sort((a, b) => a - b);
}