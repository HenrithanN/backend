class ErroService {
    MontaObjErro(erro, detalhesAdicionais = null){
        const objError = {
            Mensagem: erro,
            DetalhesAdicionais: detalhesAdicionais
        }

        return objError
    }
}

module.exports = new ErroService;