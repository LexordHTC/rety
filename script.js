/* ✏️ PERSONALIZA AQUÍ */
const CARDS = [
 { head:`<b>101</b><em>razones por las que me gustas</em>`,
   groups:[
    {t:"Lo que veo en ti",i:["Tu sonrisa","Tu mirada","Tu risa","Tu voz","Tus ojos cuando te emocionas","Tus gestos","Tu forma de caminar","Tu estilo","Tus manos","Tu cabello","Cómo te ves cuando te concentras","Tu cara cuando algo te sorprende","Tus expresiones cuando te da pena","Tu manera de vestirte rarita de hippie","Tu aroma","Tu presencia, que llena que me da emoción","Cómo te ves cuando te ríes sin pensar"]},
    {t:"Tu forma de ser",i:["Tu autenticidad","Tu amabilidad","Tu ternura","Tu paciencia","Tu calma","Tu siendo penosa","Tu siendo manca","Tu sinceridad","Tu espontaneidad","Tu alegría","Tu dulzura","Tu valentía","Tu generosidad","Lo mucho que eres tú","Tu buen corazón","Cómo me tratas","Tu lealtad"]},
    {t:"Tu mente",i:["Tu inteligencia","Tu curiosidad","Tu sentido del humor","Tu forma de ver la vida","Tus ideas","Tu creatividad","Cómo explicas las cosas","Tus opiniones","Cómo hablas de lo que te gusta","Cómo resuelves los problemas","Tus ganas de aprender","Tus metas","Tus sueños","Tu forma distinta de pensar","Lo interesante que es cualquier tema contigo","Tu ingenio","Tu madurez"]},
    {t:"Cómo me haces sentir",i:["Me haces sonreír sin esfuerzo","Contigo el tiempo pasa volando","Me siento en paz a tu lado","Siento que importo","Me haces querer ser mejor","Contigo puedo ser yo","Alegras mis días grises","Me das tranquilidad","Me siento seguro contigo","Me haces reír","Contigo todo se siente fácil","Me siento en casa","Se me olvida el estrés","Me emociono cuando te veo","Me hace feliz verte feliz","Siento que tuve suerte de conocerte","Me quedo con ganas de más conversaciones"]},
    {t:"Tus pequeños detalles",i:["Cómo me escuchas","Cómo siempre me corriges","Cómo te preocupas por mi","Tus mensajes","Tus bromas","Tus ocurrencias","Cómo te ríes de tus propios chistes","Cómo dices mi nombre","Tus historias","Tus manías","Tus gustos raros","Que siempre tienes algo que decir","Tus cosas favoritas","Cómo das consejos","Tus pausas antes de reírte","Cómo me animas","Tus pequeños gestos de cariño"]},
    {t:"Y además...",i:["Pienso en ti sin querer","Lo que eres cuando nadie te ve","Todo lo que todavía no sé de ti","Me das curiosidad por conocerte más","Contigo no hay que fingir","Me gusta tu compañía","Me haces ver el lado bonito de todo","No hay nadie como tú","Llegaste en el momento justo","Me haces creer en lo bonito","Me dan ganas de cuidarte","Contigo hasta lo simple es especial","Cada día me gustas más","Me gustas por lo que aún no sé decir","Me haces sonreír sin motivo","Simplemente, porque eres tú ♥"]}
   ] },
 { head:`Me gustas<br>Por que... 💞`,
   body:`<p class="q"><strong>Me gustas.</strong>No sé en qué momento exacto pasó. No hubo un aviso ni una fecha marcada en el calendario, simplemente un día apareciste y todo cambio, hiciste que mis día se sentía mejor cuando hablábamos.

Me gusta cómo me haces sentir: con calma, con ganas de reír y con la libertad de ser yo sin esforzarme.

Me gusta tu forma de ser, esos detalles que quizás ni notas pero que yo voy guardando: cómo hablas, cómo sonríes, cómo haces que hasta lo más simple se sienta especial.

Me gusta que contigo no hay que fingir. Que el tiempo pasa volando, que las conversaciones se alargan y que siempre me quedo con ganas de más.

No busco a alguien perfecto. Me gustas tú, tal cual eres, con todo lo que ya conozco y con todo lo que todavía me falta por descubrir.

Te amo mi Princesita. Ojalá las leas con una sonrisa. 💕</p><span class="sig">Con cariño ♥</span>` },
 { head:`Lo que quiero contigo 🌹`, intro:"Cosas pequeñas y grandes que sueño hacer a tu lado",
   wishes:[["🌱","Conocerte más, cada día un poquito más"],["😂","Reírnos juntos hasta que duela la panza"],["🌙","Tener conversaciones largas sin mirar la hora"],["🚶","Salir a caminar y no llegar a ningún lado"],["✈️","Viajar y perdernos en lugares nuevos"],["🤍","Cuidarte y que me cuides"],["🌟","Apoyarte en todas tus metas"],["📸","Crear recuerdos que valga la pena guardar"],["🍿","Ver películas y comer algo rico"],["💞","Que me elijas, como yo te elijo a ti"]],
   outro:"Y todo lo que se nos ocurra en el camino ♥" }
];
/* ------------------------- */

const $=id=>document.getElementById(id);
function hearts(n=12){
  for(let k=0;k<n;k++){
    const s=document.createElement('span');
    s.textContent='♥';
    s.style.left=Math.random()*100+'vw';
    s.style.fontSize=(14+Math.random()*30)+'px';
    s.style.animationDuration=(7+Math.random()*7)+'s';
    s.style.animationDelay=(Math.random()*1.5)+'s';
    $('fx').appendChild(s);
    setTimeout(()=>s.remove(),16000);
  }
}
hearts(8); setInterval(()=>hearts(1),1500);

const wishesHtml=c=>`<p class="intro">${c.intro}</p><div class="tl">`+c.wishes.map(w=>`<div class="wi"><span class="ic">${w[0]}</span><p>${w[1]}</p></div>`).join('')+`</div><p class="outro">${c.outro}</p>`;
let num=0;
const groupsHtml=g=>g.map(x=>`<div class="grp">${x.t}</div><div class="chips">`+x.i.map(t=>`<span class="chip"><i>${++num}</i>${t}</span>`).join('')+`</div>`).join('');
$('deck').innerHTML=CARDS.map((c,i)=>{
  const body=c.groups?groupsHtml(c.groups):c.wishes?wishesHtml(c):c.list?`<ol class="lst ${c.wish?'w':''}">`+c.list.map(t=>`<li>${t}</li>`).join('')+`</ol>`:c.body;
  return `<article class="card hid" data-i="${i}"><s>♥</s><s>♥</s><s>♥</s><s>♥</s><h2>${c.head}</h2><div class="bd">${body}</div></article>`;
}).join('');
const cards=[...document.querySelectorAll('.card')];
let active=1, ready=false;
function setPos(){
  cards.forEach((el,i)=>{
    el.classList.remove('c','l','r');
    el.classList.add(i===active?'c':i===(active+1)%3?'r':'l');
  });
}
setPos();

$('seal').onclick=()=>{
  $('env').classList.add('open');
  $('hint').style.opacity=0;
  hearts(18);
  setTimeout(()=>$('env').classList.add('gone'),700);
  setTimeout(()=>{
    const order=[1,0,2];
    order.forEach((i,k)=>{cards[i].style.transitionDelay=(k*.18)+'s';cards[i].classList.remove('hid')});
    ready=true;
    setTimeout(()=>{cards.forEach(c=>c.style.transitionDelay='');$('hint2').style.opacity=1},1800);
  },1000);
};

$('deck').onclick=e=>{
  if(!ready)return;
  const c=e.target.closest('.card'); if(!c)return;
  const i=+c.dataset.i;
  if(i!==active){active=i;setPos();cards[i].querySelector('.bd').scrollTop=0}
};
let sx=null;
document.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
document.addEventListener('touchend',e=>{
  if(sx===null||!ready)return;
  const d=e.changedTouches[0].clientX-sx; sx=null;
  if(Math.abs(d)>70){active=(active+(d<0?1:2))%3;setPos()}
},{passive:true});
