function quantity() {
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;

    var q = Number(document.getElementById('quantity').value);
    var c = Number(document.getElementById('capacity').value);
    var m = Number(document.getElementById('mass').value);
    var t2 = Number(document.getElementById('temp_2').value);
    var t1 = Number(doxument.getElementById('temp_1'));

    x = q * c * m * t1 * t2;

    if (q != 0) {
        Solve = `Расстояние уже известно`;
        Solve_1 = ``;
        Solve_2 = ``;
        Solve_3 = ``;
        Solve_4 = ``;
    }
    else {
        if (x != 0) {
            Solve = `Все данные известны`;
            Solve_1 = ``;
            Solve_2 = ``;
            Solve_3 = ``;
            Solve_4 = ``;
        }

        else {
        }
    }
}