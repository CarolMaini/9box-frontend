const body = document.querySelector("body");
const home = document.querySelector(".home")
const sidebar = body.querySelector(".sidebar");
const sidebarIcons = sidebar.querySelectorAll("a.link-form");
const toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () => {
    home.classList.toggle("sidebar-close")
    sidebar.classList.toggle("close");
    
    sidebarIcons.forEach(element => {
        element.classList.toggle("closeIcons");
    });
});

const colors = {
  'backgroundColor': '--body-color',
  'sidebarColor': '--sidebar-color',
  'cardColor': '--card-color',
  'textColor': '--text-color',
  'iconColor': '--icon-color',
}

const root = document.documentElement;
document.querySelectorAll('input[type="color"]').forEach(e => (
  e.addEventListener('input', function () {
    const corEscolhida = this.value;
    root.style.setProperty(colors[e.id], corEscolhida);
  })
));
