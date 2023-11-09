function R() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var choice = document.getElementById('choice_type').value;
    var r = Number(document.getElementById('I').value)
    var r1 = Number(document.getElementById('I_1').value)
    var r2 = Number(document.getElementById('I_2').value)

    x = r * r1 * r2

    if (r != 0) {
        Solve = `Общее сопротивление уже известно`;
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
            if (choice == 'parallel') {

                if (r1 * r2 != 0) {
                    r = (r1 + r2) / (r1 * r2)

                    Solve = `${r}`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
                else {
                    Solve = `Перепроверьте введенные данные`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
            }
            else {
                r = r1 + r2

                Solve = `${r}`;
                Solve_1 = ``;
                Solve_2 = ``;
                Solve_3 = ``;
                Solve_4 = ``;
            }
        }
    }

    document.getElementById("Solve_R").innerHTML = Solve;
    document.getElementById("Solve_1_R").innerHTML = Solve_1;
    document.getElementById("Solve_2_R").innerHTML = Solve_2;
    document.getElementById("Solve_3_R").innerHTML = Solve_3;
    document.getElementById("Solve_4_R").innerHTML = Solve_4;
}

function R_1() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var choice = document.getElementById('choice_type').value;
    var r = Number(document.getElementById('I').value)
    var r1 = Number(document.getElementById('I_1').value)
    var r2 = Number(document.getElementById('I_2').value)

    x = r * r1 * r2

    if (r1 != 0) {
        Solve = `Сопротивление 1 уже известно`;
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
            if (choice == 'parallel') {

                if (r2 - r != 0) {
                    r1 = (r2 * r) / (r2 - r)

                    Solve = `${r1}`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
                else {
                    Solve = `Перепроверьте введенные данные`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
            }
            else {
                r1 = r - r2

                Solve = `${r1}`;
                Solve_1 = ``;
                Solve_2 = ``;
                Solve_3 = ``;
                Solve_4 = ``;
            }
        }
    }

    document.getElementById("Solve_R").innerHTML = Solve;
    document.getElementById("Solve_1_R").innerHTML = Solve_1;
    document.getElementById("Solve_2_R").innerHTML = Solve_2;
    document.getElementById("Solve_3_R").innerHTML = Solve_3;
    document.getElementById("Solve_4_R").innerHTML = Solve_4;
}

function R_1() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var choice = document.getElementById('choice_type').value;
    var r = Number(document.getElementById('I').value)
    var r1 = Number(document.getElementById('I_1').value)
    var r2 = Number(document.getElementById('I_2').value)

    x = r * r1 * r2

    if (r2 != 0) {
        Solve = `Сопротивление 2 уже известно`;
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
            if (choice == 'parallel') {

                if (r1 - r != 0) {
                    r2 = (r1 * r) / (r1 - r)

                    Solve = `${r2}`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
                else {
                    Solve = `Перепроверьте введенные данные`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
            }
            else {
                r2 = r - r1

                Solve = `${r2}`;
                Solve_1 = ``;
                Solve_2 = ``;
                Solve_3 = ``;
                Solve_4 = ``;
            }
        }
    }

    document.getElementById("Solve_R").innerHTML = Solve;
    document.getElementById("Solve_1_R").innerHTML = Solve_1;
    document.getElementById("Solve_2_R").innerHTML = Solve_2;
    document.getElementById("Solve_3_R").innerHTML = Solve_3;
    document.getElementById("Solve_4_R").innerHTML = Solve_4;
}