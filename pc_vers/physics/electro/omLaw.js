function Voltage() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var u = Number(document.getElementById('voltage').value)
    var r = Number(document.getElementById('resistance').value)
    var i = Number(document.getElementById('amperage').value)

    x = u * i * r

    if (u != 0) {
        Solve = `Напряжение уже известно`;
        Solve_1 = ``;
        Solve_2 = ``;
        Solve_3 = ``;
        Solve_4 = ``;
    }
    else {
        if (x != 0) {
            Solve = `Все данные уже известны`;
            Solve_1 = ``;
            Solve_2 = ``;
            Solve_3 = ``;
            Solve_4 = ``;
        }
        else {
            u = i * r

            Solve = `${u}`;
            Solve_1 = ``;
            Solve_2 = ``;
            Solve_3 = ``;
            Solve_4 = ``;
        }
    }

    document.getElementById("Solve_om").innerHTML = Solve;
    document.getElementById("Solve_1_om").innerHTML = Solve_1;
    document.getElementById("Solve_2_om").innerHTML = Solve_2;
    document.getElementById("Solve_3_om").innerHTML = Solve_3;
    document.getElementById("Solve_4_om").innerHTML = Solve_4;
}

function Resistance() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var u = Number(document.getElementById('voltage').value)
    var r = Number(document.getElementById('resistance').value)
    var i = Number(document.getElementById('amperage').value)

    x = u * i * r

    if (r != 0) {
        Solve = `Сопротивление уже известно`;
        Solve_1 = ``;
        Solve_2 = ``;
        Solve_3 = ``;
        Solve_4 = ``;
    }
    else {
        if (x != 0) {
            Solve = `Все данные уже известны`;
            Solve_1 = ``;
            Solve_2 = ``;
            Solve_3 = ``;
            Solve_4 = ``;
        }
        else {
            r = u / i

            Solve = `${r}`;
            Solve_1 = ``;
            Solve_2 = ``;
            Solve_3 = ``;
            Solve_4 = ``;
        }
    }

    document.getElementById("Solve_om").innerHTML = Solve;
    document.getElementById("Solve_1_om").innerHTML = Solve_1;
    document.getElementById("Solve_2_om").innerHTML = Solve_2;
    document.getElementById("Solve_3_om").innerHTML = Solve_3;
    document.getElementById("Solve_4_om").innerHTML = Solve_4;
}

function Amperage() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var u = Number(document.getElementById('voltage').value)
    var r = Number(document.getElementById('resistance').value)
    var i = Number(document.getElementById('amperage').value)

    x = u * i * r

    if (i != 0) {
        Solve = `Сила тока уже известна`;
        Solve_1 = ``;
        Solve_2 = ``;
        Solve_3 = ``;
        Solve_4 = ``;
    }
    else {
        if (x != 0) {
            Solve = `Все данные уже известны`;
            Solve_1 = ``;
            Solve_2 = ``;
            Solve_3 = ``;
            Solve_4 = ``;
        }
        else {
            i = u / r

            Solve = `${i}`;
            Solve_1 = ``;
            Solve_2 = ``;
            Solve_3 = ``;
            Solve_4 = ``;
        }
    }

    document.getElementById("Solve_om").innerHTML = Solve;
    document.getElementById("Solve_1_om").innerHTML = Solve_1;
    document.getElementById("Solve_2_om").innerHTML = Solve_2;
    document.getElementById("Solve_3_om").innerHTML = Solve_3;
    document.getElementById("Solve_4_om").innerHTML = Solve_4;
}