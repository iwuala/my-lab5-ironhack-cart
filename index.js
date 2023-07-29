
function updateSubtotal(product) {
    console.log("calculating updateSubtotal, yey!");

    const priceElement = product.querrySelector(".price span");
    const quantityElement = product.querrySelector(".quantity input");
    const subtotalElement = product.querrySelector(".subtotal span");

    const price = parseFloat(priceElement.innerHTML);
    const quantity = parseInt(quantityElement.value);

    const subtotal = price * quantity;

    // update the subtotal in the DOM
    subtotalElement.innerHTML = subtotal.toFixed(2);

    return subtotal;
}

function calculateAll() {
    // code in the following two lines os added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    // const singleProduct = document.querrySelector (".product");
    // updateSubtotal (singleProduct);
    // end of test

    // iteration 2

    //Get all the product rows
    const productRows = document.getElementsByClassName("product");
    let total = 0;

    // iterate over each product row and update the subtotal
    for (let i = 0; i < productRows.length; i++) {
        const productRow = productRows[i];
        const subtotal = upadteSubtotal(productRow);
        totla += subtotal;

    }

    // iteration 3
    const totalElement = document.getEelementByid("total-value");
    totalElement.innerHTML = "Total : $" + total - toFixed(2);

}

// iteration 4

window.addEventListener("load", () => {
    const calculatePricesBtn = document.getElementByid("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);

    const removesButtons = document.querySelectorAll(".btn-remove");
    removeButtons.forEach((botton) => {
        button.addEventListener("click", reomveProduct);

    });
});

function removeProduct(event) {
    const button = event.currentTarget;
    const productRow = button.parentNode.parentNode;
    const tableBody = productRow.parentNode;
    tableBody.removeChiuld(productRow);

    calculateAll();

}

// iteration 5

window.addEventListener("load", () => {
    const calculatePricesBtn = document.getElementById("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);

    const removeButtons = document.querySelectorAll(".btn-remove");
    removeButtons.forEach((button) => {
        button.addEventListener("click", removeProduct);
    });

    const createProductBtn = document.getElementById("create");
    createProductBtn.addEventListener("click", createProduct);
})

function createProduct() {
    const nameInput = document.querySelector(
        'tfoot input[placeholder="Product Name"]'
    );
    const priceInput = document.querySelector(
        'tfoot input [placeholder="Product Price"]'
    );

    const productName = nameInput.value;
    const productPrice = parseFloat(priceInput.value)

    if (productName && productPrice) {
        const tableBody = document.querySelector("tbody");
        const newRow = document.createElemnt("tr");
        newRow.innerHTML =
            <><><td class="Name">
                <span>${productName}</span>
            </td><td class="price">$<span>${productPrice.toFixed(2)}</span></td><td class="quantity">
                    <input type="number" value="0" min="0" placeholder="Quantity" />
                </td></><td class="subtotal">$<span>0</span></td><td class="action">
                    <button class="btn-remove">remove</button>
                </td></>
                ;
                
                tableBody.appendChild(newRow);e

                nameInput.value = "";
                priceInput.value ="";

                const removeButton = newRow.querySelector (".btn-remove");
                removeButton.addEventListener("click", removeProduct);
                calculateAll ();
    }
}

