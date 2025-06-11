$(document).ready(() => {
    // Dados dos produtos
    const products = [
      {
        id: 1,
        name: "Headset Gamer RGB",
        price: 299.9,
        originalPrice: 399.9,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop",
        badge: "Mais Vendido",
      },
      {
        id: 2,
        name: "Teclado Mecânico RGB",
        price: 449.9,
        originalPrice: 599.9,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
        badge: "Oferta",
      },
      {
        id: 3,
        name: "Mouse Gamer 12000 DPI",
        price: 199.9,
        originalPrice: 279.9,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
        badge: "Novo",
      },
    ]
  
    // Carrinho de compras
    let cart = JSON.parse(localStorage.getItem("cart")) || []
  
    // Inicializar página
    init()
  
    function init() {
      loadProducts()
      updateCartCount()
      setupEventListeners()
      setupScrollEffects()
    }
  
    // Carregar produtos
    function loadProducts() {
      const container = $("#products-container")
      container.empty()
  
      products.forEach((product) => {
        const productCard = createProductCard(product)
        container.append(productCard)
      })
  
      // Adicionar animação
      $(".product-card").addClass("fade-in-up")
    }
  
    // Criar card do produto
    function createProductCard(product) {
      const stars = createStars(product.rating)
  
      return $(`
              <div class="product-card" data-product-id="${product.id}">
                  <div class="product-image">
                      <img src="${product.image}" alt="${product.name}" />
                      <div class="product-badge">${product.badge}</div>
                  </div>
                  <div class="product-info">
                      <h3 class="product-title">${product.name}</h3>
                      <div class="product-rating">
                          <div class="stars">${stars}</div>
                          <span class="rating-text">(${product.rating})</span>
                      </div>
                      <div class="product-price">
                          <span class="current-price">R$ ${product.price.toFixed(2).replace(".", ",")}</span>
                          <span class="original-price">R$ ${product.originalPrice.toFixed(2).replace(".", ",")}</span>
                      </div>
                      <button class="add-to-cart" data-product-id="${product.id}">
                          <i class="fas fa-shopping-cart"></i>
                          Adicionar ao Carrinho
                      </button>
                  </div>
              </div>
          `)
    }
  
    // Criar estrelas de avaliação
    function createStars(rating) {
      let stars = ""
      for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
          stars += '<i class="fas fa-star star"></i>'
        } else {
          stars += '<i class="fas fa-star star empty"></i>'
        }
      }
      return stars
    }
  
    // Configurar event listeners
    function setupEventListeners() {
      // Adicionar ao carrinho
      $(document).on("click", ".add-to-cart", function () {
        const productId = Number.parseInt($(this).data("product-id"))
        addToCart(productId)
      })
  
      // Abrir carrinho
      $(".cart-btn").click(() => {
        openCartModal()
      })
  
      // Fechar modal
      $(".close-modal").click(() => {
        closeModal()
      })
  
      // Fechar modal clicando fora
      $(".modal").click(function (e) {
        if (e.target === this) {
          closeModal()
        }
      })
  
      // Limpar carrinho
      $("#clear-cart").click(() => {
        clearCart()
      })
  
      // Newsletter
      $("#newsletter-form").submit(function (e) {
        e.preventDefault()
        const email = $(this).find('input[type="email"]').val()
        subscribeNewsletter(email)
      })
  
      // Navegação suave
      $('a[href^="#"]').click(function (e) {
        e.preventDefault()
        const target = $($(this).attr("href"))
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 80,
            },
            800,
          )
        }
      })
  
      // Menu mobile
      $(".mobile-menu-btn").click(() => {
        $(".nav-menu").slideToggle()
      })
  
      // Filtro por categoria
      $(".category-card").click(function () {
        const category = $(this).data("category")
        filterByCategory(category)
      })
    }
  
    // Adicionar produto ao carrinho
    function addToCart(productId) {
      const product = products.find((p) => p.id === productId)
      if (!product) return
  
      const existingItem = cart.find((item) => item.id === productId)
  
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      }
  
      saveCart()
      updateCartCount()
      showNotification(`${product.name} adicionado ao carrinho!`)
    }
  
    // Salvar carrinho no localStorage
    function saveCart() {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  
    // Atualizar contador do carrinho
    function updateCartCount() {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
      $(".cart-count").text(totalItems)
    }
  
    // Abrir modal do carrinho
    function openCartModal() {
      const cartItems = $("#cart-items")
      cartItems.empty()
  
      if (cart.length === 0) {
        cartItems.html('<p style="text-align: center; color: #9ca3af;">Seu carrinho está vazio</p>')
      } else {
        cart.forEach((item) => {
          const cartItem = $(`
                      <div class="cart-item">
                          <div class="cart-item-info">
                              <h4>${item.name}</h4>
                              <p>Quantidade: ${item.quantity}</p>
                          </div>
                          <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}</div>
                      </div>
                  `)
          cartItems.append(cartItem)
        })
      }
  
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      $("#cart-total").text(total.toFixed(2).replace(".", ","))
  
      $("#cart-modal").fadeIn()
    }
  
    // Fechar modal
    function closeModal() {
      $(".modal").fadeOut()
    }
  
    // Limpar carrinho
    function clearCart() {
      cart = []
      saveCart()
      updateCartCount()
      openCartModal()
      showNotification("Carrinho limpo!")
    }
  
    // Inscrever newsletter
    function subscribeNewsletter(email) {
      // Simular envio
      const button = $("#newsletter-form button")
      const originalText = button.text()
  
      button.html('<span class="loading"></span> Inscrevendo...')
      button.prop("disabled", true)
  
      setTimeout(() => {
        button.text(originalText)
        button.prop("disabled", false)
        $("#newsletter-form")[0].reset()
        showNotification("Inscrição realizada com sucesso!")
      }, 2000)
    }
  
    // Mostrar notificação
    function showNotification(message) {
      const notification = $(`
              <div style="
                  position: fixed;
                  top: 100px;
                  right: 20px;
                  background: #10b981;
                  color: white;
                  padding: 15px 20px;
                  border-radius: 8px;
                  z-index: 3000;
                  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                  transform: translateX(100%);
                  transition: transform 0.3s ease;
              ">${message}</div>
          `)
  
      $("body").append(notification)
  
      setTimeout(() => {
        notification.css("transform", "translateX(0)")
      }, 100)
  
      setTimeout(() => {
        notification.css("transform", "translateX(100%)")
        setTimeout(() => notification.remove(), 300)
      }, 3000)
    }
  
    // Filtrar por categoria
    function filterByCategory(category) {
      showNotification(`Filtrando por: ${category}`)
      // Aqui você implementaria a lógica de filtro real
    }
  
    // Efeitos de scroll
    function setupScrollEffects() {
      $(window).scroll(function () {
        const scrollTop = $(this).scrollTop()
  
        // Header background
        if (scrollTop > 50) {
          $(".header").css("background", "rgba(0, 0, 0, 0.9)")
        } else {
          $(".header").css("background", "rgba(0, 0, 0, 0.2)")
        }
  
        // Animações de entrada
        $(".product-card, .category-card").each(function () {
          const elementTop = $(this).offset().top
          const elementBottom = elementTop + $(this).outerHeight()
          const viewportTop = $(window).scrollTop()
          const viewportBottom = viewportTop + $(window).height()
  
          if (elementBottom > viewportTop && elementTop < viewportBottom) {
            $(this).addClass("fade-in-up")
          }
        })
      })
    }
  
    // Efeitos de hover nos cards
    $(".product-card, .category-card").hover(
      function () {
        $(this).css("transform", "translateY(-5px)")
      },
      function () {
        $(this).css("transform", "translateY(0)")
      },
    )
  
    // Parallax simples no hero
    $(window).scroll(function () {
      const scrolled = $(this).scrollTop()
      const parallax = $(".hero-bg")
      const speed = scrolled * 0.5
      parallax.css("transform", `translateY(${speed}px)`)
    })
  })
  