// ========================================
// LOST & FOUND PORTAL
// Browse Items JavaScript
// ========================================

// Get HTML Elements
const searchInput = document.getElementById("itemSearch");
const searchButton = document.getElementById("searchButton");
const statusFilter = document.getElementById("statusFilter");
const categoryFilter = document.getElementById("categoryFilter");
const itemsGrid = document.getElementById("itemsGrid");
const noResults = document.getElementById("noResults");

// Store fetched items
let allItems = [];

// ========================================
// LOAD ITEMS FROM BACKEND
// ========================================

async function displaySavedItems() {

    try {

        itemsGrid.innerHTML = "";

        const response = await fetch("https://lost-and-found-items-ygfn.onrender.com/api/items");

        const result = await response.json();

        allItems = result.data || [];

        renderItems(allItems);

    } catch (error) {

        console.error("Error loading items:", error);

        itemsGrid.innerHTML =
            "<h3>Unable to load items.</h3>";

    }

}

// ========================================
// RENDER ITEMS
// ========================================

function renderItems(items) {

    itemsGrid.innerHTML = "";

    if (items.length === 0) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";

    items.forEach(function (item) {

        const card = document.createElement("div");

        card.className = "browse-item-card";

        card.dataset.status = item.type;

        card.dataset.category = item.category;

        let imageContent = "📦";

        if (item.image && item.image !== "") {

            imageContent =
                `<img src="${item.image}" alt="${item.itemName}">`;

        }

        card.innerHTML = `

            <div class="browse-item-image">

                ${imageContent}

            </div>

            <div class="browse-item-info">

                <span class="status ${item.type}">

                    ${item.type.toUpperCase()}

                </span>

                <h3>${item.itemName}</h3>

                <p>📍 ${item.location}</p>

                <p>📅 ${item.date}</p>

                <p class="item-description">

                    ${item.description}

                </p>

                <button
                    class="details-btn"
                    onclick="viewSavedItem('${item._id}')"
                >
                    View Details
                </button>

            </div>

        `;

        itemsGrid.appendChild(card);

    });

}

// ========================================
// FILTER ITEMS
// ========================================

function filterItems() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const selectedStatus =
        statusFilter.value;

    const selectedCategory =
        categoryFilter.value;

    const filteredItems = allItems.filter(function (item) {

        const text =
            (
                item.itemName +
                " " +
                item.description +
                " " +
                item.location
            ).toLowerCase();

        const matchesSearch =
            text.includes(searchText);

        const matchesStatus =
            selectedStatus === "all" ||
            item.type === selectedStatus;

        const matchesCategory =
            selectedCategory === "all" ||
            item.category === selectedCategory;

        return (
            matchesSearch &&
            matchesStatus &&
            matchesCategory
        );

    });

    renderItems(filteredItems);

}

// ========================================
// VIEW ITEM DETAILS
// ========================================

async function viewSavedItem(id) {

    try {

        const response = await fetch("https://lost-and-found-items-ygfn.onrender.com/api/items");

        const result = await response.json();

        const item = result.data;

        alert(

            "Item: " + item.itemName +

            "\n\nStatus: " + item.type.toUpperCase() +

            "\n\nCategory: " + item.category +

            "\n\nLocation: " + item.location +

            "\n\nDate: " + item.date +

            "\n\nDescription: " + item.description +

            "\n\nReported By: " + item.name +

            "\n\nEmail: " + item.email +

            "\n\nPhone: " + item.phone

        );

    } catch (error) {

        console.error(error);

        alert("Unable to load item details.");

    }

}

// ========================================
// EVENTS
// ========================================

searchButton.addEventListener("click", filterItems);

searchInput.addEventListener("input", filterItems);

statusFilter.addEventListener("change", filterItems);

categoryFilter.addEventListener("change", filterItems);

// ========================================
// LOAD ITEMS
// ========================================

displaySavedItems();