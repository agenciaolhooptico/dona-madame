// Seleção editorial do catálogo; não representa ranking de buscas ou vendas.
export const featuredServices=[
 {name:'Limpeza de Pele Dona Madame',label:'Limpeza de pele',icon:'face',text:'Atenção à pele e ao seu ritual de cuidado.'},
 {name:'Toxina Botulínica',icon:'syringe',text:'Um cuidado facial que começa com avaliação individual.'},
 {name:'Preenchimento Labial',icon:'lips',text:'Converse sobre contorno, volume e seus objetivos.'},
 {name:'Microagulhamento 2.0',label:'Microagulhamento',icon:'roller',text:'Conheça essa opção de cuidado para a pele.'},
 {name:'Peeling Químico Ouro',label:'Peeling químico',icon:'layers',text:'Um protocolo escolhido conforme a sua pele.'},
 {name:'Bioestimulador de Colágeno com Hidroxiapatita de Cálcio',label:'Bioestimulador de colágeno',icon:'collagen',text:'Saiba mais sobre essa opção em avaliação.'},
 {name:'Ultrafocus Microfocado',label:'Ultrassom microfocado',icon:'waves',text:'Tecnologia facial com indicação personalizada.'},
 {name:'Drenagem Linfática',icon:'drop',text:'Um momento de cuidado e atenção ao corpo.'},
 {name:'Massagem Relaxante',icon:'hands',text:'Desacelere e reserve uma pausa para você.'},
 {name:'Massagem Modeladora',icon:'body',text:'Conheça a proposta desse cuidado corporal.'},
 {name:'Criolipólise',icon:'snow',text:'Converse sobre a técnica e a avaliação corporal.'},
 {name:'Design de Sobrancelhas',icon:'brow',text:'Detalhes que valorizam a expressão do seu olhar.'},
 {name:'Design com Henna ou Tintura',label:'Sobrancelhas com henna',icon:'brush',text:'Design e acabamento para as suas sobrancelhas.'},
 {name:'Brow Lamination',icon:'browlift',text:'Conheça o cuidado para alinhar os fios.'},
 {name:'Extensão de Cílios',icon:'lashes',text:'Um olhar pensado nos detalhes e no seu estilo.'},
 {name:'Lash Lifting',icon:'lashlift',text:'Um cuidado voltado aos seus cílios naturais.'},
 {name:'Depilação Corporal',icon:'wax',text:'Praticidade no seu ritual de beleza.'},
 {name:'Alongamento de Unhas',icon:'nail',text:'Formato e acabamento que combinam com você.'},
 {name:'Manicure',icon:'polish',text:'Atenção às mãos, cor e delicadeza nos detalhes.'},
 {name:'Pedicure',icon:'foot',text:'Um momento dedicado ao cuidado dos pés.'}
];
const drawings={
 face:'<path d="M13 10c-4 2-5 7-4 12 1 7 5 11 9 11s8-4 9-11c1-5 0-10-4-12M12 18h3m6 0h3m-6 1-1 6h3m-5 3c2 1 4 1 6 0"/><path d="m29 4 1 3 3 1-3 1-1 3-1-3-3-1 3-1Z"/>',
 syringe:'<path d="m10 28 14-14 5 5-14 14ZM24 14l4-4m1 9 4-4m-7-7 9 9M12 31l-6 6m9-11 3 3m0-6 3 3"/>',
 lips:'<path d="M5 21c5-2 9-8 13-6l2 2 2-2c4-2 8 4 13 6-5 3-8 9-15 9S10 24 5 21Z"/><path d="M5 21c6 1 10 2 15 2s9-1 15-2"/>',
 roller:'<rect x="8" y="7" width="21" height="10" rx="3"/><path d="M12 10v4m5-4v4m5-4v4m5-4v4m2-2h4v10H20v13h-5V22"/>',
 layers:'<path d="m5 15 15-8 15 8-15 8Zm0 8 15 8 15-8M5 30l15 8 15-8"/>',
 collagen:'<path d="M11 5c0 12 18 18 18 30M29 5c0 12-18 18-18 30M12 10h16m-12 7h8m-8 7h8m-12 7h16"/>',
 waves:'<path d="M8 12c8-6 16-6 24 0M11 19c6-5 12-5 18 0M15 26c3-3 7-3 10 0"/><circle cx="20" cy="33" r="2"/>',
 drop:'<path d="M20 5S9 18 9 25a11 11 0 0 0 22 0C31 18 20 5 20 5Z"/><path d="M14 25c0 4 2 6 6 6"/>',
 hands:'<path d="M5 26 12 17c2-2 4-1 3 1l-3 6 6-4c3-1 5 2 2 4l-7 6-8 2m30-6-7-9c-2-2-4-1-3 1l3 6-6-4c-3-1-5 2-2 4l7 6 8 2M15 9c2-2 8-2 10 0m-8-5h6"/>',
 body:'<path d="M13 5c0 6 3 8 2 13-2 5-5 10-3 17M27 5c0 6-3 8-2 13 2 5 5 10 3 17M15 27c3 2 7 2 10 0"/><path d="M20 19v2"/>',
 snow:'<path d="M20 5v30M7 12l26 16M7 28l26-16M15 8l5 5 5-5m-10 24 5-5 5 5M7 18l7-2-1-7m20 13-7 2 1 7M7 22l7 2-1 7m20-13-7-2 1-7"/>',
 brow:'<path d="M5 18c8-10 22-10 30-3-10-4-20-2-30 3ZM7 27c7-5 17-5 25 0"/>',
 brush:'<path d="m13 27 13-17 5 4-13 17ZM26 10l3-4 5 4-3 4M13 27c-6 0-7 5-7 8 5 1 9-1 12-4"/>',
 browlift:'<path d="M6 25c7-5 21-5 28 0M9 21l2-7m4 5 1-8m5 7V9m5 10-1-8m6 10-2-7M7 31c8-4 18-4 26 0"/>',
 lashes:'<path d="M5 17c7 10 23 10 30 0M8 21l-3 5m9-1-2 6m8-5v7m6-8 2 6m4-10 3 5"/>',
 lashlift:'<path d="M5 24c9-8 21-8 30 0M9 20l-2-5m8 2-1-6m6 5V9m6 8 1-6m4 9 2-5M13 31c4 2 10 2 14 0"/>',
 wax:'<path d="M8 23h24l-3 11H11Zm4-5h16M22 18l6-13 4 2-6 11"/><path d="M15 12c-2-3 2-4 0-7m5 8c-2-3 2-4 0-7"/>',
 nail:'<path d="M11 32V15a9 9 0 0 1 18 0v17c0 4-18 4-18 0ZM11 24c5-4 13-4 18 0"/><path d="M16 12c1-2 4-3 6-2"/>',
 polish:'<rect x="13" y="17" width="16" height="18" rx="4"/><path d="M16 17V7h10v10m-10-6h10m-6 12v6M8 8l-1 3-3 1 3 1 1 3 1-3 3-1-3-1Z"/>',
 foot:'<path d="M24 12c4 4 5 11 2 15-2 3-2 6-5 8-4 3-11 0-10-5 0-4 5-5 5-9 0-3-2-7 1-9"/><ellipse cx="23" cy="7" rx="3" ry="4"/><circle cx="16" cy="7" r="2"/><path d="M19 28c1 1 3 1 4 0"/>'
};
const icon=name=>`<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${drawings[name]}</svg>`;
export function featuredSection(items){
 const cards=featuredServices.map(service=>{
  const item=items.find(item=>item.name===service.name);if(!item)throw Error('Serviço fora do catálogo: '+service.name);
  const label=service.label||service.name;
  const message=`Olá! Gostaria de agendar uma avaliação para ${label} na Dona Madame.`;
  return `<article class="service-tile"><div class="service-heading"><span class="service-icon">${icon(service.icon)}</span><h3>${label}</h3></div><div class="service-actions"><a class="service-more" href="/procedimentos/${item.slug}/" aria-label="Saiba mais sobre ${label}">Saiba mais <span aria-hidden="true">↗</span></a><a class="service-book" href="https://wa.me/5518981914766?text=${encodeURIComponent(message)}" target="_blank" rel="noopener" aria-label="Agendar avaliação de ${label} pelo WhatsApp">Agendar avaliação <span aria-hidden="true">↗</span></a></div></article>`;
 }).join('');
 return `<section id="universo" class="care-universe section reveal" aria-labelledby="care-universe-title"><div class="section-heading"><div><span class="eyebrow">UM UNIVERSO DE POSSIBILIDADES</span><h2 id="care-universe-title">O que você precisa<br><em>sentir hoje?</em></h2></div><a class="underline" href="/procedimentos/">Explore todos os cuidados <span aria-hidden="true">↗</span></a></div><p class="services-intro">20 cuidados do nosso catálogo para você conhecer e encontrar o seu momento.</p><div class="services-grid">${cards}</div><div class="services-closing"><p>Cada cuidado começa com uma conversa. Nossa equipe orienta você sobre a avaliação e a disponibilidade.</p><a class="underline" href="/contato/">Vamos conversar? <span aria-hidden="true">↗</span></a></div></section>`;
}
