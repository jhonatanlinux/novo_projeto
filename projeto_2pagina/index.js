const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")

// ABERTURA DO MENU
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

//FECHAR MENU
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

//TEMA DARK
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// ORDENS NA TABELA
Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = '';

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})