import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {readFile,writeFile,mkdir,readdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {server} from './serve.mjs';
await new Promise(resolve=>server.listen(4322,'127.0.0.1',resolve));
const origin='http://127.0.0.1:4322';
const browser=await chromium.launch({channel:'chrome',headless:true});
const report={routes:[],responsive:[],accessibility:[],interaction:[],errors:[]};
await mkdir('artifacts',{recursive:true});
try{
 const context=await browser.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:1});
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 const slugs=await readdir('dist/servicos');assert.equal(slugs.length,7);
 const routes=['/',...slugs.map(s=>`/servicos/${s}/`),'/privacidade/'];
 for(const route of routes){
  assert.equal((await page.goto(origin+route,{waitUntil:'load'})).status(),200);
  assert.equal(await page.locator('h1').count(),1);assert((await page.title()).includes('LEADS PHONE'));
  assert.equal(await page.locator('meta[name=robots]').getAttribute('content'),'noindex, follow');
  const body=await page.locator('body').innerText();assert(!/kacell|99749|1179|tablets|troca apenas do vidro|orçamento gratuito/i.test(body),route);
  for(const json of await page.locator('script[type="application/ld+json"]').allTextContents()){const obj=JSON.parse(json);assert(!/AggregateRating|"Review"|ratingValue/.test(json));assert(obj);}
  await page.locator('img').evaluateAll(async imgs=>{await Promise.all(imgs.map(async img=>{img.loading='eager';await img.decode();}));});
  const links=await page.locator('a').evaluateAll(els=>els.map(a=>a.getAttribute('href')));
  for(const href of new Set(links)){if(href?.startsWith('https://wa.me/')){const u=new URL(href);assert.equal(u.pathname,'/5515988163646');assert(u.searchParams.get('text').includes('LEADS PHONE'));}if(href?.startsWith('/')){const u=new URL(href,origin);assert.equal((await page.request.get(u.href)).status(),200,href);}}
  const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();report.accessibility.push({route,violations:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});
  report.routes.push({route,status:200,images:'ok',links:'ok',metadata:'ok'});
 }
 for(const route of ['/','/servicos/troca-de-bateria/'])for(const width of [320,390,768,1024,1440]){
  await page.setViewportSize({width,height:900});await page.goto(origin+route,{waitUntil:'load'});
  const size=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));assert(size.scroll<=width,`${route}: overflow ${JSON.stringify(size)}`);report.responsive.push({route,...size});
  if([390,1440].includes(width)){await page.locator('img').evaluateAll(async imgs=>{await Promise.all(imgs.map(async img=>{img.loading='eager';await img.decode();}));});if(route==='/'){await page.locator('#localizacao').scrollIntoViewIfNeeded();await page.waitForTimeout(1400);await page.evaluate(()=>scrollTo(0,0));await page.waitForFunction(()=>document.querySelector('video').readyState>=2&&document.querySelector('video').currentTime>0);await page.locator('video').evaluate(v=>{v.pause();});await page.waitForTimeout(200);}await page.screenshot({path:`artifacts/${route==='/'?'home':'bateria'}-${width}.png`,fullPage:true});await page.screenshot({path:`artifacts/${route==='/'?'home':'bateria'}-${width}-viewport.png`});}
 }
 await page.setViewportSize({width:390,height:844});await page.goto(origin,{waitUntil:'load'});
 await page.locator('.menu-toggle').click();assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');await page.locator('.main-nav a[href="/#localizacao"]').click();assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');
 await page.goto(origin);await page.locator('#duvidas .faq-item').first().locator('summary').click();assert.equal(await page.locator('#duvidas .faq-item').first().getAttribute('open'),'');
 await page.locator('[data-result-pause]').click();const before=await page.locator('[data-result-count]').textContent();await page.locator('[data-result-direction="1"]').click();assert.notEqual(await page.locator('[data-result-count]').textContent(),before);await page.locator('[data-position=center] .gallery-trigger').click();assert(await page.locator('dialog').evaluate(d=>d.open));await page.keyboard.press('Escape');assert(!(await page.locator('dialog').evaluate(d=>d.open)));
 await page.locator('[data-review-pause]').click();assert.equal(await page.locator('[data-review-pause]').getAttribute('aria-pressed'),'true');
 await page.goto(origin);await page.waitForFunction(()=>{const v=document.querySelector('video');return v.readyState>=2&&v.currentTime>0;});
 const video=await page.locator('video').evaluate(v=>({width:v.videoWidth,height:v.videoHeight,duration:v.duration,muted:v.muted,loop:v.loop,playsInline:v.playsInline,controls:v.controls,poster:v.poster,time:v.currentTime,transform:getComputedStyle(v.closest('.phone-frame')).transform}));assert(video.muted&&video.loop&&video.playsInline&&!video.controls);assert.equal(video.width,540);assert.equal(video.height,960);assert(video.duration>13&&video.duration<14);assert.notEqual(video.transform,'none');
 await page.locator('[data-video-toggle]').click();assert(await page.locator('video').evaluate(v=>v.paused));await page.locator('[data-video-toggle]').click();await page.waitForFunction(()=>!document.querySelector('video').paused);
 await page.emulateMedia({reducedMotion:'reduce'});await page.reload();assert(await page.locator('video').evaluate(v=>v.paused));
 report.interaction.push('menu mobile','FAQ','carrossel','galeria e Escape','pausa dos depoimentos',{video},'pausa do vídeo','movimento reduzido');
 const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const fallback=await nojs.newPage();await fallback.goto(origin);assert(await fallback.locator('.main-nav').isVisible());await nojs.close();
 assert.equal((await page.request.get(origin+'/pagina-inexistente/')).status(),404);
 assert((await (await page.request.get(origin+'/robots.txt')).text()).includes('Disallow: /'));
 assert(!/kacell|99749|1179/i.test(await readFile('dist/index.html','utf8')));
 await writeFile('artifacts/verification.json',JSON.stringify(report,null,2));
 assert.deepEqual(report.errors,[]);assert.equal(report.accessibility.flatMap(x=>x.violations).length,0,'Accessibility findings: see artifacts/verification.json');
 console.log(JSON.stringify({routes:report.routes.length,responsive:report.responsive.length,accessibility:'zero violations',interactions:report.interaction.length,video:'playing',result:'PASS'}));
}finally{await writeFile('artifacts/verification.json',JSON.stringify(report,null,2));await browser.close();server.close();}
