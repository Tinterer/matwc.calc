function Mass_1() {

    var Solve;
    var Solve1;
    var Solve2;
    var Solve3;
    var Solve4;

    var m1 = Number(document.getElementById("mass_1").value);
    var v1 = Number(document.getElementById("velocity_1").value);
    var m2 = Number(document.getElementById("mass_2").value);
    var v2 = Number(document.getElementById("velocity_2").value);
    var v = Number(document.getElementById("velocity_after").value);

    x = m1 * v1 * m2 * v2 * v

    if (x != 0) {
        Solve = `Все данные известны`;
        Solve1 = ` `;
        Solve2 = ` `;
        Solve3 = ` `;
        Solve4 = ` `;
    }
    else {
        if (m1 != 0) {
            Solve = `Искомое значение уже известно`;
            Solve1 = ` `;
            Solve2 = ` `;
            Solve3 = ` `;
            Solve4 = ` `;
        }
        else {
            if ((v1 - v )!= 0 && m2 != 0 && (v - v2) != 0) {
                m1 = m2 * (v - v2) / (v1 - v)

                Solve = `${m1}`;
                Solve1 = ``;
                Solve2 = ``;
                Solve3 = ``;
                Solve4 = ``;
            } else {
                Solve = `Проверьте правильность введенных данных`;
                Solve1 = ``;
                Solve2 = ``;
                Solve3 = ``;
                Solve4 = ``;
            }

        }
    }
    
    document.getElementById("Solve_pulse").innerHTML = Solve;
    document.getElementById("Solve_1_pulse").innerHTML = Solve1;
    document.getElementById("Solve_2_pulse").innerHTML = Solve2;
    document.getElementById("Solve_3_pulse").innerHTML = Solve3;
    document.getElementById("Solve_4_pulse").innerHTML = Solve4;

}

function Velocity_1() {

    var Solve;
    var Solve1;
    var Solve2;
    var Solve3;
    var Solve4;

    var m1 = Number(document.getElementById('mass_1').value);
    var v1 = Number(document.getElementById('velocity_1').value);
    var m2 = Number(document.getElementById('mass_2').value);
    var v2 = Number(document.getElementById('velocity_2').value);
    var v = Number(document.getElementById('velocity_after').value);

    x = m1 * v1 * m2 * v2 * v

    if (x != 0) {
        Solve = `Все данные известны`;
        Solve1 = ``;
        Solve2 = ``;
        Solve3 = ``;
        Solve4 = ``;
    }
    else {
        if (v1 != 0) {
            Solve = `Искомое значение уже известно`;
            Solve1 = ``;
            Solve2 = ``;
            Solve3 = ``;
            Solve4 = ``;
        }
        else {
            if (m1 != 0) {
                v1 = v + m2 * (v - v2)/m1

                Solve = `${v1}`;
                Solve1 = ``;
                Solve2 = ``;
                Solve3 = ``;
                Solve4 = ``;
            } else {
                Solve = `Проверьте правильность введенных данных`;
                Solve1 = ``;
                Solve2 = ``;
                Solve3 = ``;
                Solve4 = ``;
            }

        }
    }
    document.getElementById("Solve_pulse").innerHTML = Solve;
    document.getElementById("Solve_1_pulse").innerHTML = Solve1;
    document.getElementById("Solve_2_pulse").innerHTML = Solve2;
    document.getElementById("Solve_3_pulse").innerHTML = Solve3;
    document.getElementById("Solve_4_pulse").innerHTML = Solve4;

}

function Mass_2() {

    var Solve;
    var Solve1;
    var Solve2;
    var Solve3;
    var Solve4;

    var m1 = Number(document.getElementById('mass_1').value);
    var v1 = Number(document.getElementById('velocity_1').value);
    var m2 = Number(document.getElementById('mass_2').value);
    var v2 = Number(document.getElementById('velocity_2').value);
    var v = Number(document.getElementById('velocity_after').value);

    x = m1 * v1 * m2 * v2 * v

    if (x != 0) {
        Solve = `Все данные известны`;
        Solve1 = ``;
        Solve2 = ``;
        Solve3 = ``;
        Solve4 = ``;
    }
    else {
        if (m1 != 0) {
            Solve = `Искомое значение уже известно`;
            Solve1 = ``;
            Solve2 = ``;
            Solve3 = ``;
            Solve4 = ``;
        }
        else {
            if (v1 - v != 0 && m2 != 0 && v - v2 != 0) {
                m2 = m1 * (v1 - v) / (v - v2)

                Solve = `${m2}`;
                Solve1 = ``;
                Solve2 = ``;
                Solve3 = ``;
                Solve4 = ``;
            } else {
                Solve = `Проверьте правильность введенных данных`;
                Solve1 = ``;
                Solve2 = ``;
                Solve3 = ``;
                Solve4 = ``;
            }

        }
    }
    document.getElementById("Solve_pulse").innerHTML = Solve;
    document.getElementById("Solve_1_pulse").innerHTML = Solve1;
    document.getElementById("Solve_2_pulse").innerHTML = Solve2;
    document.getElementById("Solve_3_pulse").innerHTML = Solve3;
    document.getElementById("Solve_4_pulse").innerHTML = Solve4;

}

function Velocity_2() {

    var Solve;
    var Solve1;
    var Solve2;
    var Solve3;
    var Solve4;

    var m1 = Number(document.getElementById('mass_1').value);
    var v1 = Number(document.getElementById('velocity_1').value);
    var m2 = Number(document.getElementById('mass_2').value);
    var v2 = Number(document.getElementById('velocity_2').value);
    var v = Number(document.getElementById('velocity_after').value);

    x = m1 * v1 * m2 * v2 * v

    if (x != 0) {
        Solve = `Все данные известны`;
        Solve1 = ``;
        Solve2 = ``;
        Solve3 = ``;
        Solve4 = ``;
    }
    else {
        if (v2 != 0) {
            Solve = `Искомое значение уже известно`;
            Solve1 = ``;
            Solve2 = ``;
            Solve3 = ``;
            Solve4 = ``;
        }
        else {
            if (m2 != 0) {
                v2 = v + m1 * (v - v1) / m2

                Solve = `${v2}`;
                Solve1 = ``;
                Solve2 = ``;
                Solve3 = ``;
                Solve4 = ``;
            } else {
                Solve = `Проверьте правильность введенных данных`;
                Solve1 = ``;
                Solve2 = ``;
                Solve3 = ``;
                Solve4 = ``;
            }

        }
    }
    document.getElementById("Solve_pulse").innerHTML = Solve;
    document.getElementById("Solve_1_pulse").innerHTML = Solve1;
    document.getElementById("Solve_2_pulse").innerHTML = Solve2;
    document.getElementById("Solve_3_pulse").innerHTML = Solve3;
    document.getElementById("Solve_4_pulse").innerHTML = Solve4;

}

function Velocity() {

    var Solve;
    var Solve1;
    var Solve2;
    var Solve3;
    var Solve4;

    var m1 = Number(document.getElementById('mass_1').value);
    var v1 = Number(document.getElementById('velocity_1').value);
    var m2 = Number(document.getElementById('mass_2').value);
    var v2 = Number(document.getElementById('velocity_2').value);
    var v = Number(document.getElementById('velocity_after').value);

    x = m1 * v1 * m2 * v2 * v

    if (x != 0) {
        Solve = `Все данные известны`;
        Solve1 = ``;
        Solve2 = ``;
        Solve3 = ``;
        Solve4 = ``;
    }
    else {
        if (v != 0) {
            Solve = `Искомое значение уже известно`;
            Solve1 = ``;
            Solve2 = ``;
            Solve3 = ``;
            Solve4 = ``;
        }
        else {
            if (m1 + m2 != 0) {
                v = (m1*v1 + m2*v2) / (m1 + m2)

                Solve = `${v}`;
                Solve1 = ``;
                Solve2 = ``;
                Solve3 = ``;
                Solve4 = ``;
            } else {
                Solve = `Проверьте правильность введенных данных`;
                Solve1 = ``;
                Solve2 = ``;
                Solve3 = ``;
                Solve4 = ``;
            }

        }
    }
    document.getElementById("Solve_pulse").innerHTML = Solve;
    document.getElementById("Solve_1_pulse").innerHTML = Solve1;
    document.getElementById("Solve_2_pulse").innerHTML = Solve2;
    document.getElementById("Solve_3_pulse").innerHTML = Solve3;
    document.getElementById("Solve_4_pulse").innerHTML = Solve4;

}