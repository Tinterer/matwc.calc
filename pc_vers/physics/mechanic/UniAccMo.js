function Square() {

    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;
    
    var s = Number(document.getElementById("square").value);
    var v0 = Number(document.getElementById("vel_0").value);
    var vk = Number(document.getElementById("vel_k").value);
    var a = Number(document.getElementById("acceler").value);
    var t = Number(document.getElementById("time").value);

    x = v0 * vk * s * a * t

    if (s != 0) {
        Solve = 'Расстояние уже известно';
        Solve_1 = ' ';
        Solve_2 = ' ';
        Solve_3 = ' ';
        Solve_4 = ' ';
    }

    else {
        if (x != 0) {
        Solve = 'Все данные известны.';
        Solve_1 = ' ';
        Solve_2 = ' ';
        Solve_3 = ' ';
        Solve_4 = ' ';
    }
        else {
            if (vk == 0) {
                if (a != 0 && t != 0) {
                    s = v0 * t + (a * t**2)/2

                    Solve = `${a}Так как у нас неизвестна только конечная скорость, то для нахождения перемещения мы можем воспользоваться формулой S = V₀•t + (a • t²)/2`;
                    Solve_1 = `S = ${v0}•${t}+(${a}•${t ** 2})/2 = ${s}`;
                    Solve_2 = `Ответ: ${s}`;
                    Solve_3 = ``;
                    Solve_4 = ``;

                }
                else{
                    Solve = 'Недостаточно данных'
                }
            } else if (v0 == 0) {
                if (a != 0 && t != 0) {
                    s = vk * t - (a * t**2)/2

                    Solve = `Так как у нас неизвестна только начальная скорость, то для нахождения перемещения мы можем воспользоваться формулой S = V•t - (a • t²)/2`
                    Solve_1 = `S = ${vk}*${t} - ${a}*${t ** 2}/2`;
                    Solve_2 = `Ответ: ${s}`;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
                else {
                    Solve = 'Недостаточно данных'
                    Solve_1 = ' ';
                    Solve_2 = ' ';
                    Solve_3 = ' ';
                    Solve_4 = ' ';
                }
            } else if (t == 0) {
                if (a != 0)  {
                    s = (vk**2 - v0**2)/(2 * a)

                    Solve = `${s}`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                } 
                else {
                    Solve = 'Недостаточно данных'
                    Solve_1 = ' ';
                    Solve_2 = ' ';
                    Solve_3 = ' ';
                    Solve_4 = ' ';
                }
            } else if (a == 0) {
                if (t != 0) {
                    s = (v0 + vk) * t/2

                    Solve = ``;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
                else {
                    Solve = 'Недостаточно данных'
                    Solve_1 = ' ';
                    Solve_2 = ' ';
                    Solve_3 = ' ';
                    Solve_4 = ' ';
                }
            }
        }

        
    }
    document.getElementById("Solve_mov").innerHTML = Solve;
    document.getElementById("Solve_1_mov").innerHTML = Solve_1;
    document.getElementById("Solve_2_mov").innerHTML = Solve_2;
    document.getElementById("Solve_3_mov").innerHTML = Solve_3;
    document.getElementById("Solve_4_mov").innerHTML = Solve_4;
}

function Vel() {
    var Result;
    var Solve;
    var Solve_1;
    var Solve_2;
    var Solve_3;
    var Solve_4;
    
    var s = Number(document.getElementById("square").value);
    var v0 = Number(document.getElementById("vel_0").value);
    var vk = Number(document.getElementById("vel_k").value);
    var a = Number(document.getElementById("acceler").value);
    var t = Number(document.getElementById("time").value);

    x = v0 * vk * s * a * t
    i = 1/2

    if (v0 != 0) {
        Solve = 'Начальная скорость уже известна';
        Solve_1 = ' ';
        Solve_2 = ' ';
        Solve_3 = ' ';
        Solve_4 = ' ';
    }
    else {
        if (x != 0) {
            Solve = 'Все данные уже известны';
            Solve_1 = ' ';
            Solve_2 = ' ';
            Solve_3 = ' ';
            Solve_4 = ' ';
        }
        else {
            if (vk == 0) {
                if (t != 0) {
                    v0 = (2 * s - a * t ** 2)/(2 * t)

                    Solve = `${v0}`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                } else {
                    Solve = `Недостаточно даных`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
            } 
            else if (t == 0) {
                if ((2 * a * s - vk ** 2) ** i >= 0) {
                    v0 = (2 * a * s - vk ** 2) ** i

                    Solve = `${v0}`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                } else {
                    Solve = `Недостаточно данных`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
            }
            else if (a == 0) {
                if (t != 0) {
                    v0 = 2 * s - vk * t

                    Solve = `${v0}`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                } else {
                    Solve = `Недостаточно данных`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
            }
            else if (s == 0) {
                if (t != 0) {
                    v0 = vk - a * t

                    Solve = `${v0}`;
                    Solve_1 = ``;
                    Solve_2 = ``;
                    Solve_3 = ``;
                    Solve_4 = ``;
                }
            }
        }                                                                
    }
    document.getElementById("Solve").innerHTML = Solve;
    document.getElementById("Solve_1").innerHTML = Solve_1;
    document.getElementById("Solve_2").innerHTML = Solve_2;
    document.getElementById("Solve_3").innerHTML = Solve_3;
    document.getElementById("Solve_4").innerHTML = Solve_4;
}

function Vel_end() {
    var Result;
    var Solve
    var Solve_1
    var Solve_2
    var Solve_3
    var Solve_4

    var s = Number(document.getElementById("square").value)
    var v0 = Number(document.getElementById("vel_0").value)
    var vk = Number(document.getElementById("vel_k").value)
    var a = Number(document.getElementById("acceler").value)
    var t = Number(document.getElementById("time").value)

    x = v0 * vk * s * a * t
    i = 1/2
    checker = s * v0 * t * a

    if (vk != 0) {
        Solve = 'Конечная скорость уже известна'
        Solve_1 = ' ';
        Solve_2 = ' ';
        Solve_3 = ' ';
        Solve_4 = ' ';
    }
    else {
        if (x != 0) {
            Solve = 'все данные уже известны'
            Solve_1 = ' ';
            Solve_2 = ' ';
            Solve_3 = ' ';
            Solve_4 = ' ';
        }
        if (checker != 0) {
            vk = v0 + a * t

            Solve = `${vk}`
            Solve_1 = ``
            Solve_2 = ``
            Solve_3 = ``
            Solve_4 = ``
        }
        else {
            if (checker != 0) {
                vk = v0 + a * t
    
                Solve = `${vk}`
                Solve_1 = ``
                Solve_2 = ``
                Solve_3 = ``
                Solve_4 = ``
            }
            else {
                if (v0 == 0) {
                    if (t != 0) {
                        vk == (2 * s + a * t ** 2)/2 * t

                        Solve = `${vk}`
                        Solve_1 = ``
                        Solve_2 = ``
                        Solve_3 = ``
                        Solve_4 = ``
                    } else {
                        Solve = `Недостаточно данных`
                        Solve_1 = ``
                        Solve_2 = ``
                        Solve_3 = ``
                        Solve_4 = ``
                    }
                    
                }
                else if (t == 0){
                    if (2 * s * a + v0**2 >= 0) {
                        vk = (2 * a * s + v0 ** 2) ** i

                        Solve = `${vk}`
                        Solve_1 = ``
                        Solve_2 = ``
                        Solve_3 = ``
                        Solve_4 = ``
                    } else {
                        Solve = `Недостаточно даных`
                        Solve_1 = ``
                        Solve_2 = ``
                        Solve_3 = ``
                        Solve_4 = ``
                    }
                } 
                else if (a == 0) {
                    if (t != 0) {
                        vk = (2 * s - v0) / t

                        Solve = `${vk}`
                        Solve_1 = ``
                        Solve_2 = ``
                        Solve_3 = ``
                        Solve_4 = ``
                    }
                    else {
                        Solve = `Недостаточно данных`
                        Solve_1 = ``
                        Solve_2 = ``
                        Solve_3 = ``
                        Solve_4 = ``
                    }
                }
                else if (s == 0){
                    if (t != 0) {
                        vk = v0 + a * t

                        Solve = `${vk}`
                        Solve_1 = ``
                        Solve_2 = ``
                        Solve_3 = ``
                        Solve_4 = ``
                    }
                    else{
                        Solve = `Недостаточно данных`
                        Solve_1 = ``
                        Solve_2 = ``
                        Solve_3 = ``
                        Solve_4 = ``
                    }
                }
            }
            
        }
    }
    document.getElementById("Solve").innerHTML = Solve;
    document.getElementById("Solve_1").innerHTML = Solve_1;
    document.getElementById("Solve_2").innerHTML = Solve_2;
    document.getElementById("Solve_3").innerHTML = Solve_3;
    document.getElementById("Solve_4").innerHTML = Solve_4;
}

function Time() {
    var Result;
    var Solve
    var Solve_1
    var Solve_2
    var Solve_3
    var Solve_4

    var s = Number(document.getElementById("square").value)
    var v0 = Number(document.getElementById("vel_0").value)
    var vk = Number(document.getElementById("vel_k").value)
    var a = Number(document.getElementById("acceler").value)
    var t = Number(document.getElementById("time").value)

    x = v0 * vk * s * a * t
    i = 1/2
    checker = s * v0 * vk * a

    if (t != 0) {
        Solve = 'Время уже известно'
        Solve_1 = ' ';
        Solve_2 = ' ';
        Solve_3 = ' ';
        Solve_4 = ' ';
    }
    else {
        if (x != 0) {
            Solve = 'Все данные уже известны'
            Solve_1 = ' ';
            Solve_2 = ' ';
            Solve_3 = ' ';
            Solve_4 = ' ';
        }
        else if (checker != 0) {
            if (a != 0) {
                t = (vk - v0) / a

                Solve = `${t}`
                Solve_1 = ``
                Solve_2 = ``
                Solve_3 = ``
                Solve_4 = ``
            }
            else {
                Solve = `Проверьте правильность введенных данных.`
                Solve_1 = ``
                Solve_2 = ``
                Solve_3 = ``
                Solve_4 = ``
            }
            
        }

        else {
            if (vk == 0) {
                check = v0 ** 2 + 2 * a * s
                if (check != 0 & a != 0) {
                    t = (-v0 + check ** i)/a
    
                    Solve = `${t}`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
                else {
                    Solve = `недостаточно даных`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
            }
            else if (v0 == 0){
                check = vk ** 2 - 2 * a * s
    
                if (check != 0 & a != 0) {
                    t = (-vk + check ** i) / a
    
                    Solve = `${t}`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
                else {
                    Solve = `недостаточно даных`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
            }
    
            else if (a == 0) {
                if ((v0 + vk) != 0) {
                    t = 2 * s / (v0 + vk)
    
                    Solve = `${t}`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
                else {
                    Solve = `Недостаточно данных`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
            }
            else if (s == 0) {
                if (a != 0) {
                    t = (vk - v0)/a
    
                    Solve = `${t}`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
                else {
                    Solve = `Недостаточно данных`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
            }
        }
    }
    document.getElementById("Solve").innerHTML = Solve;
    document.getElementById("Solve_1").innerHTML = Solve_1;
    document.getElementById("Solve_2").innerHTML = Solve_2;
    document.getElementById("Solve_3").innerHTML = Solve_3;
    document.getElementById("Solve_4").innerHTML = Solve_4;
}

function Acceler() {

    var Result;
    var Solve
    var Solve_1
    var Solve_2
    var Solve_3
    var Solve_4

    var s = Number(document.getElementById("square").value)
    var v0 = Number(document.getElementById("vel_0").value)
    var vk = Number(document.getElementById("vel_k").value)
    var a = Number(document.getElementById("acceler").value)
    var t = Number(document.getElementById("time").value)

    x = v0 * vk * s * a * t
    i = 1/2

    if (a != 0) {
        Solve = `Ускорение уже известно`
        Solve_1 = ``
        Solve_2 = ``
        Solve_3 = ``
        Solve_4 = ``
    }
    else {
        if (x != 0) {
            Solve = `Все данные уже известны`
            Solve_1 = ``
            Solve_2 = ``
            Solve_3 = ``
            Solve_4 = ``
        }
        else {
            if (vk == 0) {
                if (t != 0) {
                    a = (2 * s - 2 * v0 * t)/t**2

                    Solve = ``
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
                else {
                    Solve = `Недостаточно данных`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
            }
            else if (v0 == 0) {
                if (t != 0) {
                    a = (2 * s - 2 * v0 * t) / t**2

                    Solve = ``
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
                else {
                    Solve = `Недостаточно данных`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
            }
            else if (t == 0) {
                if (s != 0) {
                    a = (vk**2 - v0**2)/(2 * s)

                    Solve = ``
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
                else {
                    Solve = `Недостаточно даных`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
            }
            else if (s == 0) {
                if (t != 0) {
                    a = (vk - v0)/t

                    Solve = ``
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
                else {
                    Solve = `Недостаточно данных`
                    Solve_1 = ``
                    Solve_2 = ``
                    Solve_3 = ``
                    Solve_4 = ``
                }
            }
        }
    }
}

