// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu")
const navMenu = document.querySelector(".nav-menu")

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

// Interest in product function
function interesseCompra(produto, preco) {
  const mensagem = `Olá! Tenho interesse em comprar o produto: ${produto} por R$ ${preco},00 para ajudar a Maria no tratamento contra o câncer. Gostaria de mais informações sobre:

📦 Estado do produto
🚚 Forma de entrega
💳 Formas de pagamento
📋 Documentação/garantia

Aguardo retorno. Obrigado(a)!`

  const numeroWhatsApp = "5511999999999" // Replace with actual number
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`

  // Show confirmation dialog
  if (confirm(`Você será redirecionado para o WhatsApp para demonstrar interesse no produto: ${produto}`)) {
    window.open(url, "_blank")
  }
}

// Product details modal
function mostrarDetalhes(produto) {
  let content = ""

  switch (produto) {
    case "tv":
      content = `
                <h2>Smart TV 65" 4K - Detalhes</h2>
                <div class="produto-detalhes">
                    <img src="https://carrefourbr.vtexassets.com/arquivos/ids/176572786/smart-tv-samsung-65-polegadas-4k-uhd-crystal-4k-gaming-hub-alexa-65du7700-1.jpg?v=638652972714270000" alt="Smart TV detalhes" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    
                    <h3>Especificações Técnicas:</h3>
                    <ul style="margin-bottom: 1.5rem;">
                        <li><strong>Marca:</strong> Samsung</li>
                        <li><strong>Modelo:</strong> 65DU7700</li>
                        <li><strong>Tamanho:</strong> 65 polegadas</li>
                        <li><strong>Resolução:</strong> 4K Ultra HD (3840x2160)</li>
                        <li><strong>HDR:</strong> HDR10+</li>
                        <li><strong>Sistema:</strong> Tizen Smart TV</li>
                        <li><strong>Conectividade:</strong> Wi-Fi, Alexa, Bluetooth, 3x HDMI, 2x USB</li>
                        <li><strong>Ano:</strong> 2023</li>
                    </ul>
                    
                    <h3>Estado do Produto:</h3>
                    <p>TV em excelente estado, sem riscos na tela, todos os controles funcionando perfeitamente. Inclui controle remoto original, manual e cabo de força.</p>
                    
                    <h3>Motivo da Venda:</h3>
                    <p>Maria está vendendo para custear seu tratamento contra o câncer. A TV foi pouco usada e sempre bem cuidada.</p>
                    
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                        <strong>💝 Sua compra ajuda diretamente no tratamento de Maria!</strong>
                    </div>
                </div>
            `
      break

    case "airfryer":
      content = `
                <h2>Air Fryer 5.5L Digital - Detalhes</h2>
                <div class="produto-detalhes">
                    <img src="https://philco.vtexassets.com/arquivos/ids/250352-1200-1200?v=638544121435570000&width=1200&height=1200&aspect=true" alt="Air Fryer detalhes" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    
                    <h3>Especificações Técnicas:</h3>
                    <ul style="margin-bottom: 1.5rem;">
                        <li><strong>Marca:</strong> Britânia</li>
                        <li><strong>Modelo:</strong> BFR51</li>
                        <li><strong>Capacidade:</strong> 5.5 Litros</li>
                        <li><strong>Potência:</strong> 1500W</li>
                        <li><strong>Timer:</strong> Até 60 minutos</li>
                        <li><strong>Temperatura:</strong> 80°C a 200°C</li>
                    </ul>
                    
                    <h3>Estado do Produto:</h3>
                    <p>Air Fryer em muito bom estado, cesta antiaderente sem riscos, display funcionando perfeitamente. Inclui manual de instruções e livro de receitas.</p>
                    
                    <h3>Acessórios Inclusos:</h3>
                    <ul>
                        <li>Cesta removível antiaderente</li>
                        <li>Manual de instruções</li>
                        <li>Livro de receitas</li>
                        <li>Cabo de força</li>
                    </ul>
                    
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                        <strong>💝 Sua compra ajuda diretamente no tratamento de Maria!</strong>
                    </div>
                </div>
            `
      break

    case "microondas":
      content = `
                <h2>Microondas 20L - Detalhes</h2>
                <div class="produto-detalhes">
                    <img src="https://m.media-amazon.com/images/I/41kh2TI9f0L._AC_SX679_.jpg" alt="Microondas detalhes" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    
                    <h3>Especificações Técnicas:</h3>
                    <ul style="margin-bottom: 1.5rem;">
                        <li><strong>Marca:</strong>Midea</li>
                        <li><strong>Modelo:</strong> MRAS22</li>
                        <li><strong>Capacidade:</strong> 20 Litros</li>
                        <li><strong>Potência:</strong> 900W</li>
                        <li><strong>Níveis de Potência:</strong> 10</li>
                        <li><strong>Material:</strong> Aço inox</li>
                        <li><strong>Prato:</strong> Giratório de vidro</li>
                        <li><strong>Timer:</strong> Até 99 minutos</li>
                        <li><strong>Trava:</strong> Segurança para crianças</li>
                        <li><strong>Dimensões:</strong> 34,2 x 43,9 x 25,8 centímetros</li>
                    </ul>
                    
                    <h3>Estado do Produto:</h3>
                    <p>Microondas em bom estado, funcionamento perfeito, interior limpo e conservado. Pequenos sinais de uso normal na parte externa. Inclui prato giratório e manual.</p>
                    
                    <h3>Funcionalidades:</h3>
                    <ul>
                        <li>10 níveis de potência</li>
                        <li>Timer digital</li>
                        <li>Trava de segurança</li>
                        <li>Descongelamento automático</li>
                        <li>Função manter aquecido</li>
                    </ul>
                    
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                        <strong>💝 Sua compra ajuda diretamente no tratamento de Maria!</strong>
                    </div>
                </div>
            `
      break

    case "geladeira":
      content = `
                <h2>Geladeira Duplex 413L - Detalhes</h2>
                <div class="produto-detalhes">
                    <img src="https://a-static.mlcdn.com.br/1500x1500/refrigerador-philco-413-litros-top-mounted-prf501ti/britania/23040/8f31b152bb4254066cf809da2d08ae45.jpeg" alt="Geladeira detalhes" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    
                    <h3>Especificações Técnicas:</h3>
                    <ul style="margin-bottom: 1.5rem;">
                        <li><strong>Marca:</strong> Philco</li>
                        <li><strong>Modelo:</strong> PRF501TI</li>
                        <li><strong>Capacidade:</strong> 413 Litros</li>
                        <li><strong>Tipo:</strong> 1 portas</li>
                        <li><strong>Sistema:</strong> Frost Free</li>
                        <li><strong>Eficiência:</strong> Classe A</li>
                        <li><strong>Cor:</strong> Inox</li>
                        <li><strong>Dimensões:</strong> 177,5 x 70,5 x 66 cm</li>
                    </ul>
                    
                    <h3>Estado do Produto:</h3>
                    <p>Geladeira em excelente estado de conservação, funcionamento perfeito, sem vazamentos. Motor silencioso, todas as gavetas e prateleiras incluídas.</p>
                    
                    <h3>Características:</h3>
                    <ul>
                        <li>Frost Free (não forma gelo)</li>
                        <li>Compartimento para frutas e verduras</li>
                        <li>Prateleiras reguláveis</li>
                        <li>Porta-ovos e porta-garrafas</li>
                        <li>Freezer com gavetas</li>
                        <li>Baixo consumo de energia</li>
                    </ul>
                    
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                        <strong>💝 Sua compra ajuda diretamente no tratamento de Maria!</strong>
                    </div>
                </div>
            `
      break
  }

  openModal(content)
}

// Contact form submission
function enviarMensagem(event) {
  event.preventDefault()

  const form = event.target
  const nome = form.querySelector('input[type="text"]').value
  const motivo = form.querySelector("select").value

  // Simulate form submission
  alert(`Obrigado ${nome}! Sua mensagem sobre "${motivo}" foi enviada com sucesso. Entraremos em contato em breve.`)

  // Reset form
  form.reset()
}

// Newsletter subscription
function assinarNewsletter(event) {
  event.preventDefault()

  const email = event.target.querySelector('input[type="email"]').value

  // Simulate subscription
  alert(`Obrigado por se inscrever! Você receberá atualizações sobre a jornada de Maria no email: ${email}`)

  // Reset form
  event.target.reset()
}

// Modal functions
const modal = document.getElementById("modal")
const modalContent = document.getElementById("modal-content-inner")
const closeModal = document.querySelector(".close-modal")

function openModal(content) {
  modalContent.innerHTML = content
  modal.style.display = "block"
  document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
}

function closeModalFunc() {
  modal.style.display = "none"
  document.body.style.overflow = "auto" // Re-enable scrolling
}

closeModal.addEventListener("click", closeModalFunc)

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModalFunc()
  }
})

// Show bank details
function mostrarDados(tipo) {
  if (tipo === "doacao") {
    const content = `
            <h2>Dados para Doação</h2>
            <div class="dados-bancarios">
                <p><strong>Banco:</strong> Banco do Brasil</p>
                <p><strong>Agência:</strong> 1234-5</p>
                <p><strong>Conta:</strong> 12345-6</p>
                <p><strong>Titular:</strong> Maria Silva</p>
                <p><strong>CPF:</strong> 123.456.789-00</p>
                <p><strong>Pix:</strong> ajudamaria@email.com</p>
            </div>
            <p class="mt-4">Qualquer valor é bem-vindo e fará diferença no tratamento de Maria.</p>
            <button class="btn-ajudar mt-4" onclick="copiarDados()">Copiar Dados</button>
        `
    openModal(content)
  }
}

// Show volunteer form
function mostrarFormulario(tipo) {
  if (tipo === "voluntario") {
    const content = `
            <h2>Seja um Voluntário</h2>
            <form id="form-voluntario" class="mt-4">
                <div class="form-group">
                    <label for="nome">Nome Completo</label>
                    <input type="text" id="nome" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" required>
                </div>
                <div class="form-group">
                    <label for="disponibilidade">Disponibilidade</label>
                    <select id="disponibilidade">
                        <option value="dias-uteis">Dias úteis</option>
                        <option value="finais-semana">Finais de semana</option>
                        <option value="ambos">Ambos</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="habilidades">Habilidades</label>
                    <textarea id="habilidades" rows="3"></textarea>
                </div>
                <button type="submit" class="btn-ajudar mt-4">Enviar</button>
            </form>
        `
    openModal(content)

    // Add submit event listener to the form
    setTimeout(() => {
      const formVoluntario = document.getElementById("form-voluntario")
      if (formVoluntario) {
        formVoluntario.addEventListener("submit", (e) => {
          e.preventDefault()
          alert("Obrigado por se voluntariar! Entraremos em contato em breve.")
          closeModalFunc()
        })
      }
    }, 100)
  }
}

// Copy bank details
function copiarDados() {
  const dadosBancarios = document.querySelector(".dados-bancarios").innerText

  // Create a temporary textarea element to copy the text
  const textarea = document.createElement("textarea")
  textarea.value = dadosBancarios
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)

  alert("Dados bancários copiados para a área de transferência!")
}

// Copy PIX function
function copiarPix() {
  const pixKey = "ajudamaria@email.com"

  // Create a temporary textarea element to copy the text
  const textarea = document.createElement("textarea")
  textarea.value = pixKey
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)

  alert("Chave PIX copiada para a área de transferência!\n\nPIX: ajudamaria@email.com")
}

// Send emotional support
function enviarApoio() {
  const mensagem = `Olá Maria! 

Quero que saiba que você não está sozinha nessa luta. Sua força e determinação são inspiradoras! 

Estou torcendo muito pela sua recuperação e enviando energias positivas. Continue firme, você é uma guerreira! 💪❤️

Com carinho e solidariedade.`

  const numeroWhatsApp = "5511999999999"
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`

  if (confirm("Você será redirecionado para o WhatsApp para enviar uma mensagem de apoio para Maria.")) {
    window.open(url, "_blank")
  }
}

// Share functions
function compartilhar(rede) {
  const url = encodeURIComponent(window.location.href)
  const titulo = encodeURIComponent("Ajude Maria na luta contra o câncer")
  const texto = encodeURIComponent(
    "Maria está vendendo seus eletrodomésticos para custear o tratamento contra o câncer. Vamos ajudá-la! 💪❤️",
  )

  let shareUrl = ""

  window.open(shareUrl, "_blank")
}

// Testimonials slider
const slider = document.getElementById("depoimentos-slider")
const prevBtn = document.getElementById("prev-depoimento")
const nextBtn = document.getElementById("next-depoimento")
let slideIndex = 0
const slides = document.querySelectorAll(".depoimento-card")
const totalSlides = slides.length

function showSlide(index) {
  if (index < 0) {
    slideIndex = totalSlides - 1
  } else if (index >= totalSlides) {
    slideIndex = 0
  } else {
    slideIndex = index
  }

  slider.scrollTo({
    left: slideIndex * slider.offsetWidth,
    behavior: "smooth",
  })
}

prevBtn.addEventListener("click", () => {
  showSlide(slideIndex - 1)
})

nextBtn.addEventListener("click", () => {
  showSlide(slideIndex + 1)
})

// Auto slide every 5 seconds
setInterval(() => {
  showSlide(slideIndex + 1)
}, 5000)

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  }
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Add animation on page load
document.addEventListener("DOMContentLoaded", () => {
  // Animate product cards
  const cards = document.querySelectorAll(".produto-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
    observer.observe(card)
  })

  // Animate history cards
  const historyCards = document.querySelectorAll(".historia-card")
  historyCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateX(-30px)"
    card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`
    observer.observe(card)
  })

  // Animate help cards
  const helpCards = document.querySelectorAll(".ajudar-card")
  helpCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`
    observer.observe(card)
  })

  // Animate progress bars
  setTimeout(() => {
    const progressBars = document.querySelectorAll(".progresso-atual, .meta-progresso")
    progressBars.forEach((bar) => {
      const width = bar.style.width
      bar.style.width = "0"
      setTimeout(() => {
        bar.style.width = width
      }, 500)
    })
  }, 1000)
})

// Add "animate" class to elements when they come into view
document.querySelectorAll(".animate").forEach((el) => {
  observer.observe(el)
})

// Back to top button
const backToTopButton = document.createElement("button")
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
backToTopButton.className = "back-to-top"
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
`

document.body.appendChild(backToTopButton)

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block"
  } else {
    backToTopButton.style.display = "none"
  }
})

// Add CSS for modal form
const style = document.createElement("style")
style.textContent = `
    .form-group {
        margin-bottom: 1rem;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    
    .mt-4 {
        margin-top: 1rem;
    }
    
    .dados-bancarios {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 5px;
        margin: 1rem 0;
    }
`
document.head.appendChild(style)

// Add CSS for product details
const style2 = document.createElement("style")
style2.textContent = `
    .produto-detalhes ul {
        list-style: none;
        padding-left: 0;
    }
    
    .produto-detalhes ul li {
        padding: 0.3rem 0;
        border-bottom: 1px solid #eee;
    }
    
    .produto-detalhes ul li:last-child {
        border-bottom: none;
    }
    
    .produto-detalhes h3 {
        color: var(--primary-color);
        margin: 1.5rem 0 1rem 0;
        font-size: 1.2rem;
    }
    
    .produto-detalhes p {
        line-height: 1.6;
        margin-bottom: 1rem;
    }
`
document.head.appendChild(style2)

// Count animation for stats
function animateCounter(element, target, duration) {
  let start = 0
  const increment = target / (duration / 16)

  function updateCount() {
    start += increment
    if (start < target) {
      element.textContent = Math.floor(start)
      requestAnimationFrame(updateCount)
    } else {
      element.textContent = target
    }
  }

  updateCount()
}

// Countdown to next event
function updateCountdown() {
  // Set the date for the next fundraising event (example: 30 days from now)
  const eventDate = new Date()
  eventDate.setDate(eventDate.getDate() + 30)

  const now = new Date()
  const difference = eventDate - now

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  // If you want to add a countdown timer to the page
  // const countdownElement = document.getElementById('countdown');
  // if (countdownElement) {
  //     countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  // }
}

// Update countdown every second
// setInterval(updateCountdown, 1000);

// Update progress periodically (simulate real-time updates)
function updateProgress() {
  const currentAmount = 6000
  const targetAmount = 15000
  const percentage = Math.round((currentAmount / targetAmount) * 100)

  // Update meta progress
  const metaProgress = document.querySelector(".meta-progresso")
  if (metaProgress) {
    metaProgress.style.width = percentage + "%"
    metaProgress.textContent = percentage + "%"
  }

  // Update values
  const valorAtual = document.querySelector(".valor-atual")
  if (valorAtual) {
    valorAtual.textContent = `R$ ${currentAmount.toLocaleString("pt-BR")},00`
  }

  const metaRestante = document.querySelector(".meta-restante")
  if (metaRestante) {
    const remaining = targetAmount - currentAmount
    metaRestante.textContent = `Faltam R$ ${remaining.toLocaleString("pt-BR")},00 para atingir a meta`
  }
}

// Call update progress on load
document.addEventListener("DOMContentLoaded", updateProgress)

// Simulate WhatsApp integration for quick contact
function quickWhatsApp() {
  const mensagem = `Olá! Vim através do site "Ajude Maria" e gostaria de saber mais sobre como posso ajudar no tratamento dela.`
  const numeroWhatsApp = "5511999999999"
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`
  window.open(url, "_blank")
}

// Add floating WhatsApp button
const whatsappButton = document.createElement("button")
whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>'
whatsappButton.className = "whatsapp-float"
whatsappButton.onclick = quickWhatsApp
whatsappButton.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    background: #25d366;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
    z-index: 1000;
    font-size: 1.5rem;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
    transition: all 0.3s ease;
`

document.body.appendChild(whatsappButton)

whatsappButton.addEventListener("mouseenter", () => {
  whatsappButton.style.transform = "scale(1.1)"
})

whatsappButton.addEventListener("mouseleave", () => {
  whatsappButton.style.transform = "scale(1)"
})
