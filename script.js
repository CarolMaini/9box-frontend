const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
        sidebar.querySelector(".image").classList.toggle("min");
    });