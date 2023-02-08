import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './contact-form.module.scss';

const INITIAL = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL;

  handleChangeInput = e => {
    const { name, value } = e.target;
    console.log(e);
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = e => {
    console.log(1);
    e.preventDefault();
    console.log(e.target);
    this.props.onAddNumber({ ...this.state, id: nanoid() });
    this.setState(INITIAL);
  };

  render() {
    console.log(this.handleSubmitForm);
    const { name, number } = this.state;
    return (
      <div className={css.formBox}>
        <form className={css.form} onSubmit={this.handleSubmitForm}>
          <label className={css.text}>Name</label>
          <input
            onChange={this.handleChangeInput}
            className={css.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.text}>Number</label>
          <input
            onChange={this.handleChangeInput}
            className={css.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
