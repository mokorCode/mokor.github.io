var mouseX;
var mouseY;

window.onmousemove = (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
    
};
document.querySelectorAll(".sub2").forEach((element) => {
  element.addEventListener("click", (e) => {
    let sub = document.createElement("div");
    sub.textContent = "???";
    sub.classList.add("sub_style");
    document.body.appendChild(sub);

    sub.style.left = `${mouseX}px`;
    sub.style.top = `${mouseY}px`;

    setTimeout(() => {
      sub.remove();
    }, 3000);
  });
});
