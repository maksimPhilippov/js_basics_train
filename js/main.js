import { read_array, sort_array } from "./arrays.js";
import { init_promises_section } from "./promises.js";

function init() {
    init_promises_section();
    let array_input = document.querySelector(".array-input");
    let sort_button = document.querySelector(".sort-button");
    array_input.addEventListener("change", read_array);
    sort_button.addEventListener("click", sort_array);
}

window.onload = init;
