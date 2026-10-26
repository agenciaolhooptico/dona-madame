import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const directory=fileURLToPath(new URL('.',import.meta.url));
const root=path.join(directory,'dist');
const config=JSON.parse(fs.readFileSync(path.join(directory,'site.config.json'),'utf8'));
const prefix=new URL(process.env.SITE_URL||config.siteUrl).pathname.replace(/\/+$/,'');
http.createServer((req,res)=>{
 let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 if(prefix&&pathname==='/'){res.writeHead(302,{Location:prefix+'/'});return res.end()}
 if(prefix&&pathname.startsWith(prefix+'/'))pathname=pathname.slice(prefix.length);
 let file=path.resolve(root,'.'+pathname);
 if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403);return res.end()}
 if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
 if(!fs.existsSync(file)){res.writeHead(404);return res.end('Página não encontrada')}
 res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.webp':'image/webp'})[path.extname(file)]||'application/octet-stream');
 fs.createReadStream(file).pipe(res);
}).listen(4173,'127.0.0.1',()=>console.log('Local: http://localhost:4173'+prefix+'/'));
