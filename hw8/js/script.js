let title=document.createElement('title');
title.innerHTML='Call To Action';
document.head.appendChild(title);
let UTF8=document.createElement('meta');
UTF8.setAttribute('charset','UTF8');
document.head.appendChild(UTF8);
document.querySelector('html').getAttribute('lang','en');
let h1=document.createElement('h1');
h1.classList.add('header');
h1.innerHTML=`Choose Your Option`;
document.body.appendChild(h1);
let p1=document.createElement('p');
p1.innerHTML=`But I must explain to you how all this mistaken idea of denouncing `;
p1.classList.add('description');
document.body.appendChild(p1);
let div = document.createElement('div');
div.classList.add('headinfo');
document.body.appendChild(div);
div.appendChild(h1);
div.appendChild(p1);
let p2=document.createElement('p');
p2.innerHTML=`FREELANCER`;
p2.classList.add('information');
document.body.appendChild(p2);
let h2=document.createElement('h2');
h2.classList.add('titleinfo');
h2.innerHTML=`Initially <br>
designed to `;
document.body.appendChild(h2);
let p3=document.createElement('p');
p3.innerHTML=`But I must explain to you how all this <br>
mistaken idea of denouncing `;
p3.classList.add('description');
document.body.appendChild(p3);
let button=document.createElement('button');
button.classList.add('btn');
button.innerHTML=`Start here`;
document.body.appendChild(button);
let div2=document.createElement('div');
div2.classList.add('blockinfo');
document.body.appendChild(div2);
div2.appendChild(p2);
div2.appendChild(h2);
div2.appendChild(p3);
div2.appendChild(button);
let p4=document.createElement('p');
p4.innerHTML=`STUDIO`;
p4.classList.add('information');
document.body.appendChild(p4);
let h21=document.createElement('h2');
h21.classList.add('titleinfo');
h21.innerHTML=`Initially <br> designed to `;
document.body.appendChild(h21);
let p5 = document.createElement('p');
p5.innerHTML=`But I must explain to you how all <br> this mistaken idea of denouncing `;
p5.classList.add('description');
document.body.appendChild(p5);
let button1=document.createElement('button');
button1.classList.add('btn');
button1.innerHTML=`Start here`;
document.body.appendChild(button1);
let div3=document.createElement('div');
div3.classList.add('blockinfo1');
document.body.appendChild(div3);
div3.appendChild(p4);
div3.appendChild(h21);
div3.appendChild(p5);
div3.appendChild(button1);
let div4=document.createElement('div');
div4.classList.add('blockinfo2');
document.body.appendChild(div4);
div4.appendChild(div2);
div4.appendChild(div3);
document.body.classList.add('container');
let style=document.createElement('style');
style.innerHTML=`
*{
    padding:0;
    margin:0;
}
.container{
    max-width:1280px;
    width:80%;
    margin: 0 auto;
    height:900px;
}
body{
    font-family:'Arvo',serif;
}
.headinfo{
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    height:300px;
}
.header{
    font-size:44px;
    line-height:48px;
    font-weight:normal;
}
.description{
    font-size:14px;
    line-height:26px;
    margin-top:35px;
    color:#9FA3A7;
}
.blockinfo2{
    display:flex;
    border:1px solid #9FA3A7;
    border-radius:5px;
    height:500px;
    width:800px;
    margin:0 auto;
}
.blockinfo,
.blockinfo1{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
}
.blockinfo1{
    background-color:#8F75BE;
}
.information{
    font-weight:bold;
    font-size:12px;
    line-height:15px;
    text-transform:uppercase;
    margin-bottom:20px;
    letter-spacing:2.4px;
}
.blockinfo.information{
    color:#9FA3A7;
}
.blockinfo1.information{
    color:#FFC80A;
}
.titleinfo{
    font-size:36px;
    line-height:46px;
    font-style:normal;
    margin-bottom:30px;
    text-align:center;
}
.blockinfo1.titleinfo,
.blockinfo1.description{
    color:#fff;
}
.blockinfo2.description{
    text-align:center;
}
.btn{
    font-family:'Arvo',serif;
    margin-top:60px;
    width:176px;
    font-style:normal;
    font-weight:bold;
    font-size:12px;
    line-height:15px;
    text-transform:uppercase;
    background-color:white;
    border:4px solid #FFC80A;
    padding:25px 0;
    border-radius:55px;
    letter-spacing:2.4px;
}
.blockinfo1.btn{
    color:white;
    background-color:#8F75BE;
}
.btn:hover{
    opacity:0.5;
    cursor:pointer;
}
`;
document.head.appendChild(style);