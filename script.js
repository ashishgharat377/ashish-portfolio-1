const themeBtn=document.getElementById("themeBtn");

if(themeBtn){
  themeBtn.addEventListener("click",()=>{
    const root=document.documentElement;
    const next=root.getAttribute("data-theme")==="dark" ? "light" : "dark";
    root.setAttribute("data-theme",next);
    themeBtn.textContent=next==="dark" ? "D" : "L";
  });
}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
},{threshold:.14});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

function sendMail(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const msg=document.getElementById("message").value.trim();
  const subject=encodeURIComponent("Portfolio contact from "+name);
  const body=encodeURIComponent("Name: "+name+"\nEmail: "+email+"\n\nMessage:\n"+msg);
  window.location.href="mailto:202501080144@mitaoe.ac.in?subject="+subject+"&body="+body;
}