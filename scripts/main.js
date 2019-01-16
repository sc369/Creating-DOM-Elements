const h1 = (...props) => {
    return `<h1 class="${props[1]}">${props[0]}</h1>`
}
const section = (...props) => {
    return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
    }

const aside = (...props) => {
    return `<aside class="${props[1]}">${props[0]}</aside>`
}

const student = (...props) => `
    <div class="student">
        ${h1(props[0], props[3])}
        ${section(props[1], "section--padded")}
        ${aside(props[2], "pushRight")}
    </div>
`
let passFail = ""

const createStudentHTML = () => {
const studentHTMLRepresentation = student(eachOne.name,eachOne.class,eachOne.info,passFail)
document.querySelector("#container").innerHTML += studentHTMLRepresentation
}

for (eachOne of students) {
      if (eachOne.score >= 60) {
        passFail = "passing"
        createStudentHTML()
        

    } else {
        passFail = "failing"
        createStudentHTML()
    }
}
