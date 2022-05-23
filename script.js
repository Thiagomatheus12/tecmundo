import('.style.css')
import('.style.scss')

function pesquisar() {
    document.getElementById("campo-de-pesquisa").focus()
    document.getElementById("campo-de-pesquisa").select()
    console.log("Pesquisar")
}

