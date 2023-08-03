setInterval(() => {
    var list = document.querySelectorAll('.resize_div');
    console.log(list);
    var counter = 1;
    list.forEach(ele => {
        ele.classList.remove('resize_div_rando');
        // console.log(list.length)
        const random_number = Math.floor(Math.random() * list.length) + 1;
        console.log(random_number);

        if (counter < (list.length)) {
            counter++
            // ele.
            list[random_number].classList.add('resize_div_rando');
        }
    });
    // update();
}, 5000);

// function update() {
//     gsap.from(".resize_div_rando", {
//         transformOrigin: "center",
//         scale: 0.5,
//         repeat: -1,
//         duration: 2
//             // stagger: 0.5,
//     })
// }