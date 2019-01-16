const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

const passingStudent = (name, sectionContent, info) => `
    <div class="student">
        ${h1(name, "passing")}
        ${section(sectionContent, "section--padded")}
        ${aside(info, "pushRight")}
    </div>
`
const failingStudent = (name, sectionContent, info) => `
    <div class="student">
        ${h1(name, "failing")}
        ${section(sectionContent, "section--padded")}
        ${aside(info, "pushRight")}
    </div>
`
students.forEach(currentStudent => {

    for (eachOne of students) {
        studentComponent = ""
        if (eachOne.score >= 60) {
            studentComponent = "passingStudent"
        } else {
            studentComponent = "failingStudent"
        }
    }
    const studentHTMLRepresentation = studentComponent(
        currentStudent.name,
        currentStudent.class,
        currentStudent.info)
    document.querySelector("#container").innerHTML += studentHTMLRepresentation
})
