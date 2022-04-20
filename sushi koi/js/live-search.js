document.querySelector('#search').oninput = function () {
    let val = this.value.trim();
    let searchItem = document.querySelectorAll('.product-grid li')

    if (val != '') {
        searchItem.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide')
            } else {
                elem.classList.remove('hide');
            }

        });
    } else {
        searchItem.forEach(function (elem) {
            elem.classList.remove('hide');
        });

    }
}