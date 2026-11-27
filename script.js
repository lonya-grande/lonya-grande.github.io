const destinos=[
['Piedra del Zapato','Naturaleza','piedra-del-zapato','Formación rocosa singular del territorio.'],
['Petroglifos de Carachupa','Patrimonio','carachupa','Grabados rupestres del caserío Carachupa. Acceso aproximado de 10 minutos en moto según información local, pendiente de verificación.'],
['Pinturas rupestres','Patrimonio','pinturas-rupestres','Manifestaciones de arte rupestre cuya antigüedad y atribución cultural requieren investigación.'],
['Pozas de Las Lejías','Naturaleza','las-lejias','Espacios naturales de recreación. Consulta las condiciones de acceso y seguridad.'],
['Cerro Cóndorpuna','Aventura','condorpuna','Montaña para explorar con preparación y acompañamiento local.'],
['Catedral del Marañón','Naturaleza','catedral-maranon','Atractivo natural del entorno del Marañón.'],
['Cañón Rojo del Marañón','Aventura','canon-rojo','Paisajes del valle del Marañón.'],
['Río Marañón','Aventura','rio-maranon','Canotaje potencial, sujeto a evaluación de seguridad y disponibilidad de operadores especializados.'],
['Cerro Cuaco','Naturaleza','cuaco','Paisajes y patrimonio del territorio.'],
['Fincas cafetaleras','Café','fincas','Turismo vivencial y cultura cafetalera. Coordina las visitas previamente.']];
const filters=document.querySelector('#filters'),cards=document.querySelector('#cards'),dialog=document.querySelector('#detail');
function photo(slug){const box=document.createElement('div');box.className='photo';box.textContent='Fotografía original pendiente';const img=new Image();img.alt='';img.onload=()=>box.replaceChildren(img);img.src=slug==='condorpuna'?'condorpuna.jpg':`imagenes/${slug}.jpg`;return box;}
function render(cat='Todos'){cards.replaceChildren();for(const [name,category,slug,desc] of destinos.filter(d=>cat==='Todos'||d[1]===cat)){const el=document.createElement('article');el.className='card';el.append(photo(slug));const content=document.createElement('div');content.className='content';content.innerHTML=`<span class="category">${category}</span><h3>${name}</h3><button class="more">Descubrir más →</button>`;content.querySelector('button').onclick=()=>{const detail=document.querySelector('#detailContent');detail.replaceChildren(photo(slug));const h=document.createElement('h2');h.textContent=name;const p=document.createElement('p');p.textContent=desc;detail.append(h,p);dialog.showModal()};el.append(content);cards.append(el);}for(const b of filters.children){b.classList.toggle('active',b.textContent===cat);b.setAttribute('aria-pressed',b.textContent===cat);}}
for(const cat of ['Todos','Naturaleza','Aventura','Patrimonio','Café']){const b=document.createElement('button');b.textContent=cat;b.onclick=()=>render(cat);filters.append(b)}document.querySelector('#close').onclick=()=>dialog.close();document.querySelector('#coffee').onclick=()=>render('Café');render();
