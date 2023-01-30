// modal Buttons
const allSalesBtn = document.querySelector("#allSalesBtn");
const holdSaleBtn = document.querySelector("#holdSaleBtn");
const finalizeSaleBtn = document.querySelector("#finalizeSaleBtn");
const holdModalBtn = document.querySelector("#holdModalBtn");
const calculatorModalBtn = document.querySelector("#calculatorModalBtn");
const addItemModalBtn = document.querySelector("#addItemModalBtn");

// modal Ids
const allSalesModal = document.querySelector("#allSalesModalId");
const holdModal = document.querySelector("#holdModalId");
const finalizeSaleModal = document.querySelector("#finalizeSaleModalId");
const holdSalesModal = document.querySelector("#holdSalesModalId");
const calculatorModal = document.querySelector("#calculatorModalId");
const addItemModal = document.querySelector("#addItemModalId");

// close Buttons
const allSalesModalIdCloseBtnX = document.querySelector(
  "#allSalesModalIdClose"
);
const allSalesModalIdCloseBtn = document.querySelector(
  "#allSalesModalIdCloseBtn"
);
const holdModalIdCloseBtn = document.querySelector("#holdModalIdCloseBtn");
const finalizeSaleModalCloseBtns = document.querySelector(
  "#finalizeSaleModalCloseBtns"
);
const holdSalesModalIdCloseBtnX = document.querySelector(
  "#holdSalesModalIdClose"
);
const holdSalesModalIdCloseBtn = document.querySelector(
  "#holdSalesModalIdCloseBtn"
);
const addItemModalCloseBtn = document.querySelector("#addItemModalCloseBtn");

// Opening Modals
allSalesBtn.onclick = () => {
  allSalesModal.style.display = "block";
};
holdModalBtn.onclick = () => {
  holdModal.style.display = "block";
};
finalizeSaleBtn.onclick = () => {
  finalizeSaleModal.style.display = "block";
};
holdSaleBtn.onclick = () => {
  holdSalesModal.style.display = "block";
};
calculatorModalBtn.onclick = () => {
  calculatorModal.style.display = "block";
};
addItemModalBtn.onclick = () => {
  addItemModal.style.display = "block";
};

// close btn actions
allSalesModalIdCloseBtn.onclick = () => {
  allSalesModal.style.display = "none";
};

allSalesModalIdCloseBtnX.onclick = () => {
  allSalesModal.style.display = "none";
};

holdModalIdCloseBtn.onclick = () => {
  holdModal.style.display = "none";
};

finalizeSaleModalCloseBtns.onclick = () => {
  finalizeSaleModal.style.display = "none";
};

holdSalesModalIdCloseBtn.onclick = () => {
  holdSalesModal.style.display = "none";
};

holdSalesModalIdCloseBtnX.onclick = () => {
  holdSalesModal.style.display = "none";
};

addItemModalCloseBtn.onclick = () => {
  addItemModal.style.display = "none";
};

// close modal actions
window.onclick = (event) => {
  if (event.target == allSalesModal) {
    allSalesModal.style.display = "none";
  }
  if (event.target == holdModal) {
    holdModal.style.display = "none";
  }
  if (event.target == finalizeSaleModal) {
    finalizeSaleModal.style.display = "none";
  }
  if (event.target == holdSalesModal) {
    holdSalesModal.style.display = "none";
  }
  if (event.target == calculatorModal) {
    calculatorModal.style.display = "none";
  }
  if (event.target == addItemModal) {
    addItemModal.style.display = "none";
  }
};
