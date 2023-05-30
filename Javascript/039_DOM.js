const btnRed = document.querySelector('button')
const title = document.querySelector('#one')

btnRed.addEventListener('click', () => {
    title.classList.toggle('red')
})

const sectionTitle = document.createElement('h2')
sectionTitle.innerText = 'hello'

document.querySelector('body').appendChild(sectionTitle)

document.createElement(target)

Element.querySelector()

const body = document.querySelector("body");
const myimg = document.createElement('img')
// const idAttr = target.getAttribute('id');
myimg.setAttribute("src", "https://img.wendybook.com/image_detail/img159/159599_01.jpg");
body.append(myimg)

const btn = document.createElement('button')
btn.innerText = '눌럿!'
const body = document.querySelector("body")
body.append(btn)

btn.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.currenTarget);
    console.log(this)
});