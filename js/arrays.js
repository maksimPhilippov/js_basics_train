let array;

function render_array() {
    let canvas = document.querySelector(".array-canvas");
    canvas.innerHTML = array.reduce((acc, item) => {
        return acc + '<span class="array-element">' + String(item) + "</span>";
    }, "");
}

function write_array() {
    let input = document.querySelector(".array-input");
    input.value = array.join(", ");
}

function refresh_array_view() {
    render_array();
    write_array();
}

export function read_array() {
    let input = document.querySelector(".array-input").value;

    array = input.split(",").map((number) => {
        return parseFloat(number);
    });

    if (isNaN(array[array.length - 1])) {
        array.pop();
    }

    refresh_array_view();
}

export function sort_array() {
    array.sort((first, second) => {
        return first > second;
    });
    refresh_array_view();
}

export function filter_array() {}
