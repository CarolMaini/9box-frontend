const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const sidebarIcons = sidebar.querySelectorAll("a.link-form");
const toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () => {
    body.classList.toggle("bodyClose")
    sidebar.classList.toggle("close");
    sidebar.querySelector(".image").classList.toggle("min");
    
    sidebarIcons.forEach(element => {
        element.classList.toggle("closeIcons");
    });
});

const colors = {
  'backgroundColor': '--body-color',
  'sidebarColor': '--sidebar-color',
  'cardColor': '--card-color',
}

const root = document.documentElement;
document.querySelectorAll('input[type="color"]').forEach(e => (
  e.addEventListener('input', function () {
    const corEscolhida = this.value;
    root.style.setProperty(colors[e.id], corEscolhida);
  })
));
