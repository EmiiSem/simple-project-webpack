import { el, setChildren } from "redom"
import './main.scss'
import logo from './img/logo.svg'
import html5 from './img/html5.png'
import css3 from './img/css3.png'
import js from './img/js.png'
import ts from './img/typescript.png'
import php from './img/php.png'
import sql from './img/mysql.png'
import postgress from './img/postgress.png'

const header = el('header', { class: 'page-header' }, [
    el('div', { class: 'page-header-text' }, 'Добро пожаловать на сайт'),
    el('img', { class: 'page-header-logo', src: logo }),
])

const main = el('section', { class: 'page-section' }, { class: 'container' }, [
    el('h1', { class: 'page-section-title' }, 'Я веб-разработчик FullStack'),
    el('p', { class: 'page-section-description' }, 'Я занимаюсь разработкой сайтов с 2023 года. Но профессиональную деятельность начал только с 1 марта 2024 года, когда устроился работать в маленькую IT-компанию.'),
    el('div', { class: 'page-section-info' }, [
        el('h2', { class: 'page-section-info-title' }, 'Мой стек технологий на котором я пишу:'),
        el('p', { class: 'page-section-info-title' }, 'Frontend'),
        el('div', { class: 'page-section-info-carts' }, [
            el('div', { class: 'page-section-info-cart' }, [
                el('img', { class: 'page-section-info-cart-image', src: html5}),
                el('p', { class: 'page-section-info-cart-text' }, 'HTML5')
            ]),
            el('div', { class: 'page-section-info-cart' }, [
                el('img', { class: 'page-section-info-cart-image', src: css3}),
                el('p', { class: 'page-section-info-cart-text' }, 'CSS')
            ]),
            el('div', { class: 'page-section-info-cart' }, [
                el('img', { class: 'page-section-info-cart-image', src: js}),
                el('p', { class: 'page-section-info-cart-text' }, 'JavaScript')
            ]),
            el('div', { class: 'page-section-info-cart' }, [
                el('img', { class: 'page-section-info-cart-image', src: ts}),
                el('p', { class: 'page-section-info-cart-text' }, 'TypeScript')
            ])
        ]),
        el('p', { class: 'page-section-info-title' }, 'Backend'),
        el('div', { class: 'page-section-info-carts' }, [
            el('div', { class: 'page-section-info-cart' }, [
                el('img', { class: 'page-section-info-cart-image', src: php}),
                el('p', { class: 'page-section-info-cart-text' }, 'PHP')
            ]),
            el('div', { class: 'page-section-info-cart' }, [
                el('img', { class: 'page-section-info-cart-image', src: sql}),
                el('p', { class: 'page-section-info-cart-text' }, 'My SQL')
            ]),
            el('div', { class: 'page-section-info-cart' }, [
                el('img', { class: 'page-section-info-cart-image', src: postgress}),
                el('p', { class: 'page-section-info-cart-text' }, 'PostgreSQL')
            ]),
        ]),
    ])
])

setChildren(window.document.body, [header, main])