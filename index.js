var data=[
    {
        image:"./img/img_0.jpg",
        title:"",
        subTitle:"Mi niña bonita",
        description:`En tus labios descubro el paraíso,
        donde olvido todo lo impreciso.
        Tus besos son un regalo divino,
        que alimenta mi alma y mi destino.
        Eres mi estrella y mi inspiración,
        mi eterna fuente de emoción.`
    },
    {
        image:"./img/img1.jpg",
        title:"",
        subTitle:"Mi Amor",
        description:`Tu risa es un torrente,
        que inunda mi corazón valiente.
        Tus abrazos son refugio,
        donde encuentro mi propio delirio.
        Eres mi musa y mi canción,
        la dueña de mi pasión.`
    },
    {
        image:"./img/img2.jpg",
        title:"",
        subTitle:"Mi ángel",
        description:`En tus ojos de lucero
        brilla el amor sincero.
        En tu sonrisa de sol,
        encuentro mi mejor farol.
        Eres mi guía y mi alegría,
        te amo cada día.`
    },
    {
        image:"./img/img3.jpg",
        title:"",
        subTitle:"Mi vida",
        description:`En cada momento a tu lado,
        siento que el tiempo ha quedado atrapado.
        Eres mi presente y mi futuro,
        mi eterno y dulce conjuro.
        Eres mi todo, mi gran amor,
        te llevaré siempre en mi corazón.`
    }
];

const introduce= document.querySelector(".introduce");
const ordinalNumber= document.querySelector(".ordinal-number");

introduce.innerHTML="";
ordinalNumber.innerHTML="";

for (let i = 0; i < data.length; i++) {
    introduce.innerHTML += `
        <div class="wrapper">
            <span>
                <h5 class="title" style="--idx:0">${data[i].title}</h5>
            </span>
            <span>
                <h1 class="sub-title" style="--idx:1">${data[i].subTitle}</h1>
            </span>
            <span>
                <p class="describe" style="--idx:2">${data[i].description}</p>
            </span>
           
        </div>
    `;

    ordinalNumber.innerHTML +=`<h2>0${i+1}</h2>`;

};

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumnbailListWrapper =document.querySelector(".thumbnail-list .wrapper");
thumnbailListWrapper.innerHTML += `
    <div class="thumbnail zoom">
        <img src="${data[0].image}" alt="">
    </div>
`;

for (let i = 1; i < data.length; i++) {
    thumnbailListWrapper.innerHTML += `
    <div class="thumbnail" style="--idx: ${i-1}">
        <img src="${data[i].image}" alt="">
    </div>
`
};

const nextBtn = document.querySelector(".navigation .next-button");
var currentIndex =0;
nextBtn.addEventListener("click", () => {
    nextBtn.disabled =true;
    var clone =thumnbailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumnbailListWrapper.appendChild(clone);
    thumnbailListWrapper.children[1].classList.add("zoom");
    setTimeout(()=>{
        thumnbailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    },1000);

    for (let i = 2; i < thumnbailListWrapper.childElementCount; i++) {
       thumnbailListWrapper.children[i].style =`--idx: ${i-2}`;
    };

    if(currentIndex <=2){
        currentIndex++;
    }else{
        currentIndex =0
    } 

    for (let i = 0; i < data.length; i++) {
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }

    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent=`0${currentIndex+1}`;

});
