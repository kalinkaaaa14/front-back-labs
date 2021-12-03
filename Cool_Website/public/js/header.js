var txt = {
    en: {
        'header0':'Home',
        'header1':'Trainings',
        'header2': 'About us',
    },
    ua: {
        'header0':'Головна',
        'header1':'Тренінги',
        'header2': 'Про нас',
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

// $(document).ready(function () {
//     let lang = localStorage.getItem('lang');
//  if(lang==='en'){
//      document.getElementById('en-header').style.display='flex';
//      document.getElementById('ua-header').style.display='none';
//  }else{
//      document.getElementById('en-header').style.display='none';
//      document.getElementById('ua-header').style.display='flex';
//  }
// });
