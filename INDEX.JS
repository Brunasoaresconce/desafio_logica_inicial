let nome = "bruna";
let xp = 20200;
let nivel;

switch (true) {
    case xp <= 1000:
        nivel = "ferro";
        break;
    case xp >= 1001 && xp <= 2000:
        nivel = "bronzer";
        break;
    case xp >= 2001 && xp <= 5000:
        nivel = "prata ouro";
        break;
    case xp >= 5001 && xp <= 8000:
        nivel = "platina diamante";
        break;
    case xp >= 8001 && xp <= 9000:
        nivel = "ascendente";
        break;
    case xp > 9001 && xp <= 10000:
        nivel = "imortal";
        break;
    default:
        nivel = "radiante";
        break;
}

console.log("Parabens, a heróina de nome", nome, "está no nível", nivel);

