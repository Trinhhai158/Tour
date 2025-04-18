const robot = document.querySelector(".robot");
const wave = document.querySelector(".wave");
const tourItem = document.querySelectorAll(".tour_item");
const plan = document.querySelector(".plane");
const titileTour = document.getElementById("Tour");
const textModelRobot = document.querySelector(".text_model_robot");
const evaluationItem = document.querySelectorAll(".evaluation_Item");

// Hàm di chuyển máy bay, bay ngẫu nhiên toàn trình duyệt
const handlePlan = () => {
    const xPlan = Math.floor(Math.random() * (window.innerWidth - 200));
    const yPlan = Math.floor(Math.random() * (window.innerHeight - 200));
    plan.style.top = xPlan + "px";
    plan.style.right = yPlan + "px";
};
setInterval(() => {
    handlePlan();
}, 2000);

// Hiển thị thông báo khi ấn vô robot
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
        textModelRobot.textContent = "Chào mừng các bạn tới với tour du lịch";
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
    const top = Math.floor(window.scrollY);
    // console.log(top);

    if (top > 280 && top < 3100) {
        titileTour.style.transform = "rotateZ(4deg)";
        titileTour.style.opacity = 1;
        tourItem.forEach((rs, i) => {
            rs.style.opacity = 1;
            rs.style.transform = "scale(1)";
        });
        wave.style.opacity = 0;
        setTimeout(() => {
            wave.style.display = "none";
        }, 3000);
        evaluationItem[0].style.transform = "translateX(-100%)";
        evaluationItem[2].style.transform = "translateX(100%)";
    } else if (top > 3100) {
        evaluationItem[0].style.transform = "translateX(0)";
        evaluationItem[2].style.transform = "translateX(0)";
        tourItem.forEach((rs, i) => {
            rs.style.opacity = 0;
            rs.style.transform = "scale(0)";
        });
    } else {
        tourItem.forEach((rs, i) => {
            rs.style.opacity = 0;
            rs.style.transform = "scale(0)";
        });
        titileTour.style.transform = "rotateZ(0)";
        titileTour.style.opacity = 0;
        evaluationItem[0].style.transform = "translateX(-100%)";
        evaluationItem[2].style.transform = "translateX(100%)";
    }
};

window.addEventListener("scroll", handleWaveScroll);
