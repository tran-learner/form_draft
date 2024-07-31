var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var tabs = $$('.tab-item')
var contents = $$('.tab_pane')
console.log(tabs)
console.log(contents)

tabs.forEach((tab, index)=> {
    tab.onclick = function (event){
        $('.tabs_bar').querySelector('.active').classList.remove('active')
        $('.tabs_content').querySelector('.active').classList.remove('active')

        tab.classList.add('active')
        contents[index].classList.add('active')

    }
});