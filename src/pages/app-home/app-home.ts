import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { homeStyles } from './app-home.styles';
import { styles as sharedStyles } from '../../shared.styles';

@customElement('app-home')
export class AppHome extends LitElement {
  @state() slideIndex = 1;

  static styles = [
    sharedStyles,
    homeStyles
  ];

  firstUpdated() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    const slides = this.shadowRoot?.querySelectorAll('.mySlides') as NodeListOf<HTMLElement>;
    const dots = this.shadowRoot?.querySelectorAll('.dot') as NodeListOf<HTMLElement>;

    if (!slides || slides.length === 0) return;

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    slides.forEach(slide => slide.style.display = 'none');
    dots?.forEach(dot => dot.classList.remove('active'));

    if (slides[this.slideIndex - 1]) {
      slides[this.slideIndex - 1].style.display = 'block';
    }
    if (dots && dots[this.slideIndex - 1]) {
      dots[this.slideIndex - 1].classList.add('active');
    }
  }

  render() {
    return html`
      <div class="container">
        <header>
          <div class="cabecalho">
            <img src="/assets/img/olhar_que_protege_transparente.svg" width="200" height="auto" alt="Logo" />
            <nav>
              <a href="/" class="active">Home</a>
              <a href="/sobre">Sobre</a>
              <a href="/videos">Vídeos</a>
              <a href="/blog">Blog</a>
              <a href="/login">Login</a>
            </nav>
          </div>
        </header>

        <section>
          <div class="cabecalho2">
            <img src="/assets/img/image5.png" width="60" height="auto" alt="Ícone" />
            <img src="/assets/img/monitorar-cuidar.png" width="400" height="auto" alt="Monitorar é Cuidar" />
            <br /><br />
            <img src="/assets/img/rectangle7.png" width="600" height="auto" id="retangulo" alt="Detalhe" />
          </div>
        </section>

        <section>
          <div class="slideshow-container">
            <div class="mySlides">
              <img src="/assets/img/banner1.png" style="width: 100%" class="img3" alt="Banner 1" />
            </div>

            <div class="mySlides">
              <img src="/assets/img/banner2.png" style="width: 100%" class="img3" alt="Banner 2" />
            </div>

            <div class="mySlides">
              <img src="/assets/img/banner3.png" style="width: 100%" class="img3" alt="Banner 3" />
            </div>

            <a class="prev" @click="${() => this.plusSlides(-1)}">&#10094;</a>
            <a class="next" @click="${() => this.plusSlides(1)}">&#10095;</a>
          </div>

          <br />

          <div style="text-align: center">
            <span class="dot" @click="${() => this.currentSlide(1)}"></span>
            <span class="dot" @click="${() => this.currentSlide(2)}"></span>
            <span class="dot" @click="${() => this.currentSlide(3)}"></span>
          </div>
        </section>

        <div class="abaixo">
          <p>
            Muitas meninas estão expostas a riscos na internet. É de extrema
            importância que os responsáveis estejam atentos ao comportamento online,
            orientando e oferecendo diálogo aberto para garantir a segurança digital
            delas.
          </p>
        </div>

        <section>
          <div class="final">
            <img src="/assets/img/meninas.png" class="meninas" width="400" alt="Meninas assistindo laptop" />
            <div class="caixa">
              <p class="textinFinal">CUIDAR E AMAR, PODE</p>
              <p class="textinFinal">SALVAR E POUPAR.</p>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}