import { read_array, sort_array } from "./arrays.js";
import { get_pig_name, make_money_box } from "./closure.js";
import { init_promises_section } from "./promises.js";

function create_inline_button(text, callback) {
    let button = document.createElement("div");
    button.addEventListener("click", callback);
    button.classList.add("my-button");
    button.classList.add("enabled-button");
    button.innerHTML = text;

    return button;
}

function create_pig() {
    let callbacks = make_money_box();
    let feed_button = create_inline_button("feed &#128184;", callbacks[0].bind(this, 1));
    let crash_button = create_inline_button("crash &#128296;", callbacks[1]);

    let pig_menu = document.createElement("div");
    pig_menu.classList.add("pig-menu");
    pig_menu.innerHTML = get_pig_name() + "<br>";
    pig_menu.append(feed_button, crash_button);

    document.querySelector(".menu-container").append(pig_menu);
}

function init() {
    init_promises_section();
    let array_input = document.querySelector(".array-input");
    let sort_button = document.querySelector(".sort-button");
    let pig_creator = document.querySelector(".pig-creator");
    array_input.addEventListener("change", read_array);
    sort_button.addEventListener("click", sort_array);
    pig_creator.addEventListener("click", create_pig);
}

window.onload = init;
