function addproduct(parent) {
    localStorage.setItem(parent.children[1].id, (parent.outerHTML))
}

function onClick() {
    document.location.href = "file:///C:/Users/3elmi/Desktop/Exercice%20fruits/Page2.HTML";
    // location.assign("page2.HTML");
}