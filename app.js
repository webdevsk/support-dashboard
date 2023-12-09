const template = document.querySelector('#support-card-template')

// Filling up with fake data
const tabs = document.querySelectorAll('[id$="tab"]')
tabs.forEach(tab => {
    const [max, min] = [20, 2]
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

    for (let i = 0; i < randomNumber; i++) {
        tab.querySelector('.task-counter').textContent = randomNumber.toString()
        const elm = template.content.cloneNode(true).firstElementChild
        elm.dataset.supportId = (Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111).toString()

        tab.querySelector('.list').appendChild(elm)
    }
})