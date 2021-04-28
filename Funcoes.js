function numeroAleatorio()
{
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

// Arrow Function

const OlaMundo = () =>
{
    console.log("Olá Mundo!!!");
}

OlaMundo();

function soma(numero1, numero2)
{
    return numero1 + numero2;
}

const primeiraSoma = soma(1, 3);
const segundaSoma = soma(6, 7);

console.log
({
    primeiraSoma,
    segundaSoma
});