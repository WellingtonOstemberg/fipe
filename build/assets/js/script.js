// declaração de variáveis
const kindSelect = document.getElementById("kindSelect");
const optionNone = document.getElementById("optionNone");
const listItems = document.getElementById("listItems");

// requisição para a api
const getList = (kind) => {
  listItems.innerHTML = "";
  fetch(`https://brasilapi.com.br/api/fipe/marcas/v1/${kind}`)
    .then((response) => response.json())
    .then((list) => {
      list.map((item) => {
        let li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        li.innerText = item.nome.toUpperCase();
        listItems.appendChild(li);
      });
    });
};

kindSelect.addEventListener("change", (e) => {
  if (!optionNone.classList.contains("d-none"))
    optionNone.classList.add("d-none");
  getList(e.target.value);
});
