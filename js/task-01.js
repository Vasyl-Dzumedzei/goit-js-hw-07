const quantityOfCategories = document.querySelector('#categories');
console.log(`В списке ${quantityOfCategories.children.length} категории.`);

const itemEl = document.querySelectorAll('.item');
itemEl.forEach((item) => {
    console.log(`Категория: ${item.children[0].textContent}`);
    console.log(`Количество элементов: ${item.children[1].children.length}`)
})