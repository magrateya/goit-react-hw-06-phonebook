// import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const { register, handleSubmit, errors, reset } = useForm();

  // const handleInputChange = e => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const onHandleSubmit = (data, e) => {
    // e.preventDefault();

    // onSubmit({ name, number });
    onSubmit(data.name, data.number);
    reset({ name: '', number: '' });

    // reset();
  };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <label className={s.nameLabel}>
        Name
        <input
          ref={register({ required: true, maxLength: 20, minLength: 2 })}
          type="text"
          name="name"
          // value={name}
          // onChange={handleInputChange}
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
          // value={number}
          // onChange={handleInputChange}
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
