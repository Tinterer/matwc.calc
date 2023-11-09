function Mass_potenc() {

    var Solve;
    var Solve1;
    var Solve2;
    var Solve3;
    var Solve4;

    var m = Number(document.getElementById('mass').value);
    var h = Number(document.getElementById('height').value);
    var e_p = Number(document.getElementById('e_potc').value);
    var g = 10

    x = m * h * e_p

    if (m != 0) {
        Solve = `Масса уже известна`
        Solve1 = ` `
        Solve2 = ` `
        Solve3 = ` `
        Solve4 = ` `
        }
    else {
        if (x != 0) {
            Solve = `Все данные известны`
            Solve1 = ` `
            Solve2 = ` `
            Solve3 = ` `
            Solve4 = ` `  
        }
        else {
            if (h != 0) {
                m = e_p / (g * h)

                Solve = `${m}`
                Solve1 = ` `
                Solve2 = ` `
                Solve3 = ` `
                Solve4 = ` `
            } else {
                Solve = `Проверьте правильность введенных данных`
                Solve1 = ` `
                Solve2 = ` `
                Solve3 = ` `
                Solve4 = ` `    
            }
        }
    }

    document.getElementById("Solve_ep").innerHTML = Solve;
    document.getElementById("Solve_1_ep").innerHTML = Solve1;
    document.getElementById("Solve_2_ep").innerHTML = Solve2;
    document.getElementById("Solve_3_ep").innerHTML = Solve3;
    document.getElementById("Solve_4_ep").innerHTML = Solve4;
}

function Height_potenc() {
    var Solve;
    var Solve1;
    var Solve2;
    var Solve3;
    var Solve4;

    var m = Number(document.getElementById('mass').value);
    var h = Number(document.getElementById('height').value);
    var e_p = Number(document.getElementById('e_potc').value);
    var g = 10;

    x = m * h * e_p

    if (h != 0) {
        Solve = `Высота уже известна`
        Solve1 = ` `
        Solve2 = ` `
        Solve3 = ` `
        Solve4 = ` `
        }
    else {
        if (x != 0) {
            Solve = `Все данные известны`
            Solve1 = ` `
            Solve2 = ` `
            Solve3 = ` `
            Solve4 = ` `  
        }
        else {
            if (m != 0) {
                h = e_p / (g * m)

                Solve = `${h}`
                Solve1 = ` `
                Solve2 = ` `
                Solve3 = ` `
                Solve4 = ` `
            } else {
                Solve = `Проверьте правильность введенных данных`
                Solve1 = ` `
                Solve2 = ` `
                Solve3 = ` `
                Solve4 = ` `    
            }
        }
    }

    document.getElementById("Solve_ep").innerHTML = Solve;
    document.getElementById("Solve_1_ep").innerHTML = Solve1;
    document.getElementById("Solve_2_ep").innerHTML = Solve2;
    document.getElementById("Solve_3_ep").innerHTML = Solve3;
    document.getElementById("Solve_4_ep").innerHTML = Solve4;
}

function Energ_potenc() {
    var Solve;
    var Solve1;
    var Solve2;
    var Solve3;
    var Solve4;

    var m = Number(document.getElementById('mass').value);
    var h = Number(document.getElementById('height').value);
    var e_p = Number(document.getElementById('e_potc').value);
    var g = 10

    x = m * h * e_p

    if (e_p != 0) {
        Solve = `Потенциальная энергия уже известна`
        Solve1 = ` `
        Solve2 = ` `
        Solve3 = ` `
        Solve4 = ` `
        }
    else {
        if (x != 0) {
            Solve = `Все данные известны`
            Solve1 = ` `
            Solve2 = ` `
            Solve3 = ` `
            Solve4 = ` `  
        }
        else {
            if (m != 0) {
                e_p = m * g * h

                Solve = `${e_p}Воспользуемся формулой Ep = m * g * h`
                Solve1 = `Ep = ${m} * ${g} * ${h}`
                Solve2 = `Ответ: ${e_p} `
                Solve3 = ` `
                Solve4 = ` `
            } else {
                Solve = `Проверьте правильность введенных данных`
                Solve1 = ` `
                Solve2 = ` `
                Solve3 = ` `
                Solve4 = ` `    
            }
        }
    }

    document.getElementById("Solve_ep").innerHTML = Solve;
    document.getElementById("Solve_1_ep").innerHTML = Solve1;
    document.getElementById("Solve_2_ep").innerHTML = Solve2;
    document.getElementById("Solve_3_ep").innerHTML = Solve3;
    document.getElementById("Solve_4_ep").innerHTML = Solve4;
}



