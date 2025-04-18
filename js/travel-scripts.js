const tours = [
    {
        id: 1,
        image: "../assets/imgs/img_tour-1.jpg",
        alt: "Hạ Long Bay Tour",
        badge: "BEST SELLER",
        title: "Hạ Long Bay Cruise",
        duration: "3 days",
        maxGroupSize: 15,
        rating: 4.9,
        location: "Quảng Ninh, Việt Nam",
        currentPrice: 199,
        originalPrice: 299,
    },
    {
        id: 2,
        image: "../assets/imgs/img_tour-1.jpg",
        alt: "Phú Quốc Island Tour",
        badge: "BEACH VACATION",
        title: "Phú Quốc Getaway",
        duration: "4 days",
        maxGroupSize: 12,
        rating: 4.8,
        location: "Phú Quốc, Việt Nam",
        currentPrice: 249,
        originalPrice: 349,
    },
    {
        id: 3,
        image: "../assets/imgs/img_tour-1.jpg",
        alt: "Sapa Trekking Tour",
        badge: "ADVENTURE",
        title: "Sapa Mountain Trek",
        duration: "2 days",
        maxGroupSize: 10,
        rating: 4.7,
        location: "Lào Cai, Việt Nam",
        currentPrice: 149,
        originalPrice: 199,
    },
    {
        id: 4,
        image: "../assets/imgs/img_tour-1.jpg",
        alt: "Hội An Ancient Town",
        badge: "CULTURAL",
        title: "Hội An Discovery",
        duration: "1 day",
        maxGroupSize: 8,
        rating: 4.9,
        location: "Quảng Nam, Việt Nam",
        currentPrice: 89,
        originalPrice: 120,
    },
    {
        id: 5,
        image: "../assets/imgs/img_tour-1.jpg",
        alt: "Đà Nẵng City Tour",
        badge: "CITY TOUR",
        title: "Đà Nẵng Highlights",
        duration: "2 days",
        maxGroupSize: 12,
        rating: 4.6,
        location: "Đà Nẵng, Việt Nam",
        currentPrice: 129,
        originalPrice: 179,
    },
    {
        id: 6,
        image: "../assets/imgs/img_tour-1.jpg",
        alt: "Ninh Bình Boat Tour",
        badge: "NATURE",
        title: "Ninh Bình Exploration",
        duration: "1 day",
        maxGroupSize: 10,
        rating: 4.8,
        location: "Ninh Bình, Việt Nam",
        currentPrice: 79,
        originalPrice: 99,
    },
    {
        id: 7,
        image: "../assets/imgs/img_tour-1.jpg",
        alt: "Mù Cang Chải Tour",
        badge: "PHOTO TOUR",
        title: "Mù Cang Chải Rice Terraces",
        duration: "3 days",
        maxGroupSize: 8,
        rating: 4.7,
        location: "Yên Bái, Việt Nam",
        currentPrice: 179,
        originalPrice: 229,
    },
    {
        id: 8,
        image: "../assets/imgs/img_tour-1.jpg",
        alt: "Bali Island Tour",
        badge: "INTERNATIONAL",
        title: "Bali Paradise Trip",
        duration: "5 days",
        maxGroupSize: 15,
        rating: 4.9,
        location: "Bali, Indonesia",
        currentPrice: 499,
        originalPrice: 699,
    },
    {
        id: 9,
        image: "../assets/imgs/img_tour-1.jpg",
        alt: "Bangkok City Tour",
        badge: "CITY TOUR",
        title: "Bangkok Adventure",
        duration: "4 days",
        maxGroupSize: 12,
        rating: 4.5,
        location: "Bangkok, Thailand",
        currentPrice: 299,
        originalPrice: 399,
    },
    {
        id: 10,
        image: "../assets/imgs/img_tour-1.jpg",
        alt: "Singapore Tour",
        badge: "LUXURY",
        title: "Singapore City Escape",
        duration: "3 days",
        maxGroupSize: 10,
        rating: 4.8,
        location: "Singapore",
        currentPrice: 399,
        originalPrice: 499,
    },
];
const travelTourRow = document.querySelector(".travel-tour-row");
const travelInput = document.querySelector(".travel-search-input");

// Hàm hiển thị tour
function showTours(tourList) {
    const tourMap = tourList
        .map((tour) => {
            return `
        <div class="col-md-6 col-lg-4 travel-tour-card-wrapper">
          <article class="travel-tour-card">
            <div class="travel-tour-image">
              <img src="${tour.image}" alt="${tour.alt}">
              ${
                  tour.badge
                      ? `<span class="travel-tour-badge">${tour.badge}</span>`
                      : ""
              }
            </div>
            <div class="travel-tour-content">
              <h2 class="travel-tour-title">${tour.title}</h2>
              <div class="travel-tour-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${tour.location}</span>
              </div>
              <div class="travel-tour-price">
                <span class="travel-current-price">$${tour.currentPrice}</span>
                ${
                    tour.originalPrice
                        ? `<span class="travel-original-price">$${tour.originalPrice}</span>`
                        : ""
                }
              </div>
            </div>
            <button class="travel-book-button" data-tour_id="${tour.id}">
              <i class="fas fa-ticket-alt"></i> Đặt Tour Ngay
            </button>
          </div>
            </div>
          </article>
        </div>
        `;
        })
        .join("");

    travelTourRow.innerHTML = tourMap;
}
// Hiển thị tất cả tour khi trang được tải
showTours(tours);

// Hàm tìm kiếm
const searchTours = () => {
    const keyword = travelInput.value.toLowerCase().trim();
    const results = tours.filter((tour) => {
        return tour.title.toLowerCase().includes(keyword);
    });

    if (keyword === null) {
        showTours(tours);
        return;
    }
    // Hiển thị thông báo nếu không có kết quả
    else if (results.length === 0) {
        travelTourRow.innerHTML = `
            <div class="col-12 no-results">
                <p>Không tìm thấy tour nào phù hợp với "${keyword}"</p>
            </div>
        `;
    } else {
        showTours(results);
    }
};

// Gắn sự kiện khi nhập input
travelInput.addEventListener("input", searchTours);

// Lưu trữ tour đã đặt
let bookedTours = JSON.parse(localStorage.getItem("bookedTours")) || [];

// Hàm đặt tour

const handleBookBtn = (e) => {
    const tourBookId = e.target.dataset.tour_id;
    // console.log(tourBookId);

    const tour = tours.find((t) => t.id == tourBookId);

    alert("chúc mừng bạn đã đặt tour thành công");
    console.log(tour);

    bookedTours.push({
        id: tour.id,
        title: tour.title,
        image: tour.image,
        currentPrice: tour.currentPrice,
    });

    localStorage.setItem("bookedTours", JSON.stringify(bookedTours));
    renderBookedTours();
};
const bookBtn = document.querySelectorAll(".travel-book-button");
bookBtn.forEach((rs) => {
    rs.addEventListener("click", handleBookBtn);
});

// Hàm hiển thị tour đã đặt
function renderBookedTours() {
    const container = document.getElementById("booked-tours-list");
    if (bookedTours.length > 0) {
        container.innerHTML = bookedTours
            .map(
                (tour, ind) => `
        <tr>
          <td><img src="${tour.image}" alt="${tour.title}" width="80"></td>
          <td>${tour.title}</td>
          <td>$${tour.currentPrice}</td>
          <td>
            <button class="delete-btn" data-tour_id_delete="${ind}">Xoá</button>
          </td>
        </tr>
      `
            )
            .join("");
    } else {
        container.innerHTML = ` <tr>
        <td colspan=4 class="not_booked-tour-list"> bạn chưa đặt tour nào</td>
      </tr>`;
    }
}
renderBookedTours();
// xoá item trong danh sách tours
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const tourId = e.target.dataset.tour_id_delete;
        console.log(tourId);

        bookedTours = bookedTours.filter((tour, ind) => ind != tourId);
        alert("Bạn có chắc chắn muốn xoá ?");
        localStorage.setItem("bookedTours", JSON.stringify(bookedTours));
        renderBookedTours();
    }
});

// Load dữ liệu khi trang web được mở
// document.addEventListener("DOMContentLoaded", renderBookedTours);
