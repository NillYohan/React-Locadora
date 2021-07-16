import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Row } from 'react-bootstrap';
import FilmeServicos from '../Servicos/FilmeServicos';
class CadastroEUpdate extends Component {
    
    constructor (props){
        super(props);
        this.state={
            idFilme : this.props.match.params.id,
            titulo:"",
            genero:"",
            preco:"",
            nota:""
        }

        this.changeTituloHandler = this.changeTituloHandler.bind(this);
        this.changeGeneroHandler = this.changeGeneroHandler.bind(this);
        this.changePrecoHandler = this.changePrecoHandler.bind(this);
        this.changeNotaHandler = this.changeNotaHandler.bind(this);
        this.salvarFilme = this.salvarFilme.bind(this);

    }

    componentDidMount(){
        if(this.state.idFilme == "add"){
            return false
        }
        else{
            return FilmeServicos.getFilmeById(this.state.idFilme).then(
                (resposta) => {
                    let filme = resposta.data;
                    this.setState({
                        titulo: filme.titulo,
                        genero: filme.genero,
                        preco: filme.preco,
                        nota: filme.nota 
                    });
                }
            )
        }
    }

    salvarFilme(){
        let filme = {
            titulo : this.state.titulo,
            genero : this.state.genero,
            preco : this.state.preco,
            nota : this.state.nota
        }

        if(this.state.idFilme == "add"){
            FilmeServicos.createFilmes(filme).then(
                (resposta) => {
                    alert(resposta.data);
                }
            )
        }
        else {
            filme.idFilme = this.state.idFilme
            FilmeServicos.editFilme(filme).then(
                (resposta) => console.log(resposta.data)
            )
        }

        this.props.history.push("/all");
    }

    changeTituloHandler(event){
        this.setState({titulo : event.target.value})
    }

    changeGeneroHandler(event){
        this.setState({genero : event.target.value})
    }

    changePrecoHandler(event){
        this.setState({preco : event.target.value})
    }

    changeNotaHandler(event){
        this.setState({nota : event.target.value})
    }

    cancelar(){
        this.props.history.push("/all")
    }

    render() {
        return (
            <Container fluid className="Escuro">
                <Row>
                    <h1>Filmes</h1>
                </Row>
                <Form>
                    <Form.Group controlID="formTitulo">
                        <FormControl type="text" placeholder="Titulo do Filme" value={this.state.titulo} onChange={this.changeTituloHandler} />
                        <Form.Text className="text-muted">
                            Digite o Titulo do Filme
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlID="formGenero">
                        <FormControl type="text" placeholder="Genero do Filme" value={this.state.genero} onChange={this.changeGeneroHandler} />
                        <Form.Text className="text-muted">
                            Digite o Genero do Filme
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlID="formPreco">
                        <FormControl type="number" placeholder="Preco do Filme" value={this.state.preco} onChange={this.changePrecoHandler} />
                        <Form.Text className="text-muted">
                            Digite o Preco do Filme
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlID="formNota">
                        <FormControl type="number" placeholder="Nota do Filme" value={this.state.nota} onChange={this.changeNotaHandler} />
                        <Form.Text className="text-muted">
                            Digite o Nota do Filme
                        </Form.Text>
                    </Form.Group>
                    <Row className="float-right">
                        <Button variant="success" value="Cadastrar" className="btnSubmit" onClick={this.salvarFilme}>Salvar</Button>
                        <Button variant="danger" value="Excluir" onClick={this.cancelar.bind(this)}>Cancelar</Button>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default CadastroEUpdate;