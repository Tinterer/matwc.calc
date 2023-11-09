function Mass_kinetik() {

    var Solve;
    var Solve1;
    var Solve2;
    var Solve3;
    var Solve4;

    var m = Number(document.getElementById('mass_kin').value);
    var v = Number(document.getElementById('velocity_kinetik').value);
    var e_k = Number(document.getElementById('e_kinetik').value);

    x = m * v * e_k

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
            if (v != 0) {
                m = (2 * e_k) / v ** 2 

                Solve = `${m} Воспользуемся формулой Ek = m * v²/2`
                Solve1 = `Отсюда m = 2 * ${e_k}/${v}²`
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

    document.getElementById("Solve_kin").innerHTML = Solve;
    document.getElementById("Solve_1_kin").innerHTML = Solve1;
    document.getElementById("Solve_2_kin").innerHTML = Solve2;
    document.getElementById("Solve_3_kin").innerHTML = Solve3;
    document.getElementById("Solve_4_kin").innerHTML = Solve4;
}

function Velocity_kinetik() {

    var Solve;
    var Solve1;
    var Solve2;
    var Solve3;
    var Solve4;

    var m = Number(document.getElementById('mass_kin').value);
    var v = Number(document.getElementById('velocity_kinetik').value);
    var e_k = Number(document.getElementById('e_kinetik').value);
    i = 1/2

    x = m * v * e_k

    if (m != 0) {
        Solve = `Скорость уже известна`
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
            if ((2 * e_k) / m >= 0) {
                v = ((2 * e_k) / m) ** i

                Solve = `${v}`
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

    document.getElementById("Solve_kin").innerHTML = Solve;
    document.getElementById("Solve_1_kin").innerHTML = Solve1;
    document.getElementById("Solve_2_kin").innerHTML = Solve2;
    document.getElementById("Solve_3_kin").innerHTML = Solve3;
    document.getElementById("Solve_4_kin").innerHTML = Solve4;
}

function Energ_kinetik() {

    var Solve;
    var Solve1;
    var Solve2;
    var Solve3;
    var Solve4;

    var m = Number(document.getElementById('mass_kin').value);
    var v = Number(document.getElementById('velocity_kinetik').value);
    var e_k = Number(document.getElementById('e_kinetik').value);

    x = m * v * e_k

    if (e_k != 0) {
        Solve = `Энергия уже известна`
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
                e_k = (m * v**2)/2 

                Solve = `Воспользуемся формулой Ek = m * v²/2`
                Solve1 = `Отсюда Ek = ${m} * ${v}²/2 `
                Solve2 = `Ответ: ${e_k} `
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

    document.getElementById("Solve_kin").innerHTML = Solve;
    document.getElementById("Solve_1_kin").innerHTML = Solve1;
    document.getElementById("Solve_2_kin").innerHTML = Solve2;
    document.getElementById("Solve_3_kin").innerHTML = Solve3;
    document.getElementById("Solve_4_kin").innerHTML = Solve4;
}