import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationArrow, faUser } from '@fortawesome/free-solid-svg-icons'

class Form extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      dumpyChecked: false,
      barrowChecked: false,
      pickupChecked: false,
      kindlingChecked: false,
      locationFocussed: false,
      nameFocussed: false,
      phoneFocussed: false,
      emailFocussed: false,
      kindlingFocussed: false,
      barrowFocussed: false,
      dumpyFocussed: false,
      pickupFocussed: false,
      dumpyQuantity: 0,
      barrowQuantity: 0,
      pickupQuantity: 0,
      kindlingQuantity: 0,
      chosenOption: 'email',
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const {  
      dumpyChecked,
      barrowChecked,
      pickupChecked,
      kindlingChecked 
    } = this.state;

    const optionSelected =  dumpyChecked || barrowChecked ||  pickupChecked || kindlingChecked

    return (
      <form
        id="order-form"
        onSubmit={this.submitForm}
        action="https://formspree.io/xwknbwqb"
        method="POST"
        className="log-form"
      >
        <div className={`form-section text-field ${this.state.nameFocussed ? 'focussed' : ''}`}>
          <label><FontAwesomeIcon icon={faUser} />Your Name:</label>
          <input 
            className="field" 
            type="text" 
            name="text"
            onChange={e => {
              if(e.target.value) {
                return this.setState({ nameFocussed: true })
              }
              return this.setState({ nameFocussed: false })}
            } />
        </div>

        <div className={`form-section text-field ${this.state.locationFocussed ? 'focussed' : ''}`}>
          <label><FontAwesomeIcon icon={faLocationArrow} />Your Location:</label>
          <input 
            className="field"
            type="text" 
            name="text" 
            onChange={e => {
              if(e.target.value) {
                return this.setState({ locationFocussed: true })
              }
              return this.setState({ locationFocussed: false })}
            }
          />
        </div>

        <p className="form-section-title">Which firewood products are you interested in?</p>
        <div className="form-section checkbox-group">
          <div className="checkbox-wrapper">
            <label className="colwill-checkbox" for="item1">   
              <input type="checkbox" id="item1" value="Dumpy Bag" 
              onClick={() => this.setState(prevState => ({
                dumpyChecked: !prevState.dumpyChecked
              }))} />
              <div className="checkbox">
                <span>Dumpy Bags</span>
              </div>
            </label>
          </div>
          <div className="checkbox-wrapper">
            <label className="colwill-checkbox" for="item2">
              <input type="checkbox" id="item2" value="Barrow Bags" 
              onClick={() => this.setState(prevState => ({
                barrowChecked: !prevState.barrowChecked
              }))}/>
              <div className="checkbox">
                <span>Barrow Bags</span>
              </div>
            </label>
          </div>
          <div className="checkbox-wrapper">
            <label className="colwill-checkbox" for="item3">
              <input type="checkbox" id="item3" value="Pick Up Loads" 
              onClick={() => this.setState(prevState => ({
                pickupChecked: !prevState.pickupChecked
              }))}/>
              <div className="checkbox">
                <span>Pick Up Loads</span>
              </div>
            </label>
          </div>
          <div className="checkbox-wrapper">
            <label className="colwill-checkbox" for="item4">
              <input type="checkbox" id="item4" value="Kindling Nets" onClick={() => this.setState(prevState => ({
                kindlingChecked: !prevState.kindlingChecked
              }))}/>
              <div className="checkbox">
                <span>Kindling Nets</span>
              </div>
            </label>
          </div>
        </div>

        {this.state.dumpyChecked &&
          <div className={`form-section text-field ${this.state.dumpyFocussed ? 'focussed' : ''}`}>
            <label for="dumpy-quantity">How many Dumpy Bags do you require?</label>
            <input className="field" type="number" id="dumpy-quantity" name="dumpy-quantity" min="1" max="50"
            onChange={e => {
              this.setState({ dumpyQuantity: parseInt(e.target.value) })
              if(e.target.value) {
                return this.setState({ dumpyFocussed: true })
              }
              return this.setState({ dumpyFocussed: false })
              }
            }/>
          </div>
        }

        {this.state.barrowChecked &&
          <div className={`form-section text-field ${this.state.barrowFocussed ? 'focussed' : ''}`}>
            <label for="barrow-quantity">How many Barrow Bags do you require?</label>
            <input className="field" type="number" id="barrow-quantity" name="barrow-quantity" min="1" max="50"
            onChange={e => {
              this.setState({ barrowQuantity: parseInt(e.target.value) })
              if(e.target.value) {
                return this.setState({ barrowFocussed: true })
              }
              return this.setState({ barrowFocussed: false })
              }
            }/>
          </div>
        }

        {this.state.pickupChecked &&
          <div className={`form-section text-field ${this.state.pickupFocussed ? 'focussed' : ''}`}>
            <label for="pickup-quantity">How many Pick Loads do you require?</label>
            <input className="field" type="number" id="pickup-quantity" name="pickup-quantity" min="1" max="50"
            onChange={e => {
              this.setState({ pickupQuantity: parseInt(e.target.value) })
              if(e.target.value) {
                return this.setState({ pickupFocussed: true })
              }
              return this.setState({ pickupFocussed: false })
              }
            }/>
          </div>
        }

        {this.state.kindlingChecked &&
          <div className={`form-section text-field ${this.state.kindlingFocussed ? 'focussed' : ''}`}>
            <label for="kindling-quantity">How many Kindling Nets do you require?</label>
            <input className="field"  type="number" id="kindling-quantity" name="kindling-quantity" min="1" max="50"
            onChange={e => {
              this.setState({ kindlingQuantity: parseInt(e.target.value) })
              if(e.target.value) {
                return this.setState({ kindlingFocussed: true })
              }
              return this.setState({ kindlingFocussed: false })
              }
            }/>
          </div>
        }
        
        {optionSelected && 
          <div>
            <p className="form-section-title">How would you like us to contact you?</p>
            <div className="form-section checkbox-group">
              <div className="radio-wrapper">
                <label className="colwill-checkbox" for="email">
                  <input type="radio" id="email" name="contact" value="email" 
                  onChange={e => this.setState({ chosenOption: e.target.value })}/>
                  <div className="checkbox">
                    <span>Email</span>
                  </div>
                </label>
              </div>
              <div className="radio-wrapper">
                <label className="colwill-checkbox" for="phone">
                  <input type="radio" id="phone" name="contact" value="phone" 
                  onChange={e => this.setState({ chosenOption: e.target.value })}/>
                  <div className="checkbox">
                    <span>Phone</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        }


        {this.state.chosenOption === 'email' && optionSelected && 
          <div className={`form-section text-field ${this.state.emailFocussed ? 'focussed' : ''}`}>
            <label>
              <FontAwesomeIcon icon={faEnvelope} /> Your Email:
            </label>
            <input 
              className="field" 
              type="email" 
              name="email" 
              onChange={e => {
                if(e.target.value) {
                  return this.setState({ emailFocussed: true })
                }
                return this.setState({ emailFocussed: false })}
              }
              required/>
          </div>
        } 
        {this.state.chosenOption === 'phone' && optionSelected && 
          <div className={`form-section text-field ${this.state.phoneFocussed ? 'focussed' : ''}`}>
            <label for="phone"><FontAwesomeIcon icon={faPhone} />Your Contact Number:</label>
            <input 
              className="field" 
              type="tel" 
              id="phone" 
              name="phone" 
              onChange={e => {
                if(e.target.value) {
                  return this.setState({ phoneFocussed: true })
                }
                return this.setState({ phoneFocussed: false })}
              }
              required></input>
          </div>
        } 

        {this.state.status === "SUCCESS" ? 
          <p>Thank you for your interest, We will be in touch shortly</p> : 
          <button className="btn">Submit</button>
        }
        {this.state.status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }
}

export default Form;
