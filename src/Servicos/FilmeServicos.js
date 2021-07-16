import axios from "axios";

const urlbase = "http://localhost:8080/filme";
const url_catalogo = "http://localhost:8080/filme/all";

class FilmesServicos{

    getFilmes(){
        return axios.get(url_catalogo);
    }

    createFilmes(filme){
        return axios.post(urlbase+"/addfilme",filme)
    }

    editFilme(filme){
        return axios.put(urlbase+"/update/"+filme.idFilme, filme)
    }

    deleteFilme(id){
        return axios.delete(urlbase+"/delete/"+id);
    }

    getFilmeById(id){
        return axios.get(urlbase+"/pesquisar/"+id)
    }

}

export default new FilmesServicos();