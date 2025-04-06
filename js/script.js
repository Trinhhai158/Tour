const robot = document.querySelector(".robot");
const wave = document.querySelector(".wave");
const tourItem = document.querySelectorAll(".tour_item");
const plan = document.querySelector(".plane");
const titileTour = document.getElementById("Tour");
const textModelRobot = document.querySelector(".text_model_robot");

const handlePlan = () => {
    const xPlan = Math.floor(Math.random() * (window.innerWidth - 200));
    const yPlan = Math.floor(Math.random() * (window.innerHeight - 200));
    plan.style.top = xPlan + "px";
    plan.style.right = yPlan + "px";
};
setInterval(() => {
    handlePlan();
}, 2000);
const handleModelRobot = () => {
    const divModel = document.createElement("div");
    const CotentModel = document.querySelector(".content_model_robot");
    divModel.style.position = "fixed";
    divModel.style.inset = "0";
    divModel.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    divModel.style.backdropFilter = "blur(5px)"; // Optional: adds blur effect
    divModel.style.zIndex = "9998"; // Ensure it's above other elements
    CotentModel.style.display = "block";
    // Add the modal to the document body
    document.body.appendChild(divModel);

    setTimeout(() => {
        textModelRobot.textContent = "Web development : Trịnh Thế Thanh Hải";
    }, 1);

    // Optional: close modal when clicked
    divModel.addEventListener("click", () => {
        CotentModel.style.display = "none";

        document.body.removeChild(divModel);
    });
};

// Add click event listener to robot
if (robot) {
    robot.addEventListener("click", handleModelRobot);
} else {
    console.error("Robot element not found");
}

// Hàm xử lý kéo thanh kéo scroll

const handleWaveScroll = () => {
    const top = window.scrollY;
    if (top > 280) {
        titileTour.style.transform = "rotateZ(4deg)";
        titileTour.style.opacity = 1;
        tourItem.forEach((rs, i) => {
            rs.style.opacity = 1;
            rs.style.transform = "scale(1)";
        });
        wave.style.opacity = 0;
        setTimeout(() => {
            wave.style.display = "none";
        }, 2000);
    } else {
        tourItem.forEach((rs, i) => {
            rs.style.opacity = 0;
            rs.style.transform = "scale(0)";
        });
        titileTour.style.transform = "rotateZ(0)";
        titileTour.style.opacity = 0;
    }
};

window.addEventListener("scroll", handleWaveScroll);
