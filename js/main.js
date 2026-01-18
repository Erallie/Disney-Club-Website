// ---------- Helpers ----------
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];

// ---------- Copy tag ----------
const TAG = "DISNEY.3803";
const toast = $("#toast");

async function copyText(text){
  try{
    await navigator.clipboard.writeText(text);
    showToast(`Copied: ${text}`);
  }catch(e){
    // fallback
    const t = document.createElement("textarea");
    t.value = text;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    t.remove();
    showToast(`Copied: ${text}`);
  }
}

let toastTimer = null;
function showToast(msg){
  toast.textContent = msg;
  toast.style.opacity = "1";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{ toast.style.opacity="0"; }, 2200);
}

$("#copyTag").addEventListener("click", ()=>copyText(TAG));

// ---------- Fake lively counters (subtle, optional) ----------
/* const onlineNow = $("#onlineNow");
const members = $("#members");

function wiggleCounters(){
  const baseOnline = 133;
  const baseMembers = 2657;

  const o = baseOnline + Math.floor(Math.random()*6) - 2;   // small jitter
  const m = baseMembers + Math.floor(Math.random()*4) - 1;

  onlineNow.textContent = Math.max(0, o);
  members.textContent = Math.max(0, m);
}
wiggleCounters();
setInterval(wiggleCounters, 6000); */


// ---------- Party theme generator ----------
const themes = [
  "Moonlit Masquerade",
  "Crystal Ballroom Waltz",
  "Enchanted Garden Gala",
  "Midnight Carriage Parade",
  "Royal Portrait Night",
  "Starlit Castle Concert",
  "Glass Slipper Hunt (Friendly)",
  "Villain-to-Hero Redemption Ball",
  "Dreamy Duet Showcase",
  "Candlelit Coronation"
];
const themeOut = $("#themeOut");
$("#randomTheme").addEventListener("click", ()=>{
  const t = themes[Math.floor(Math.random()*themes.length)];
  themeOut.innerHTML = `Theme idea: <b>${t}</b>`;
  showToast("New theme conjured ✨");
});

// ---------- Smooth scroll / active nav ----------
$$("[data-link]").forEach(a=>{
  a.addEventListener("click", (e)=>{
    const href = a.getAttribute("href");
    if(href && href.startsWith("#")){
      e.preventDefault();
      $(href)?.scrollIntoView({behavior:"smooth", block:"start"});
    }
  });
});

const sections = ["#overview","#event","#expectations","#rules","#gallery","#join"].map(id=>$(id));
const navLinks = $$("[data-link]");

const io = new IntersectionObserver((entries)=>{
  const vis = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!vis) return;
  const id = "#"+vis.target.id;
  navLinks.forEach(a=>a.classList.toggle("active", a.getAttribute("href")===id));
}, {rootMargin:"-35% 0px -55% 0px", threshold:[0.08,0.15,0.25]});

sections.forEach(s=>s && io.observe(s));

// ---------- Gallery modal ----------
const modal = $("#modal");
const modalImg = $("#modalImg");
const modalTitle = $("#modalTitle");

$$(".tile").forEach(tile=>{
  tile.addEventListener("click", ()=>{
    const img = tile.querySelector("img");
    modalImg.src = img.src;
    modalImg.alt = img.alt || "Gallery image";
    modalTitle.textContent = tile.dataset.cap || "Gallery";
    modal.classList.add("on");
  });
});

function closeModal(){
  modal.classList.remove("on");
  modalImg.src = "";
}
$("#closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", (e)=>{ if(e.target === modal) closeModal(); });
window.addEventListener("keydown", (e)=>{ if(e.key==="Escape") closeModal(); });

// ---------- Footer year ----------
$("#year").textContent = new Date().getFullYear();

// ---------- Sparkle canvas ----------
const canvas = document.getElementById("sparkles");
const ctx = canvas.getContext("2d");
let W=0,H=0, DPR=1;
function resize(){
  DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  W = Math.floor(window.innerWidth);
  H = Math.floor(window.innerHeight);
  canvas.width = Math.floor(W*DPR);
  canvas.height = Math.floor(H*DPR);
  canvas.style.width = W+"px";
  canvas.style.height = H+"px";
  ctx.setTransform(DPR,0,0,DPR,0,0);
}
window.addEventListener("resize", resize);
resize();

const sparkles = [];
const N = Math.min(120, Math.floor((W*H)/14000));

function rnd(a,b){ return a + Math.random()*(b-a); }

for(let i=0;i<N;i++){
  sparkles.push({
    x: rnd(0,W),
    y: rnd(0,H),
    r: rnd(0.6, 2.2),
    a: rnd(0.15, 0.85),
    tw: rnd(0.01, 0.04),
    sp: rnd(0.08, 0.35),
    drift: rnd(-0.12, 0.12),
    hue: Math.random() < 0.5 ? "rgba(104,241,255," : "rgba(255,217,145,"
  });
}

function draw(){
  ctx.clearRect(0,0,W,H);

  for(const s of sparkles){
    s.y -= s.sp;
    s.x += s.drift;
    s.a += (Math.random() < 0.5 ? -1 : 1) * s.tw;

    if(s.a < 0.08) s.a = 0.08;
    if(s.a > 0.9) s.a = 0.9;

    if(s.y < -10) { s.y = H + 10; s.x = rnd(0,W); }
    if(s.x < -10) s.x = W + 10;
    if(s.x > W + 10) s.x = -10;

    const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r*6);
    g.addColorStop(0, s.hue + (s.a*0.9) + ")");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r*4, 0, Math.PI*2);
    ctx.fill();

    ctx.strokeStyle = s.hue + (s.a*0.28) + ")";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(s.x - s.r*4, s.y);
    ctx.lineTo(s.x + s.r*4, s.y);
    ctx.moveTo(s.x, s.y - s.r*4);
    ctx.lineTo(s.x, s.y + s.r*4);
    ctx.stroke();
  }

  requestAnimationFrame(draw);
}
draw();

// ---------- Back to top button ----------
$("#scrollTop").addEventListener("click", ()=>window.scrollTo({top:0, behavior:"smooth"}));
