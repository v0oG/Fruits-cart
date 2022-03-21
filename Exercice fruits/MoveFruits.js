function onLoad() {
    for (var a in localStorage) {
        document.body.innerHTML += localStorage.getItem(a);
    }
}