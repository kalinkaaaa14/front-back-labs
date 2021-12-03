var txt = {
    en: {
        'home-header':'Enjoy the services of our training center!',
        'home-text':'Who doesn\'t want to enjoy - your bad! We\'ll find you wherever you are\n and we\'ll prove to you and your potential employers that you know nothing!',
        // 'about-text1': " Most of our visitors do not need our trainings, because they can't be taught.However, they are solvent, and it is the main reason why these trainings are held.",
        // 'about-text2':"Our training center is the best in the world!",
        // 'about-text3':"Fill out the form, and our manager will contact you. Dare you not to fill it out or fill it out in a wrong way.",
        // 'form-title': "Application Form",
        // "form-input1":"First name",
        // "form-input2":"Surname",
        // "form-input3":"Email",
        // "form-input4":"Phone",
        // "form-input5":"Text",
        // "form-button": "Apply"
    },
    ua: {
        'home-header':'Насолоджуйтесь послугами нашого тренігового центру!',
        'home-text':'Хто не хоче насолоджуватися - Вам же гірше! Ми Вас знайдемо і доведемо і Вам особисто,\n  і Вашим потенційним роботодавцям, що Ви нічого не знаєте.',
        // 'about-text1': "Більшість відвідувачів наших тренінгів їх не потребують, оскільки не піддаютсья навчанню. Але вони платоспроможні, і в цьому основан суть тренінгів.",
        // 'about-text2':"Наш тренінговий центр є найкрутішим у світі!",
        // 'about-text3':"Заповніть заявку, і з Вами зв'яжеться наш менеджер. Тільки спробуйте не заповнити або заповнити неправильно.",
        // 'form-title': "ФОРМА ЗАЯВКИ",
        // "form-input1":"Ваше ім'я",
        // "form-input2":"Ваше прізвище",
        // "form-input3":"Ваш e-mail",
        // "form-input4":"Телефон (формат +38(xxx)xxxxxxx)",
        // "form-input5":"Текст",
        // "form-button": "Подати заявку"
    }
};
document.getElementById('e-lang-en').addEventListener('click', setLang.bind(null,'en'));
document.getElementById('e-lang-ua').addEventListener('click', setLang.bind(null,'ua'));

function setLang(lang){
    var p;
    if( !txt.hasOwnProperty(lang)) return;
    if( window.hasOwnProperty('localStorage'))
        window.localStorage.setItem('lang', lang);
    for(p in txt[lang]) {
        console.log("id " + p);
        document.getElementById(p).innerText = txt[lang][p];
    }
}
//

var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
setLang(lang);
