function switch_button(state) {
    let button = document.querySelector(".long-loading-button");
    if (state == true) {
        button.addEventListener("click", hard_work);
        button.classList.remove("disabled-button");
        button.classList.add("enabled-button");
    } else if (state == false) {
        button.removeEventListener("click", hard_work);
        button.classList.remove("enabled-button");
        button.classList.add("disabled-button");
    }
}

function hard_work() {
    switch_button(false);
    let work = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hard work is done!");
        }, 1500);
    });

    work.then((result) => {
        alert(result);
        switch_button(true);
    });
}

export function init_promises_section() {
    switch_button(true);
}
