const products = [
  {
    id=1,
    name="iPhone 15 Pro Max 256GB",
    price=134990,
    oldPrice=149990,
    category="phones",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692845702275",
    rating=4.9,
    reviews=2847,
    badge="new",
    description:
      "iPhone 15 Pro Max с чипом A17 Pro, камерой 48 Мп и дисплеем Super Retina XDR 6,7 дюйма. Титановый дизайн, кнопка действий и порт USB-C.",
    features=[
      "A17 Pro чип",
      "Камера 48 МП",
      'Дисплей 6.7"',
      "Титановый корпус",
      "5G",
    ],
    inStock=true,
    warranty="1 год",
    brand="Apple",
  },
  {
    id=2,
    name="Samsung Galaxy S24 Ultra 512GB",
    price=124990,
    oldPrice=null,
    category="phones",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-ultra-s928-sm-s928bztqins-thumb-539573471",
    rating=4.8,
    reviews=1923,
    badge="hot",
    description:
      "Премиальный смартфон с S Pen, камерой 200 МП и экраном Dynamic AMOLED 6,8 дюйма. Процессор Snapdragon 8 Gen 3.",
    features=[
      "Snapdragon 8 Gen 3",
      "Камера 200 МП",
      "S Pen в комплекте",
      'Дисплей 6.8"',
      "5G",
    ],
    inStock=true,
    warranty="1 год",
    brand="Samsung",
  },
  {
    id=3,
    name='MacBook Pro 16" M3 Pro 512GB',
    price=289990,
    oldPrice=319990,
    category="laptops",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290",
    rating=4.9,
    reviews=892,
    badge="sale",
    description:
      "Профессиональный ноутбук с чипом M3 Pro, дисплеем Liquid Retina XDR и автономностью до 22 часов.",
    features=[
      "M3 Pro чип",
      'Дисплей 16.2" Liquid Retina XDR',
      "До 22 часов работы",
      "512GB SSD",
      "Thunderbolt 4",
    ],
    inStock=true,
    warranty="1 год",
    brand="Apple",
  },
  {
    id=4,
    name="Dell XPS 13 Plus Intel i7 1TB",
    price=159990,
    oldPrice=null,
    category="laptops",
    image:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9320/media-gallery/notebook-xps-13-9320-nt-blue-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2681&qlt=100,1&resMode=sharp2&size=3491,2681&chrss=full&imwidth=5000",
    rating=4.7,
    reviews=654,
    badge=null,
    description:
      "Ультрабук премиум-класса с процессором Intel Core i7 12-го поколения и дисплеем InfinityEdge.",
    features=[
      "Intel Core i7-1260P",
      'Дисплей 13.4" 4K',
      "1TB SSD",
      "16GB RAM",
      "Thunderbolt 4",
    ],
    inStock=true,
    warranty="1 год",
    brand="Dell",
  },
  {
    id=5,
    name='iPad Pro 12.9" M2 WiFi 512GB',
    price=139990,
    oldPrice=159990,
    category="tablets",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202210?wid=470&hei=556&fmt=png-alpha&.v=1664411207213",
    rating=4.8,
    reviews=1234,
    badge="sale",
    description:
      "Самый мощный iPad с чипом M2, дисплеем Liquid Retina XDR и поддержкой Apple Pencil 2-го поколения.",
    features=[
      "M2 чип",
      'Дисплей 12.9" Liquid Retina XDR',
      "Поддержка Apple Pencil",
      "512GB",
      "USB-C",
    ],
    inStock=true,
    warranty="1 год",
    brand="Apple",
  },
  {
    id=6,
    name="Samsung Galaxy Tab S9+ 256GB",
    price=89990,
    oldPrice=null,
    category="tablets",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-tab-s9-plus-x716-sm-x716bhagins-thumb-537891644",
    rating=4.6,
    reviews=543,
    badge=null,
    description:
      "Android-планшет премиум-класса с S Pen в комплекте и дисплеем Dynamic AMOLED 2X.",
    features=[
      "Snapdragon 8 Gen 2",
      'Дисплей 12.4" Dynamic AMOLED 2X',
      "S Pen в комплекте",
      "256GB",
      "Wi-Fi 6E",
    ],
    inStock=true,
    warranty="1 год",
    brand="Samsung",
  },
  {
    id=7,
    name="AirPods Pro 2-го поколения",
    price=27990,
    oldPrice=32990,
    category="accessories",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=470&hei=556&fmt=png-alpha&.v=1660803972361",
    rating=4.7,
    reviews=3245,
    badge="sale",
    description:
      "Беспроводные наушники с активным шумоподавлением и пространственным звуком.",
    features=[
      "Активное шумоподавление",
      "Пространственный звук",
      "До 6 часов прослушивания",
      "Чехол MagSafe",
      "Защита IPX4",
    ],
    inStock=true,
    warranty="1 год",
    brand="Apple",
  },
  {
    id=8,
    name="Sony WH-1000XM5 Black",
    price=39990,
    oldPrice=null,
    category="accessories",
    image:
      "https://www.sony.ru/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    rating=4.8,
    reviews=1876,
    badge=null,
    description:
      "Премиальные накладные наушники с лучшим в отрасли шумоподавлением.",
    features=[
      "Шумоподавление нового поколения",
      "До 30 часов работы",
      "Быстрая зарядка",
      "Multipoint соединение",
      "Hi-Res Audio",
    ],
    inStock=true,
    warranty="1 год",
    brand="Sony",
  },
  {
    id=9,
    name="iPhone 14 128GB",
    price=79990,
    oldPrice=89990,
    category="phones",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-2022?wid=470&hei=556&fmt=png-alpha&.v=1660765040844",
    rating=4.6,
    reviews=4321,
    badge="sale",
    description="Надежный iPhone с улучшенной камерой и чипом A15 Bionic.",
    features=[
      "A15 Bionic",
      "Камера 12 МП",
      'Дисплей 6.1" Super Retina XDR',
      "Face ID",
      "5G",
    ],
    inStock=true,
    warranty="1 год",
    brand="Apple",
  },
  {
    id=10,
    name="Xiaomi 13 Pro 256GB",
    price=69990,
    oldPrice=null,
    category="phones",
    image:
      "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677570960.12004704.jpg",
    rating=4.5,
    reviews=987,
    badge=null,
    description:
      "Флагманский смартфон с камерой Leica, Snapdragon 8 Gen 2 и быстрой зарядкой 120W.",
    features=[
      "Snapdragon 8 Gen 2",
      "Камера Leica 50 МП",
      "Зарядка 120W",
      'Дисплей 6.73" AMOLED',
      "5G",
    ],
    inStock=true,
    warranty="1 год",
    brand="Xiaomi",
  },
  {
    id=11,
    name="ASUS ROG Strix G15 RTX 4060",
    price=119990,
    oldPrice=139990,
    category="laptops",
    image:
      "https://dlcdnwebimgs.asus.com/gain/E8C1D09D-4851-4120-8236-1E1D71E589D7/fwebp",
    rating=4.4,
    reviews=432,
    badge="sale",
    description:
      "Игровой ноутбук с видеокартой RTX 4060, процессором AMD Ryzen 7 и дисплеем 144Hz.",
    features=[
      "AMD Ryzen 7 7735HS",
      "NVIDIA RTX 4060",
      'Дисплей 15.6" 144Hz',
      "16GB RAM",
      "1TB SSD",
    ],
    inStock=true,
    warranty="1 год",
    brand="ASUS",
  },
  {
    id=12,
    name="Magic Keyboard для iPad Pro",
    price=39990,
    oldPrice=null,
    category="accessories",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQJ3?wid=470&hei=556&fmt=png-alpha&.v=1617129495000",
    rating=4.3,
    reviews=765,
    badge=null,
    description:
      "Клавиатура с трекпадом и подсветкой для iPad Pro с магнитным креплением.",
    features=[
      "Магнитное крепление",
      "Трекпад Multi-Touch",
      "Подсветка клавиш",
      "USB-C для зарядки",
      "Защита 360°",
    ],
    inStock=true,
    warranty="1 год",
    brand="Apple",
  },
  {
    id=13,
    name="Apple Watch Series 9 45mm GPS",
    price=49990,
    oldPrice=null,
    category="accessories",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-45-alum-midnight-nc-s9?wid=470&hei=556&fmt=png-alpha&.v=1692810295439",
    rating=4.8,
    reviews=2134,
    badge="new",
    description:
      "Умные часы с чипом S9, ярким дисплеем Always-On и функциями здоровья.",
    features=[
      "Чип S9",
      "Always-On Retina дисплей",
      "ЭКГ и SpO2",
      "GPS + Cellular",
      "Водостойкость 50м",
    ],
    inStock=true,
    warranty="1 год",
    brand="Apple",
  },
  {
    id=14,
    name="Samsung Galaxy Watch6 Classic 47mm",
    price=34990,
    oldPrice=39990,
    category="accessories",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-classic-r960-sm-r960nzkains-thumb-537548268",
    rating=4.5,
    reviews=876,
    badge="sale",
    description:
      "Премиальные умные часы с вращающимся безелем и расширенным мониторингом здоровья.",
    features=[
      "Exynos W930",
      "Вращающийся безель",
      "Мониторинг сна",
      "GPS + LTE",
      "Защита 5ATM",
    ],
    inStock=true,
    warranty="1 год",
    brand="Samsung",
  },
  {
    id=15,
    name='MacBook Air 15" M2 256GB',
    price=159990,
    oldPrice=null,
    category="laptops",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433",
    rating=4.9,
    reviews=1543,
    badge="new",
    description:
      "Самый большой MacBook Air с чипом M2, дисплеем Liquid Retina 15 дюймов.",
    features=[
      "M2 чип",
      'Дисплей 15.3" Liquid Retina',
      "До 18 часов работы",
      "256GB SSD",
      "MagSafe 3",
    ],
    inStock=true,
    warranty="1 год",
    brand="Apple",
  },
  {
    id=16,
    name="PlayStation 5 Console",
    price=59990,
    oldPrice=null,
    category="accessories",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
    rating=4.9,
    reviews=5432,
    badge="hot",
    description:
      "Игровая консоль нового поколения с SSD, 3D-звуком и поддержкой 4K 120fps.",
    features=[
      "Custom AMD Zen 2",
      "Ultra-high speed SSD",
      "3D Audio",
      "4K 120fps gaming",
      "DualSense контроллер",
    ],
    inStock=false,
    warranty="1 год",
    brand="Sony",
  },
  {
    id=17,
    name="Google Pixel 8 Pro 128GB",
    price=89990,
    oldPrice=null,
    category="phones",
    image:
      "https://lh3.googleusercontent.com/fD4S2IzLGGkQgC7XfhHDFZCJBvGJFuFKxKCmm9xfh8BzuLqzLhfaKcJfYzVJE6gkBzOK0w=w1920-h1080",
    rating=4.6,
    reviews=1456,
    badge=null,
    description:
      "Смартфон Google с чистым Android, AI-камерой и 7 лет обновлений.",
    features=[
      "Google Tensor G3",
      "AI-камера 50 МП",
      "7 лет обновлений",
      'Дисплей 6.7" OLED',
      "5G",
    ],
    inStock=true,
    warranty="1 год",
    brand="Google",
  },
  {
    id=18,
    name="Microsoft Surface Laptop 5",
    price=149990,
    oldPrice=null,
    category="laptops",
    image:
      "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqiX?ver=5caf",
    rating=4.5,
    reviews=789,
    badge=null,
    description="Элегантный ультрабук с сенсорным экраном и Windows 11.",
    features=[
      "Intel Core i5-1235U",
      'Сенсорный дисплей 13.5"',
      "8GB RAM",
      "256GB SSD",
      "Windows 11",
    ],
    inStock=true,
    warranty="1 год",
    brand="Microsoft",
  },
  {
    id=19,
    name="iPad Air 5-го поколения 256GB",
    price=79990,
    oldPrice=null,
    category="tablets",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=470&hei=556&fmt=png-alpha&.v=1645065732688",
    rating=4.7,
    reviews=2341,
    badge=null,
    description:
      "Мощный iPad с чипом M1, дисплеем Liquid Retina и поддержкой Apple Pencil.",
    features=[
      "M1 чип",
      'Дисплей 10.9" Liquid Retina',
      "Поддержка Apple Pencil",
      "256GB",
      "USB-C",
    ],
    inStock=true,
    warranty="1 год",
    brand="Apple",
  },
  {
    id=20,
    name="JBL Charge 5 Portable Speaker",
    price=12990,
    oldPrice=null,
    category="accessories",
    image:
      "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw7f8a0f1a/JBL_Charge5_Hero_Black_0002_x1.png?sw=537&sfrm=png",
    rating=4.4,
    reviews=3456,
    badge=null,
    description:
      "Портативная Bluetooth-колонка с мощным звуком и защитой IP67.",
    features=[
      "Мощность 40W",
      "Защита IP67",
      "До 20 часов работы",
      "Bluetooth 5.1",
      "Powerbank функция",
    ],
    inStock=true,
    warranty="1 год",
    brand="JBL",
  },
];

let cart = [];
let wishList = [];
let currentFilter = "all";
let currentSort = "default";
let currentView = "grid";
let searchTerm = "";
let isDarkTheme = false;


  const productsGrid= document.querySelector("#productsGrid");
  const productsList=document.querySelector("#productsList");
  const emptyState=document.querySelector("#emptyState");
  const loadingState=document.querySelector("#loadingState");
  const cartSidebar=document.querySelector("#cartSidebar");
  const cartOverlay=document.querySelector("#cartOverlay");
  const cartItems=document.querySelector("#cartItems");
  const cartTotal=document.querySelector("#cartTotal");
  const cartCount=document.querySelector("#cartCount");
  const wishlistCount=document.querySelector("#wishlistCount");
  const searchInput=document.querySelector("#searchInput");
  const searchResults=document.querySelector("#searchResults");
  const categoryFilters=document.querySelector("#categoryFilters");
  const sortSelect=document.querySelector("#sortSelect");
  const productsCount=document.querySelector("#productsCount");
  const viewToggle=document.querySelectorAll(".view-btn");
  const notification=document.querySelectorAll("#notification");
  const notificationMessage=document.querySelectorAll("#notificationMessage");
  const themeToggle=document.querySelectorAll("#themeToggle");

document.addEventListener("DOMContentLoaded", function () {
  console.log("Страница загрузилась. Запускаем магазин.");
  loadSaveData();
});
function loadSaveData() {
  console.log("Загружаем сохранённые данные...");
  //Загружаем корзину
  const savedCart = localStorage.getItem("techstore-cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    console.log("Загружена корзина:", cart.length, "товаров");
  }
  //Загружаем избранное
  const savedWishList = localStorage.getItem("techstore-wishlist");
  if (wishList) {
    wishlist = JSON.parse(savedWishList);
    console.log("Загружено избранное:", wishlist.length, "товаров");
  }
  const savedTheme = localStorage.getItem("techstore-theme");
  if (savedTheme === "dark") {
    isDarkTheme = true;
    document.body.classList.add("dark-theme");
    const themeIcon=document.querySelector(".theme-icon")
    if(themeIcon){
      themeIcon.textContent="🌙"
    }
    console.log("Включена тёмная тема")
  }
}
//Настройка кнопок и событий
function setupEventListeners(){
  console.log("Настраиваем обработчики событий...")

  //Кнопка смены темы
  if(themeToggle){
    themeToggle.addEventListener("click", changeTheme)
    console.log("Обработчик смены темы подключён")
    
  }

  //Поле поиска с задержкой, чтобы не искать при каждой букве
  if(searchInput){
    searchInput.addEventListener("input",function(){
      //очищаем предыдущий таймер
      if(window.searchTimeOut){
        clearTimeout(window.searchTimeOut)
      }
      //ставим новый таймер на 300мс
      window.searchTimeOut=setTimeout(function(){
        hendleSearch()
      },300ms)
    })
    console.log("Обработчик поиска подключён")
  }
  if(categoryFilters){
    //Используем делегирование событий - один обработчик на все кнопки
    categoryFilters.addEventListener("click", function(event){
      if(event.target.classList.contains("filter-btn")){
        hendleCategoryFilter(event.target)//
      }
    })
    console.log("Обработчики фильтров подключены")
  }
  //Сортировка
  if(sortSelect){
    sortSelect.addEventListener('change', function(){
      currentSort=this.value
      console.log("Сортировка была изменена",currentSort)
      displayProducts()
    })
  }
}

function displayProducts(){
  console.log("Обновляем отображение товаров")
  //Показываем индикатор загрузки
  showLoading()
  setTimeout(function(){
    //Получаем отфильтрованные товары
    const filteredProducts=getFilteredProducts()
    //Обновляем счётчик
    updateProductsCounter(filteredProducts.length)
    if(filteredProducts.length===0){
      showEmptyState()
    } else {
      hideEmptyState()
      //Отображаем товары в зависимости от выбранного вида
      if(currentView==="grid"){
        displayProductsGrid(filteredProducts)
      } else {
        displayProductsList(filteredProducts)
      }
    } 
    hideLoading()
  },200)
  
}

function displayProductsGrid(){
  console.log("Отображаем товары сеткой:",products.length)
  //Очищаем контейнеры
  productsGrid.innerHTML="";
  productsList.innerHTML="";
  //Показываем сетку, скрываем список
  productsGrid.style.display="grid"
  productsList.style.display="none"
  //Создаём HTML для каждого товара с помощью forEach
  products.forEach(function(product){
    const productCard=createProductsCard(product)
    productsGrid.appendChild(productCard)
  })
  console.log("Сетка товаров отображена")
}

function createProductsCard(product){
//Создаём основной элемент карточки
const card=document.createElement("div")
card.className="product-card"
card.setAttribute("data-product-id", product.id)
//Создаём HTML содержимое
card.innerHTML=`
<div class="product-image">
  ${product.image?
    `<img src="${product.image} alt="${product.name}" class="product-img" loading="lazy">`
    :
    `
    <div class="product-placeholder">
      ${product.emoji || "📦"}
    </div>
    `
  }
  ${product.badge?`
    <span class="product-badge ${product.badge}">
      ${
      getBadgeText(product.badge)
      }
    </span>
    `:""
  }
  <div clas="product-actions">
    <button class="product-action-btn" onclick="toggleWishList(${product.id})" title="Избранное">
      ${isInWishList(product.id)?"❤️":"♡"}
    </button>

    <button class="product-action-btn" onclick="quickView(${product.id})" title="Быстрый просмотр">
     👁️
    </button>
  </div>
</div>
<div class="product-info">
  <div class="product-category">
    ${getCategoryName(product.category)}
  </div>
  <h3 class="product-name">
  ${product.name}
  </h3>
  ${product.rating?`
    <div class="product-features">
      ${product.features.slice(0,3).map(feature=>
        `<span class="feature-tag">
          ${feature}
        </span>`
        ).join("")}
    </div>
    `:""}
    <div class="product-price">
      <span class="price-current">${formatPrice(product.price)}</span>
      ${product.oldPrice?`<span class="price-old">${formatPrice(product.oldPrice())}</span>`
        :""
      }
    </div>
    <div class="stock-status ${product.inStock?"in-stock":"out-stock"}">
      ${product.inStock?"В наличии":"Нет в наличии"}
    </div>
    <button class="add-to-card" ${!product.inStock?"disabled":""} onclick="addToCart(${product.id})">${!product.inStock?"Нет в наличии":"В корзину"}</button>
</div>
`;
return card
}

function hendleSearch(){
const searchValue=searchValue.value.trim()
console.log("поиск:",searchValue)
searchTerm=searchValue
showAllProducts()
}

function showAllProducts(){
  console.log("Показываем товары...")
  //Получаем отфильтрованные товары
  const filteredProducts=getFilteredProducts()
}

function getFilteredProducts(){
  let filteredProducts=[]
  //Проходим по всем товарам
  for(let i=0;i<products.length;i++){
    const product=products[i]
    let shouldShow=true; //Показываем товар по умолчанию
    //Проверяем фильтр по категории
    if(currentFilter==="all" && product.category!==currentFilter){
      shouldShow=false;
    }
    //Проверяем поиск по названию
    if(searchTerm!==""){
      const productNameLower=product.name.toLocaleLowerCase()
      const searchLower=searchTerm.toLocaleLowerCase()
      if(!productNameLower.includes(searchLower)){
        shouldShow=false;
      }
    }
    //Если товар прошёл все проверки - добавляем в результат
    if(shouldShow){
      filteredProducts.push(product)
    }
  }
  //Сортируем товары 
  const sortedProducts=sortedProducts(filteredProducts)
  return sortedProducts;
}

function changeTheme(){
  console.log("Переключаем тему")
  isDarkTheme=!isDarkTheme;
  const body=document.body
  const themeIcon=document.querySelector(".theme-icon")
  if(isDarkTheme){
    //Включаем тёмную тему
    body.classList.add("dark-theme")
    if(themeIcon){
      themeIcon.textContent="🌙"
    }
    localStorage.setItem("techstore-theme","dark")
    //Вызвать функцию для оповещения
  
  }
  else{
    //Включаем светулю тему
    body.classList.remove("dark-theme")
    if(themeIcon){
      themeIcon.textContent="☀️";
    }
    localStorage.setItem("techstore-theme","dark")
    //Вызвать функцию для оповещения
  }
  body.style.transition="all 0.3s easy"
  setTimeout(function(){
    body.style.transition="";
  },300ms)
}

//Вспомогательные функции
function formatPrice(price){
  return new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(price)
}

//Получение названия категории
function getCategoryName(category){
  const categoryNames={
    "phones":"смартфоны",
    "laptops":"ноутбуки",
    "tablets":"планшеты",
    "accesories":"аксессуары"
  }
  return categoryNames[category] || "товары"
}

//Получение текста бэйджа
function getBadgeText(badge){
  const badgeTexts={
    "new":"новинка",
    "hot":"хит",
    "sale":"скидка"
  }
  return badgeTexts[badge] || ""
}

//Генерация звёздочек рейтинга 
function getStars(rating){
  const fullStars=Math.floor(rating)
  const halfStar=rating % 1>=0.5
  const emptyStars=5-fullStars-(halfStar?1:0)
  return "⭐".repeat(fullStars)+(halfStar?"☆":"")+"☆".repeat(emptyStars)
}