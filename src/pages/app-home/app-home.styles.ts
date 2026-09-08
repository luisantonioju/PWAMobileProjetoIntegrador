import { css } from 'lit';

export const homeStyles = css`
  :host {
    display: block;
    width: 100%;
    font-family: Arial, sans-serif;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }

  .cabecalho {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }

  nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }

  nav a.active {
    font-weight: bold;
    color: #007bff;
  }

  .cabecalho2 {
    text-align: center;
    margin: 20px 0;
  }

  .slideshow-container {
    position: relative;
    max-width: 1000px;
    margin: auto;
  }

  .mySlides {
    display: none;
  }

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    background-color: rgba(0,0,0,0.4);
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }

  .dot.active {
    background-color: #717171;
  }

  .abaixo {
    text-align: center;
    max-width: 800px;
    margin: 30px auto;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .quadrado {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .imagem-quadrado {
    max-width: 100%;
    height: auto;
  }

  .final {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
  }

  .caixa {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;