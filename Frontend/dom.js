var id = setTimeout(Anim, 3000)

function Anim() {
    var target = document.getElementById("test");
    target.style.height = "500px";


}
function stopAnimation() {
    clearTimeout(id);
}