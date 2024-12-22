const jsonData = {
    "accessibility": [
        {
            "id": 1,
            "title": "ניגודיות צבעים",
            "img": "Color.svg",
            "content": "הקפדה על ניגודיות מספקת בין טקסט לרקע כדי להבטיח קריאות.",
            "link": "https://example.com/contrast",
            "tag": "תפיסה"
        },
        {
            "id": 2,
            "title": "טקסט חלופי לתמונות",
            "img": "AltText.svg",
            "content": "הוספת טקסט חלופי לכל תמונה באתר לצורך שימוש במכשירי קריאת מסך ונגישות אתרים.",
            "link": "https://example.com/alt-text",
            "tag": "תפיסה"
        },
        {
            "id": 3,
            "title": "ניווט מקלדת",
            "img": "KeaBoard.svg",
            "content": "האתר צריך להיות נגיש לשימוש במקלדת בלבד בכדי ליצור ניווט נוח ונגיש באתר.",
            "link": "https://example.com/keyboard-navigation",
            "tag": "תפיסה"
        },
        {
            "id": 4,
            "title": "זמן תגובה",
            "img": "Time.svg",
            "content": "הארכת הזמן לביצוע פעולות באתר עבור משתמשים עם מוגבלויות.",
            "link": "https://example.com/response-time",
            "tag": "הפעלה"
        },
        {
            "id": 5,
            "title": "כותרות ומבנה היררכי",
            "img": "h1h2.svg",
            "content": "שימוש בכותרות המסודרות בצורה היררכית כדי להקל על ניווט והבנה.",
            "link": "https://example.com/heading-structure",
            "tag": "הבנה"
        },
        {
            "id": 6,
            "title": "טפסים ברורים ונגישים",
            "img": "AccessesTech.svg",
            "content": "עיצוב טפסים עם הנחיות ברורות ומודעות לכל משתמש באשר הוא.",
            "link": "https://example.com/accessible-forms",
            "tag": "הבנה"
        },
        {
            "id": 7,
            "title": "שימוש בטכנולוגיות עזר",
            "img": "Movement.svg",
            "content": "האתר צריך להיות מותאם לטכנולוגיות עזר כמו קוראי מסך או זום.",
            "link": "https://example.com/assistive-tech",
            "tag": "תפיסה"
        },
        {
            "id": 8,
            "title": "מניעת תנועות בלתי נדרשות",
            "img": "compatible.svg",
            "content": "הימנעות מאנימציות שיכולות לגרום לאי-נוחות או התקפי אפילפסיה.",
            "link": "https://example.com/disable-motion",
            "tag": "הפעלה"
        },
        {
            "id": 9,
            "title": "תאימות דפדפנים ומכשירים",
            "img": "Web.svg",
            "content": "הבטחת פעולה תקינה של האתר בכל הדפדפנים והמכשירים.",
            "link": "https://example.com/browser-compatibility",
            "tag": "עמידות"
        },
        {
            "id": 10,
            "title": "מנגנון תמיכה למשתמשים",
            "img": "Help.svg",
            "content": "הוספת מנגנון עזרה, כמו צ'אט תמיכה או שאלות נפוצות.",
            "link": "https://example.com/support-mechanism",
            "tag": "עמידות"
        }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    const itemsContainer = document.getElementById("itemsContainer");
    const searchForm = document.querySelector("form"); // טופס החיפוש
    const searchInput = document.querySelector(".form-control"); // שדה החיפוש
    const searchSuggestions = document.getElementById("searchSuggestions"); // רשימת הצעות לחיפוש

    // יצירת רשימת הצעות לחיפוש בעת טעינת הדף
    populateSearchSuggestions(jsonData.accessibility);

    // פונקציה ליצירת כרטיסיות דינמיות
    function createCards(data) {
        itemsContainer.innerHTML = ""; // מנקה את המכולה של הכרטיסיות
        data.forEach((p) => {
            const cardTemplate = `
                <div class="card col-md-2 col-12 mb-4" data-title="${p.title.toLowerCase()}">
                    <img src="images/${p.img}" class="card-img-top" alt="${p.title}">
                    <div class="card-body">
                        <h5 class="card-title">${p.title}</h5>
                        <p class="card-text">${p.content}</p>
                        <a href="${p.link}" class="btn btnC rounded-pill">לקריאה נוספת</a>
                    </div>
                </div>`;
            itemsContainer.insertAdjacentHTML("beforeend", cardTemplate); // הוספת הכרטיסיות למכולה
        });
    }

    // קריאה ראשונית ליצירת כל הכרטיסיות בעת טעינת הדף
    createCards(jsonData.accessibility);

    // סינון הכרטיסיות לפי טקסט החיפוש בעת לחיצה על כפתור החיפוש
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // מונע שליחה של הטופס
        const query = searchInput.value.toLowerCase().trim(); // מאחזר את טקסט החיפוש
        const allCards = document.querySelectorAll(".card");
        let found = false; // בודק אם נמצאו התאמות

        allCards.forEach((card) => {
            const title = card.getAttribute("data-title"); // מאחזר את כותרת הכרטיס
            if (title.includes(query)) {
                card.style.display = "block"; // מציג את הכרטיסים התואמים
                found = true;
            } else {
                card.style.display = "none"; // מסתיר את הכרטיסים הלא רלוונטיים
            }
        });

        // אם לא נמצאו התאמות או שדה החיפוש ריק, מציג את כל הכרטיסיות
        if (!found || !query) {
            allCards.forEach((card) => (card.style.display = "block"));
        }
    });

    // מציג את כל הכרטיסיות כאשר שדה החיפוש ריק
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim(); // מאחזר את טקסט החיפוש
        if (!query) {
            const allCards = document.querySelectorAll(".card");
            allCards.forEach((card) => (card.style.display = "block")); // מציג את כל הכרטיסיות
        }
    });

    // פונקציה ליצירת הצעות חיפוש ברשימה
    function populateSearchSuggestions(data) {
        searchSuggestions.innerHTML = ""; // מנקה את רשימת ההצעות
        data.forEach((p) => {
            const option = document.createElement("option"); // יוצר אפשרות חדשה ברשימה
            option.value = p.title; // קובע את ערך האפשרות
            searchSuggestions.appendChild(option); // מוסיף את האפשרות לרשימה
        });
    }
});

// פונקציה להצגת כפתור גלילה חזרה לראש הדף
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // הצגת/הסתרת הכפתור בעת גלילה
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block"; // מציג את הכפתור
        } else {
            scrollToTopBtn.style.display = "none"; // מסתיר את הכפתור
        }
    });

    // גלילה לראש הדף בלחיצה על הכפתור
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // גלילה חלקה
        });
    });
});

// פונקציה להחלפת מצב כהה/בהיר
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("themeToggleBtn");

    // בדיקה אם נשמר מצב כהה/בהיר ב-localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode"); // מפעיל מצב כהה
        themeToggleBtn.textContent = "מצב בהיר"; // מעדכן את טקסט הכפתור
    }

    // החלפת מצב בלחיצה על הכפתור
    themeToggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark"); // שומר מצב כהה
            themeToggleBtn.textContent = "מצב בהיר";
        } else {
            localStorage.setItem("theme", "light"); // שומר מצב בהיר
            themeToggleBtn.textContent = "מצב כהה";
        }
    });
});

// פונקציה להצגת/הסתרת תפריט
function toggleNav() {
    const navMenu = document.getElementById("main-nav");
    navMenu.classList.toggle("hide-mobile"); // משנה את מצב התפריט
}
