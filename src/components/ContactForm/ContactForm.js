// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './ContactForm.module.css';
import actions from '../../redux/actions';
import { getItems } from '../../redux/selectors';

export default function ContactForm() {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, reset } = useForm();

  const onHandleSubmit = (data, e) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase(),
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(actions.addContact(data.name, data.number));
    // onSubmit(data.name, data.number);
    reset({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <label className={s.nameLabel}>
        Name
        <input
          ref={register({ required: true, maxLength: 20, minLength: 2 })}
          type="text"
          name="name"
        />
        {errors.name?.type === 'required' && (
          <span style={{ color: 'red' }}>'Your input is required'</span>
        )}
        {errors.name?.type === 'maxLength' && (
          <span style={{ color: 'red' }}>'Your input is too long'</span>
        )}
        {errors.name?.type === 'minLength' && (
          <span style={{ color: 'red' }}>'Your input is too short'</span>
        )}
      </label>
      <label className={s.nameLabel}>
        Number
        <input
          ref={register({ required: true, maxLength: 20, minLength: 7 })}
          type="text"
          name="number"
        />
        {errors.number?.type === 'required' && (
          <span style={{ color: 'red' }}>'Your input is required'</span>
        )}
        {errors.number?.type === 'maxLength' && (
          <span style={{ color: 'red' }}>'Your input is too long'</span>
        )}
        {errors.number?.type === 'minLength' && (
          <span style={{ color: 'red' }}>'Your input is too short'</span>
        )}
      </label>
      <button className={s.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// step_1
// const mapStatetoProps = ({ contacts: { items, filter } }) => ({
//   contacts: items,
// });
// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
// });
// export default connect(mapStatetoProps, mapDispatchToProps)(ContactForm);
