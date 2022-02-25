const validation = () => {
    const square = document.querySelector(".calc-square")
    const count = document.querySelector(".calc-count")
    const day = document.querySelector(".calc-day")
    const calc = [square, count, day]


    const formNames = document.querySelectorAll(".form-name")
    const formPhones = document.querySelectorAll(".form-phone")
    const formEmails = document.querySelectorAll(".form-email")
    const topForm = document.querySelector(".top-form")
    const topMess = document.querySelector(".mess")

    formNames.forEach((formName) => {
        const arrayNameForm = []
        arrayNameForm.push(formName, topForm)
        arrayNameForm.forEach((form) => {
            form.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]/g, "")
            })
        })
    })

    formEmails.forEach((formEmail) => {
        formEmail.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z\-\.\!\~\*\'\@\_\d]/g, "")
        })
    })
    formPhones.forEach((formPhone) => {
        formPhone.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-]/g, "")
        })
    })
    topMess.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]/g, "")
    })
    calc.forEach((calcItem) => {
        calcItem.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/\D+/g, "")
            }
        )
    })
}
export default validation