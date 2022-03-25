const about = document.getElementsByClassName('about')[0]
const rules = document.getElementsByClassName('rules')[0]
const stanlist = document.getElementsByClassName('stanlist')[0]

const show =(element)=>{
    about.classList.remove("display");
    rules.classList.remove("display");
    stanlist.classList.remove("display");
    element.classList.add("display");
};