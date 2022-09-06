let Permissao = prompt();

switch(Permissao)
{
    case 'comum':
        console.log('Usuário Comum');
    break;
    
    case 'gerente':
        console.log('Usuário Gerente');
    break;

    case 'diretor':
        console.log('Usuário Diretor');
    break;

    default:
        console.log('Usuário não reconhecido');
}

