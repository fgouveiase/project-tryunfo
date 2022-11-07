import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards: [],
    };
  }

  validationButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const maxValueSum = 210;
    const maxAttr = 90;
    const minAttr = 0;
    const inputEmpty = cardName.length === 0 || cardDescription.length === 0
    || cardImage.length === 0 || cardRare.length === 0;
    const attr1 = cardAttr1 >= minAttr && cardAttr1 <= maxAttr;
    const attr2 = cardAttr2 >= minAttr && cardAttr2 <= maxAttr;
    const attr3 = cardAttr3 >= minAttr && cardAttr3 <= maxAttr;
    const attrSum = Math.round(cardAttr1) + Math.round(cardAttr2)
    + Math.round(cardAttr3) <= maxValueSum;
    this.setState({
      isSaveButtonDisabled: inputEmpty || !attr1 || !attr2 || !attr3 || !attrSum,
    });
  };

  onInputChange = (event) => {
    const { name, checked, type } = event.target;
    const verifyCheck = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: verifyCheck,
    }, () => {
      this.validationButton();
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState(
      (prevState) => ({
        saveCards: [...prevState.saveCards, newCard],
      }),
      () => {
        this.setState({
          cardName: '',
          cardDescription: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardImage: '',
          cardRare: 'normal',
          cardTrunfo: false,
        });
      },
    );
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div>
          {saveCards.map((card) => (
            <Card { ...card } key={ card.cardName } />

          ))}
        </div>
      </>
    );
  }
}

export default App;
