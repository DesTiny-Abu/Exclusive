const storeProduct = [
    {
        id: 1,
        imgPath: "./images/frame1.png",
        description: "Loveseat sofa",
        price: "$199"
    },
    {
        id: 2,
        imgPath: "./images/frame2.png",
        description: "Table lamp",
        price: "$24.99"
    },
    {
        id: 3,
        imgPath: "./images/frame3.png",
        description: "Beige Table lamp",
        price: "$24.99"
    },
    {
        id: 4,
        imgPath: "./images/frame4.png",
        description: "Bamboo Basket",
        price: "$34.12"
    },
]


let containerElem = document.getElementById("New");

// mapping through an array
storeProduct.map((product) => {
    containerElem.innerHTML += `
        <div class="">
                <img src=${product.imgPath} alt="" class="card-img">
                <h4 class="card-discription">${product.description}</h4>
                <p class="card-price">${product.price}</p>
        </div>
    `
})


const names = ["wealth", "miracle", "destiny", "golden", "gift", "excel", "wisdom", "rowland", "great", "codeplay"]
names[0] = "johnson";
names.push("treasure", "evelyn");
names.pop();
names.unshift("chinemerem", "osozele");
names.shift();
names.reverse();
let selectedNames = names.slice(1, 4);
const ulElem = document.getElementById("student-list");
selectedNames.map((item) => {
    ulElem.innerHTML += `
       <li>${item}</li>`
})
names[0] = "johnson";

const clubs = ["asernal", "chelsea", "barca"];
