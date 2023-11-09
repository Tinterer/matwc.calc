function U() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var choice = document.getElementById('choice_type').value;
    var u = Number(document.getElementById('U').value)
    var u1 = Number(document.getElementById('U_1').value)
    var u2 = Number(document.getElementById('U_2').value)

    x = u * u1 * u2

    if (u != 0) {
        Solve = `Общее напряжение уже известно`;
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
                u = u1 + u2

                Solve = `${u}`;
                Solve_1 = ``;
                Solve_2 = ``;
                Solve_3 = ``;
                Solve_4 = ``;
            }
            else {

                if (u1 == u2) {
                    u = u1

                    Solve = `${u}`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
                else {
                    Solve = `Проверьте правильность введенных данных`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
            }
        }
    }

    document.getElementById("Solve_U").innerHTML = Solve;
    document.getElementById("Solve_1_U").innerHTML = Solve_1;
    document.getElementById("Solve_2_U").innerHTML = Solve_2;
    document.getElementById("Solve_3_U").innerHTML = Solve_3;
    document.getElementById("Solve_4_U").innerHTML = Solve_4;
}

function U_1() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var choice = document.getElementById('choice_type').value;
    var u = Number(document.getElementById('U').value)
    var u1 = Number(document.getElementById('U_1').value)
    var u2 = Number(document.getElementById('U_2').value)

    x = u * u1 * u2

    if (u1 != 0) {
        Solve = `Напряжение 1 уже известно`;
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
                u1 = u - u2

                Solve = `${u1}`;
                Solve_1 = ``;
                Solve_2 = ``;
                Solve_3 = ``;
                Solve_4 = ``;
            }
            else {

                if (u == u2) {
                    u1 = u2

                    Solve = `${u1}`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
                else {
                    Solve = `Проверьте правильность введенных данных`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
            }
        }
    }

    document.getElementById("Solve_U").innerHTML = Solve;
    document.getElementById("Solve_1_U").innerHTML = Solve_1;
    document.getElementById("Solve_2_U").innerHTML = Solve_2;
    document.getElementById("Solve_3_U").innerHTML = Solve_3;
    document.getElementById("Solve_4_U").innerHTML = Solve_4;
}

function U_2() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var choice = document.getElementById('choice_type').value;
    var u = Number(document.getElementById('U').value)
    var u1 = Number(document.getElementById('U_1').value)
    var u2 = Number(document.getElementById('U_2').value)

    x = u * u1 * u2

    if (u != 0) {
        Solve = `Напряжение 2 уже известно`;
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
                u2 = u -u1

                Solve = `${u2}`;
                Solve_1 = ``;
                Solve_2 = ``;
                Solve_3 = ``;
                Solve_4 = ``;
            }
            else {

                if (u1 == u) {
                    u2 = u1

                    Solve = `${u2}`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
                else {
                    Solve = `Проверьте правильность введенных данных`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
            }
        }
    }

    document.getElementById("Solve_U").innerHTML = Solve;
    document.getElementById("Solve_1_U").innerHTML = Solve_1;
    document.getElementById("Solve_2_U").innerHTML = Solve_2;
    document.getElementById("Solve_3_U").innerHTML = Solve_3;
    document.getElementById("Solve_4_U").innerHTML = Solve_4;
}