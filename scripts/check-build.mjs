import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root=fileURLToPath(new URL('../dist/',import.meta.url));
const files=fs.readdirSync(root,{recursive:true}).filter(file=>file.endsWith('.html'));
const home=fs.readFileSync(path.join(root,'index.html'),'utf8');
const prefix=home.match(/data-site-base="([^"]*)"/)?.[1]||'';
const errors=[];
for(const file of files){
 const html=fs.readFileSync(path.join(root,file),'utf8');
 if((html.match(/<h1[\s>]/g)||[]).length!==1)errors.push(file+': H1 ausente ou duplicado');
 for(const [,attr,value]of html.matchAll(/\b(href|src)="([^"]+)"/g)){
  if(!value.startsWith('/')||value.startsWith('//'))continue;
  const pathname=decodeURIComponent(value.split(/[?#]/)[0]);
  if(prefix&&pathname!==prefix&&!pathname.startsWith(prefix+'/')){errors.push(file+': caminho fora do projeto '+value);continue}
  let target=pathname.slice(prefix.length);
  if(target.endsWith('/'))target+='index.html';
  if(!fs.existsSync(path.join(root,target)))errors.push(file+': arquivo ausente '+value);
 }
 if(file!=='404.html'){
  const canonical=html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  const expected=process.env.SITE_URL?.replace(/\/+$/,'');
  if(!canonical||(expected&&!canonical.startsWith(expected+'/')))errors.push(file+': canonical inválido');
  if(/[↗→←↓⌄]/.test(html))errors.push(file+': seta Unicode em vez de SVG');
 }
}
new vm.Script(fs.readFileSync(path.join(root,'app.js'),'utf8'));
const cards=(home.match(/class="service-tile"/g)||[]).length;
if(cards!==20)errors.push('Esperados 20 cards na Home, encontrados '+cards);
if(!fs.existsSync(path.join(root,'.nojekyll')))errors.push('.nojekyll ausente');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`${files.length} páginas HTML verificadas: links, assets, H1, canonical, SVGs, 20 cards e JavaScript. Prefixo: ${prefix||'/'}`);
