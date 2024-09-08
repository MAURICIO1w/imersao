

app.js


function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa =  document.getElementById("campo-pesquisa").value
    
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum Resultado. Digite algo!</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
   
    for (let dado of dados) {

      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descrição-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">mais informações</a>
            </div>
          `;
        }
    }
    if (!resultados) {
      resultados = "<p>Nenhum Resultado</p>"
    }
  section.innerHTML = resultados;
}

