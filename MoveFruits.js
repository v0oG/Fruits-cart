function onLoad() {

    for (var a in localStorage) {
        let x = localStorage.getItem(a);
        if ((typeof x) == "string") {
            document.body.innerHTML += x
        }
    }
    let n = document.getElementsByClassName("btn")
    for (var b in n) {
        n[b].innerHTML = "Remove item";
    }
}

function addproduct(parent) {
    document.body.removeChild(parent)
    localStorage.removeItem(parent.id)
    console.log(parent.id)
}