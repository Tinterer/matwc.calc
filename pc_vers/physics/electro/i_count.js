function I() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var choice = document.getElementById('choice_type').value;
    var i = Number(document.getElementById('I').value)
    var i1 = Number(document.getElementById('I_1').value)
    var i2 = Number(document.getElementById('I_2').value)

    x = i * i1 * i2

    if (i != 0) {
        Solve = `Общая сила тока уже известна`;
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
                i = i1 + i2

                Solve = `${i}`;
                Solve_1 = ``;
                Solve_2 = ``;
                Solve_3 = ``;
                Solve_4 = ``;
            }
            else {

                if (i1 == i2) {
                    i = i1

                    Solve = `${i}`;
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

    document.getElementById("Solve_I").innerHTML = Solve;
    document.getElementById("Solve_1_I").innerHTML = Solve_1;
    document.getElementById("Solve_2_I").innerHTML = Solve_2;
    document.getElementById("Solve_3_I").innerHTML = Solve_3;
    document.getElementById("Solve_4_I").innerHTML = Solve_4;
}

function I_1() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var choice = document.getElementById('choice_type').value;
    var i = Number(document.getElementById('I').value)
    var i1 = Number(document.getElementById('I_1').value)
    var i2 = Number(document.getElementById('I_2').value)

    x = i * i1 * i2

    if (i != 0) {
        Solve = `Сила тока 1 уже известна`;
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
                i1 = i - i2

                Solve = `${i1}`;
                Solve_1 = ``;
                Solve_2 = ``;
                Solve_3 = ``;
                Solve_4 = ``;
            }
            else {

                if (ii == i2) {
                    i1 = i2

                    Solve = `${i1}`;
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

    document.getElementById("Solve_I").innerHTML = Solve;
    document.getElementById("Solve_1_I").innerHTML = Solve_1;
    document.getElementById("Solve_2_I").innerHTML = Solve_2;
    document.getElementById("Solve_3_I").innerHTML = Solve_3;
    document.getElementById("Solve_4_I").innerHTML = Solve_4;
}

function I_2() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var choice = document.getElementById('choice_type').value;
    var i = Number(document.getElementById('I').value)
    var i1 = Number(document.getElementById('I_1').value)
    var i2 = Number(document.getElementById('I_2').value)

    x = i * i1 * i2

    if (i != 0) {
        Solve = `Сила тока 2 уже известна`;
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
                i2 = i -i1

                Solve = `${i2}`;
                Solve_1 = ``;
                Solve_2 = ``;
                Solve_3 = ``;
                Solve_4 = ``;
            }
            else {

                if (i1 == i) {
                    i2 = i1

                    Solve = `${i2}`;
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

    document.getElementById("Solve_I").innerHTML = Solve;
    document.getElementById("Solve_1_I").innerHTML = Solve_1;
    document.getElementById("Solve_2_I").innerHTML = Solve_2;
    document.getElementById("Solve_3_I").innerHTML = Solve_3;
    document.getElementById("Solve_4_I").innerHTML = Solve_4;
}