const Storage = {
  auth: {
    register(userData) {
      const users = JSON.parse(localStorage.getItem("it_users") || "[]");
      const exists = users.find(u => u.email === userData.email);
      if (exists) return { success: false, message: "Пользователь с таким email уже существует" };
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        password: userData.password,
        avatar: userData.avatar || "👤",
        bio: "",
        createdAt: new Date().toLocaleDateString("ru-RU"),
        courses: [],
        certificates: []
      };
      users.push(newUser);
      localStorage.setItem("it_users", JSON.stringify(users));
      const sessionUser = { ...newUser };
      delete sessionUser.password;
      localStorage.setItem("it_current_user", JSON.stringify(sessionUser));
      return { success: true, user: sessionUser };
    },

    login(email, password) {
      const users = JSON.parse(localStorage.getItem("it_users") || "[]");
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) return { success: false, message: "Неверный email или пароль" };
      const sessionUser = { ...user };
      delete sessionUser.password;
      localStorage.setItem("it_current_user", JSON.stringify(sessionUser));
      return { success: true, user: sessionUser };
    },

    logout() {
      localStorage.removeItem("it_current_user");
    },

    getCurrentUser() {
      return JSON.parse(localStorage.getItem("it_current_user") || "null");
    },

    isLoggedIn() {
      return !!localStorage.getItem("it_current_user");
    },

    updateUser(updates) {
      const currentUser = this.getCurrentUser();
      if (!currentUser) return false;
      const updatedUser = { ...currentUser, ...updates };
      localStorage.setItem("it_current_user", JSON.stringify(updatedUser));
      const users = JSON.parse(localStorage.getItem("it_users") || "[]");
      const idx = users.findIndex(u => u.id === currentUser.id);
      if (idx !== -1) {
        users[idx] = { ...users[idx], ...updates };
        localStorage.setItem("it_users", JSON.stringify(users));
      }
      return true;
    }
  },

  cart: {
    getCart() {
      return JSON.parse(localStorage.getItem("it_cart") || "[]");
    },

    addToCart(courseId) {
      const cart = this.getCart();
      if (cart.includes(courseId)) return { success: false, message: "Курс уже в корзине" };
      cart.push(courseId);
      localStorage.setItem("it_cart", JSON.stringify(cart));
      return { success: true, message: "Курс добавлен в корзину" };
    },

    removeFromCart(courseId) {
      let cart = this.getCart();
      cart = cart.filter(id => id !== courseId);
      localStorage.setItem("it_cart", JSON.stringify(cart));
    },

    clearCart() {
      localStorage.setItem("it_cart", JSON.stringify([]));
    },

    getCount() {
      return this.getCart().length;
    },

    isInCart(courseId) {
      return this.getCart().includes(courseId);
    },

    getTotal() {
      const cart = this.getCart();
      return cart.reduce((sum, id) => {
        const course = COURSES.find(c => c.id === id);
        return sum + (course ? course.price : 0);
      }, 0);
    }
  },

  wishlist: {
    getWishlist() {
      return JSON.parse(localStorage.getItem("it_wishlist") || "[]");
    },

    toggle(courseId) {
      let wl = this.getWishlist();
      if (wl.includes(courseId)) {
        wl = wl.filter(id => id !== courseId);
        localStorage.setItem("it_wishlist", JSON.stringify(wl));
        return false;
      } else {
        wl.push(courseId);
        localStorage.setItem("it_wishlist", JSON.stringify(wl));
        return true;
      }
    },

    isInWishlist(courseId) {
      return this.getWishlist().includes(courseId);
    }
  },

  theme: {
    get() {
      return localStorage.getItem("it_theme") || "light";
    },
    set(theme) {
      localStorage.setItem("it_theme", theme);
    }
  }
};
