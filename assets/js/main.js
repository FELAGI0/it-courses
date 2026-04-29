// ============================================
// SVG ICONS LIBRARY
// ============================================
const ICONS = {
  logo: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,
  search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  cart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  sun: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  heart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartOutline: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  arrowRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  clock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  book: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  teacher: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  quote: `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none" opacity="0.3"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>`,
  x: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  telegram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.46-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.441-.752-.245-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.145.118.185.276.204.434.019.158.047.51.028.79z"/></svg>`,
  youtube: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  facebook: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
};

// ============================================
// ROUTE & STORAGE HELPERS
// ============================================
const ROOT = "/";
const PAGES = "pages/";

// ============================================
// NAVIGATION
// ============================================
function getNavHTML() {
  const user = Storage.auth.getCurrentUser();
  const cartCount = Storage.cart.getCount();
  return `
    <nav class="navbar" id="navbar">
      <div class="container nav-inner">
        <a href="${ROOT}index.html" class="logo">
          ${ICONS.logo}
          <span class="logo-text">IT<span class="accent">Курсы</span></span>
        </a>
        <ul class="nav-links">
          <li><a href="${ROOT}index.html">Главная</a></li>
          <li><a href="${ROOT}${PAGES}catalog.html">Курсы</a></li>
          <li><a href="${ROOT}${PAGES}categories.html">Категории</a></li>
          <li><a href="${ROOT}${PAGES}teachers.html">Преподаватели</a></li>
          <li><a href="${ROOT}${PAGES}blog.html">Блог</a></li>
          <li><a href="${ROOT}${PAGES}about.html">О нас</a></li>
        </ul>
        <div class="nav-actions">
          <button class="btn-icon theme-toggle" id="themeToggle" title="Переключить тему">${ICONS.moon}</button>
          <a href="${ROOT}${PAGES}cart.html" class="btn-icon cart-btn" title="Корзина">
            ${ICONS.cart}
            <span class="cart-badge" id="cartBadge" ${cartCount === 0 ? 'style="display:none"' : ""}>${cartCount}</span>
          </a>
          ${user
            ? `<a href="${ROOT}${PAGES}profile.html" class="btn btn-outline nav-profile"><span class="nav-profile__avatar">${ICONS.user}</span> ${user.name.split(" ")[0]}</a>`
            : `<a href="${ROOT}${PAGES}login.html" class="btn btn-outline">Войти</a><a href="${ROOT}${PAGES}register.html" class="btn btn-primary">Регистрация</a>`
          }
        </div>
        <button class="burger" id="burger"><span></span><span></span><span></span></button>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        <a href="${ROOT}index.html">Главная</a>
        <a href="${ROOT}${PAGES}catalog.html">Курсы</a>
        <a href="${ROOT}${PAGES}categories.html">Категории</a>
        <a href="${ROOT}${PAGES}teachers.html">Преподаватели</a>
        <a href="${ROOT}${PAGES}blog.html">Блог</a>
        <a href="${ROOT}${PAGES}about.html">О нас</a>
        <a href="${ROOT}${PAGES}cart.html">Корзина (${cartCount})</a>
        ${user
          ? `<a href="${ROOT}${PAGES}profile.html">${user.name}</a><a href="#" id="mobileLogout">Выйти</a>`
          : `<a href="${ROOT}${PAGES}login.html">Войти</a><a href="${ROOT}${PAGES}register.html">Регистрация</a>`
        }
      </div>
    </nav>
  `;
}

function getFooterHTML() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="${ROOT}index.html" class="logo">${ICONS.logo}<span class="logo-text">IT<span class="accent">Курсы</span></span></a>
            <p>Современная платформа онлайн-обучения IT профессиям. Более 150 курсов от ведущих специалистов.</p>
            <div class="footer-socials">
              <a href="#" class="social-btn" aria-label="Facebook">${ICONS.facebook}</a>
              <a href="#" class="social-btn" aria-label="Instagram">${ICONS.instagram}</a>
              <a href="#" class="social-btn" aria-label="Telegram">${ICONS.telegram}</a>
              <a href="#" class="social-btn" aria-label="YouTube">${ICONS.youtube}</a>
            </div>
          </div>
          <div class="footer-col"><h4>Курсы</h4><ul><li><a href="${ROOT}${PAGES}catalog.html">Все курсы</a></li><li><a href="${ROOT}${PAGES}categories.html">Категории</a></li><li><a href="${ROOT}${PAGES}pricing.html">Тарифы</a></li><li><a href="${ROOT}${PAGES}certificate.html">Сертификаты</a></li></ul></div>
          <div class="footer-col"><h4>Компания</h4><ul><li><a href="${ROOT}${PAGES}about.html">О нас</a></li><li><a href="${ROOT}${PAGES}teachers.html">Преподаватели</a></li><li><a href="${ROOT}${PAGES}blog.html">Блог</a></li><li><a href="${ROOT}${PAGES}contact.html">Контакты</a></li></ul></div>
          <div class="footer-col"><h4>Поддержка</h4><ul><li><a href="${ROOT}${PAGES}faq.html">FAQ</a></li><li><a href="${ROOT}${PAGES}contact.html">Помощь</a></li><li><a href="#">Политика конфиденциальности</a></li><li><a href="#">Условия использования</a></li></ul></div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 ITКурсы. Все права защищены.</p><p>Сделано с вниманием к качеству</p>
        </div>
      </div>
    </footer>
  `;
}

function injectLayout() {
  const headerEl = document.getElementById("app-header");
  const footerEl = document.getElementById("app-footer");
  if (headerEl) headerEl.innerHTML = getNavHTML();
  if (footerEl) footerEl.innerHTML = getFooterHTML();
  initNavEvents();
}

function initNavEvents() {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const themeToggle = document.getElementById("themeToggle");
  const mobileLogout = document.getElementById("mobileLogout");
  const navbar = document.getElementById("navbar");

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });
  }

  if (themeToggle) {
    // Определяем тему: сначала из localStorage, иначе 'dark'
    var currentTheme = 'dark';
    try { currentTheme = localStorage.getItem('theme') || 'dark'; } catch(e) {}
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.innerHTML = currentTheme === 'light' ? ICONS.moon : ICONS.sun;

    themeToggle.addEventListener("click", () => {
      var newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      try { localStorage.setItem('theme', newTheme); } catch(e) {}
      themeToggle.innerHTML = newTheme === 'light' ? ICONS.moon : ICONS.sun;
    });
  }

  if (mobileLogout) {
    mobileLogout.addEventListener("click", e => {
      e.preventDefault();
      Storage.auth.logout();
      showToast("Вы вышли из аккаунта", "info");
      setTimeout(() => window.location.href = ROOT + "index.html", 1000);
    });
  }

  setActiveNavLink();
}

function setActiveNavLink() {
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
  const currentPath = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.href.includes(currentPath) && currentPath !== "") link.classList.add("active");
  });
}

// ============================================
// CART & TOAST
// ============================================
function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  const count = Storage.cart.getCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const icons = {
    success: ICONS.check,
    error: ICONS.x,
    warning: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    info: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
  };
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.success}</span><span>${message}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 300); }, 3500);
}

// ============================================
// RENDER HELPERS
// ============================================
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  let starsHTML = '';
  for (let i = 0; i < full; i++) starsHTML += '★';
  if (half) starsHTML += '½';
  for (let i = 0; i < empty; i++) starsHTML += '☆';
  return `<span class="stars">${starsHTML}</span><span class="rating-num">${rating}</span>`;
}

function formatPrice(price) {
  if (price === 0) return "Бесплатно";
  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}

function getCourseIcon(course) {
  if (typeof course.icon === 'string' && course.icon.trim().startsWith('<svg')) return course.icon;
  const icons = {
    programming: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="${course.color}" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    design: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="${course.color}" stroke-width="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>`,
    data: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="${course.color}" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    mobile: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="${course.color}" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    devops: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="${course.color}" stroke-width="1.5"><circle cx="12" cy="12" r="3"/></svg>`,
    security: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="${course.color}" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  };
  return icons[course.category] || icons.programming;
}

// ============================================
// COURSE CARD RENDER
// ============================================
function renderCourseCard(course) {
  const inCart = Storage.cart.isInCart(course.id);
  const inWL = Storage.wishlist.isInWishlist(course.id);
  const courseUrl = `${ROOT}${PAGES}course.html?id=${course.id}`;
  return `
    <div class="course-card animate-on-scroll" data-id="${course.id}">
      <a href="${courseUrl}" class="card-image-link">
        <div class="card-img" style="background: linear-gradient(135deg, ${course.color}15, ${course.color}08)">
          <span class="card-icon">${getCourseIcon(course)}</span>
          <span class="card-level">${course.level}</span>
          <button class="wishlist-btn ${inWL ? "active" : ""}" data-id="${course.id}" title="В избранное" aria-label="В избранное">${inWL ? ICONS.heart : ICONS.heartOutline}</button>
        </div>
      </a>
      <div class="card-body">
        <span class="card-category">${course.categoryName}</span>
        <h3 class="card-title"><a href="${courseUrl}">${course.title}</a></h3>
        <p class="card-desc">${course.description}</p>
        <div class="card-meta"><span>${ICONS.book} ${course.lessons} уроков</span><span>${ICONS.clock} ${course.duration}</span></div>
        <div class="card-rating">${renderStars(course.rating)}<span class="students-count">(${course.students.toLocaleString("ru-RU")})</span></div>
        <div class="card-instructor">${ICONS.teacher} ${course.instructor}</div>
        <div class="card-footer">
          <div class="card-prices"><span class="price-current">${formatPrice(course.price)}</span>${course.oldPrice ? `<span class="price-old">${formatPrice(course.oldPrice)}</span>` : ""}</div>
          <button class="btn ${inCart ? "btn-success" : "btn-primary"} btn-sm add-to-cart" data-id="${course.id}">${inCart ? `${ICONS.check} В корзине` : "В корзину"}</button>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// TEACHER CARD RENDER
// ============================================
function renderTeacherCard(teacher) {
  return `
    <div class="teacher-card animate-on-scroll">
      <div class="teacher-avatar">${teacher.avatar}</div>
      <div class="teacher-name">${teacher.name}</div>
      <div class="teacher-title">${teacher.title}</div>
      <div class="teacher-company">@ ${teacher.company}</div>
      <div class="teacher-stats">
        <div class="teacher-stat"><span class="teacher-stat-num">${teacher.students.toLocaleString("ru-RU")}</span><span class="teacher-stat-label">Студентов</span></div>
        <div class="teacher-stat"><span class="teacher-stat-num">${teacher.courses}</span><span class="teacher-stat-label">Курсов</span></div>
        <div class="teacher-stat"><span class="teacher-stat-num">${teacher.rating}</span><span class="teacher-stat-label">Рейтинг</span></div>
      </div>
    </div>
  `;
}

// ============================================
// TESTIMONIAL CARD RENDER
// ============================================
function renderTestimonialCard(testimonial) {
  return `
    <div class="testimonial-card animate-on-scroll">
      <div class="testimonial-quote">${ICONS.quote}</div>
      <div class="testimonial-stars">${"★".repeat(testimonial.rating)}</div>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${ICONS.user}</div>
        <div><div class="testimonial-name">${testimonial.name}</div><div class="testimonial-role">${testimonial.role}</div></div>
      </div>
    </div>
  `;
}

// ============================================
// CART BUTTONS INIT
// ============================================
function initCartButtons() {
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      const result = Storage.cart.addToCart(id);
      if (result.success) {
        btn.innerHTML = `${ICONS.check} В корзине`;
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-success");
        showToast(result.message, "success");
        updateCartBadge();
      } else {
        showToast(result.message, "warning");
      }
    });
  });
  document.querySelectorAll(".wishlist-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault(); e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const added = Storage.wishlist.toggle(id);
      btn.classList.toggle("active", added);
      btn.innerHTML = added ? ICONS.heart : ICONS.heartOutline;
      showToast(added ? "Добавлено в избранное" : "Удалено из избранного", "info");
    });
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.animate-on-scroll, .animate-fade-left, .animate-fade-right, .animate-scale-in').forEach(el => observer.observe(el));
}

function applyStagger(containerSelector, childSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.querySelectorAll(childSelector).forEach((child, i) => {
    child.classList.add(`stagger-${Math.min(i + 1, 8)}`);
  });
}

// ============================================
// TRIGRAM SEARCH
// ============================================
function getTrigrams(str) {
  const cleaned = str.toLowerCase().replace(/\s+/g, ' ');
  const trigrams = new Set();
  for (let i = 0; i <= cleaned.length - 3; i++) trigrams.add(cleaned.substring(i, i + 3));
  return trigrams;
}

function trigramSearch(query, courses) {
  if (!query || query.length < 2) return courses;
  const queryTrigrams = getTrigrams(query);
  const scored = courses.map(course => {
    const searchText = [course.title, course.description, course.categoryName, course.instructor, ...course.tags].join(' ');
    const courseTrigrams = getTrigrams(searchText);
    let matches = 0;
    queryTrigrams.forEach(tg => { if (courseTrigrams.has(tg)) matches++; });
    return { course, score: queryTrigrams.size > 0 ? matches / queryTrigrams.size : 0 };
  });
  const exactMatches = scored.filter(s =>
    s.course.title.toLowerCase().includes(query.toLowerCase()) ||
    s.course.description.toLowerCase().includes(query.toLowerCase()) ||
    s.course.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );
  const exactIds = new Set(exactMatches.map(s => s.course.id));
  const trigramResults = scored.filter(s => !exactIds.has(s.course.id) && s.score >= 0.3).sort((a, b) => b.score - a.score).map(s => s.course);
  return [...exactMatches.map(s => s.course), ...trigramResults];
}

function initTheme() {
  // Тема уже установлена в initNavEvents
}

function init() {
  initTheme();
  injectLayout();
  initScrollAnimations();
  if (typeof pageInit === "function") pageInit();
}

document.addEventListener("DOMContentLoaded", init);