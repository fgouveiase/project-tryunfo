import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <h1>ADICIONE NOVA CARTA</h1>
        <form className="form">
          <label htmlFor="nome">
            Nome
            <input type="text" data-testid="name-input" />
          </label>

          <label htmlFor="descrição">
            Descrição
            <textarea data-testid="description-input" />
          </label>

          <label htmlFor="attr01">
            Attr01
            <input type="number" data-testid="attr1-input" />
          </label>

          <label htmlFor="atrr02">
            Atrr02
            <input type="number" data-testid="attr2-input" />
          </label>

          <label htmlFor="atrr03">
            Atrr03
            <input type="number" data-testid="attr3-input" />
          </label>

          <label htmlFor="imagem">
            Card
            <input type="text" data-testid="image-input" />
          </label>

          <label htmlFor="raridade">
            Raridade
            <select data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="super-trunfo">
            <input type="checkbox" data-testid="trunfo-input" />
            Super Trybe Trunfo
          </label>

          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}
