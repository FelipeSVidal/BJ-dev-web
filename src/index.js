fetch("https://jsonplaceholder.typicode.com/users")
.then(async (resposta) => {
    const usuarios = await resposta.json();
    usuarios.forEach(element => {
      const elemento = document.createElement("tr");
      const id = document.createElement("td");
      id.innerHTML = element.id;
      const nome = document.createElement("td");
      nome.innerHTML = element.name;
      const email = document.createElement("td");
      email.innerHTML = element.email;
      const empresa = document.createElement("td");
      empresa.innerHTML = element.company.name;
      elemento.appendChild(id);
      elemento.appendChild(nome);
      elemento.appendChild(email);
      elemento.appendChild(empresa);
      document.getElementById("quadro").appendChild(elemento);  
    });
})
.catch((erro) => {
    alert ("Deu erro");
    console.log(erro);
});