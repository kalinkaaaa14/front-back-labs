// var txt = {
//     en: {
//         // 'form-title': "Application Form",
//         // "form-input1":"First name",
//         // "form-input2":"Surname",
//         // "form-input3":"Email",
//         // "form-input4":"Phone",
//         // "form-input5":"Text",
//         // "form-button": "Apply"
//     },
//     ua: {
//         // 'home-header':'Насолоджуйтесь послугами нашого тренігового центру!',
//         // 'home-text':'Хто не хоче насолоджуватися - Вам же гірше! Ми Вас знайдемо і доведемо і Вам особисто,\n  і Вашим потенційним роботодавцям, що Ви нічого не знаєте.',
//         // 'form-title': "ФОРМА ЗАЯВКИ",
//         // "form-input1":"Ваше ім'я",
//         // "form-input2":"Ваше прізвище",
//         // "form-input3":"Ваш e-mail",
//         // "form-input4":"Телефон (формат +38(xxx)xxxxxxx)",
//         // "form-input5":"Текст",
//         // "form-button": "Подати заявку"
//     }
// };
// document.getElementById('e-lang-en').addEventListener('click', setLang.bind(null,'en'));
// document.getElementById('e-lang-ua').addEventListener('click', setLang.bind(null,'ua'));
//
// function setLang(lang){
//     var p;
//     if( !txt.hasOwnProperty(lang)) return;
//     if( window.hasOwnProperty('localStorage'))
//         window.localStorage.setItem('lang', lang);
//     for(p in txt[lang]) {
//         document.getElementById(p).innerText = txt[lang][p];
//     }
// }
// //
// var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
// setLang(lang);
//
