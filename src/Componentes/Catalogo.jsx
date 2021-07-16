import React, { Component } from 'react';
import { Button, Container, Table, Row } from 'react-bootstrap';
import FilmeServicos from '../Servicos/FilmeServicos';

class Catalogo extends Component {

    constructor (props){
        super(props);
        this.state = {
            filmes : []
        }

        this.voltar = this.voltar.bind(this);
        this.editar = this.editar.bind(this);
        this.excluir = this.excluir.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
    }

    componentDidMount(){
        this.getFilmes();
    }

    getFilmes(){
        FilmeServicos.getFilmes().then(
            (resposta) =>
                this.setState({filmes:resposta.data})
        );
    }

    voltar(){
        this.props.history.push("/");
    }

    editar(id){
        this.props.history.push("/cadastro/"+id)
    }

    excluir(id){
        FilmeServicos.deleteFilme(id).then(
            (resposta) => {
                alert(resposta.data)
                this.getFilmes();
            }
        );
    }

    cadastrar(){
        this.props.history.push("/cadastro/add")
    }

    render() {
        return (
            <Container fluid className="Escuro">
                <Row>
                    <Button variant="dark" className="float-left" onClick={this.voltar}>voltar</Button>
                </Row>
                <Row>
                    <h1>Catálogo De Filmes</h1>
                </Row>
                <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>
                                Titulo
                            </th>
                            <th>
                                Genero
                            </th>
                            <th>
                                Preço
                            </th>
                            <th>
                                Nota
                            </th>
                            <th>
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.filmes.map(
                                filme =>
                                    <tr key={filme.idFilme}>
                                        <td>
                                            {filme.titulo}
                                        </td>
                                        <td>
                                            {filme.genero}
                                        </td>
                                        <td>
                                            {filme.preco}
                                        </td>
                                        <td>
                                            {filme.nota}
                                        </td>
                                        <td>
                                            <Button variant="warning" onClick={() =>this.editar(filme.idFilme)} value="Editar">Editar</Button>
                                            <Button variant="danger" onClick={() => this.excluir(filme.idFilme)} value="Excluir">Excluir</Button>
                                        </td>
                                    </tr>
                            )
                        }

                    </tbody>
                </Table>
                </Row>
                <Row >
                    <Button className="float-right" variant="success" onClick={this.cadastrar} value="Cadastrar">Novo Filme</Button>
                </Row>
            </Container>
        );
    }
}

export default Catalogo;