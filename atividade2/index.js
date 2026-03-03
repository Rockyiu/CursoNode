const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([{
    name: 'p1',
    message: 'Qual seu nome?',
},{
    name: 'p2',
    message: 'Qual a sua idade?',
}])
.then((answers)=>{
    if (!answers.p1 || !answers.p2) {
        throw new Error('O nome e idade são obrigatórios!');
    } 
    console.log(answers);
    const nome = answers.p1;
    const idade = parseInt(answers.p2);
    console.log(chalk.bgYellow(`Seu nome é: ${nome} e sua idade é: ${idade}`));
})
.catch((err) => console.log(chalk.black(err)));