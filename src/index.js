import { el, setChildren } from "redom"

const header = el('header', { class: 'page-header' }, [
    el('div', { class: 'page-header-text' }, 'Добро пожаловать')
])

setChildren(window.document.body, header)