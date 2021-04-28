const listaMarcas = ["Volks", "Ford"];
const marca = process.argv[2];

if (marca == "Volks")
{
    console.log("if - Marca Volks atendida");
}
else if (marca === "Ford")
{
    console.log("if - Marca Ford atendida");
}
else
{
    console.log("if - Marca não atendida");
}

switch (marca)
{
    case "Volks":
        console.log("Switch - Volks atendida");
        break;
    case "Ford":
        console.log("Switch - Ford atendida");
        break;
    default:
        console.log("Switch - marca não atendida");
}