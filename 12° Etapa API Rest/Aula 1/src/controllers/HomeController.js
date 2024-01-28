import Aluno from '../models/Aluno';

class HomeController{
    async index(req, res){
        const novoAluno = await Aluno.create({
            nome: 'João',
            sobrenome: 'Silva',
            email: 'joao@gmail.com',
            idade: 19,
            peso: 80,
            altura: 1.80,
        });
        res.json(novoAluno);
    }
}

export default new HomeController();
