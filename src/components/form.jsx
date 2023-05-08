import { Component } from 'react'
import { nanoid } from 'nanoid'
import styleForm from "./form.module.css"


const INITIAL_STATE = {
  name: '',
  number: '',
};



export class Form extends Component {
  state = { ...INITIAL_STATE }

  nameId = nanoid()
  numberId = nanoid()

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    
    
    this.setState({
      [name]: value,
    })
  }
      
      handleSubmit = (e) => {
        e.preventDefault()
        e.currentTarget.reset()
        this.props.onSubmit(this.state)
        
        this.reset()
  }

  reset = () => {
    this.setState({
  name: '',
  number: '',
    })


  }

    render() {
      return <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            id={this.nameId}
            required
          />
        </label> 

        <label htmlFor={this.numberId}>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            id={this.numberId}
            required
          />
        </label>

        <button type='submit' className={styleForm.formBtn}>Add contact</button>
      </form>
    }


}


