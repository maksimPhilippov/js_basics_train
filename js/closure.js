export function make_money_box() {
    let dollars = 0;
    let crushed = false;
    let pig = draw_pig();

    return [
        function put(count) {
            if (!crushed) {
                dollars += count;
                pig(crushed, dollars);
                return 0;
            }
            return count;
        },
        function crash() {
            if (!crushed) {
                crushed = true;
                pig(crushed, dollars);
                return dollars;
            }
            return 0;
        },
    ];
}

function pig_counter() {
    let count = 0;
    return function () {
        return "pig " + String(count++);
    };
}
export const get_pig_name = pig_counter();

function calculate_pig_size(dollars) {
    return String(10 + dollars) + "px";
}

function draw_pig() {
    let pig_img = document.createElement("span");
    document.querySelector(".pig-shelf").append(pig_img);
    pig_img.innerHTML = "&#128022;";

    pig_img.style.fontSize = calculate_pig_size(0);
    return function redraw_pig(crushed, dollars) {
        if (crushed) {
            pig_img.innerHTML = "&#128181;<br>" + String(dollars);
        } else {
            pig_img.style.fontSize = calculate_pig_size(dollars);
        }
    };
}
