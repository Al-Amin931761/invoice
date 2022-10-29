// dynamic date
const date = new Date();
document.getElementById('show-date').innerText = date.toLocaleDateString();

// button 
const detailsSubmitButton = document.getElementById('detail-submit-button');
const addDetailsButton = document.getElementById('add-details-button');

// buyer details
detailsSubmitButton.addEventListener('click', function () {
    let buyerDetailsInput = document.getElementById('buyer-details-input');
    const buyerInformation = document.getElementById('buyer-info');
    buyerInformation.innerText = buyerDetailsInput.value;
    // clear input field 
    buyerDetailsInput.value = '';
});

// item details
addDetailsButton.addEventListener('click', function () {
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');

    // table data
    const tableInfo = document.getElementById('table-info');
    const totalPrice = parseFloat(itemPrice.value) * parseFloat(itemQuantity.value);

    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td3.classList.add('item-total');

    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tableInfo.appendChild(tr);

    // clear input field
    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';

    totalCalculation();
});

// total calculation 
function totalCalculation() {
    const subTotal = calculateSubTotal();

    // subtotal 
    document.getElementById('sub-total').innerText = subTotal;

    // tax calculation 
    const tax = subTotal * .2;
    document.getElementById('tax').innerText = tax.toFixed(2);

    // grand total calculation 
    const grandTotal = subTotal + tax;
    document.getElementById('grand-total').innerText = grandTotal;

    // total amount 
    document.getElementById('total-amount').innerText = grandTotal;
};

// subtotal calculation
function calculateSubTotal() {
    const cost = document.getElementsByClassName('item-total');

    let subTotal = 0;
    for (let i = 0; i < cost.length; i++) {
        const price = cost[i];
        subTotal = subTotal + parseFloat(price.innerText);
    }
    return subTotal;
};


