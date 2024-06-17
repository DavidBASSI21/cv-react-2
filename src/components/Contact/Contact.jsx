import { IoCloseOutline } from 'react-icons/io5';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 4050) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 3500);
  };

  const onSubmit = async (data) => {
    const { lastName, firstName, email, subject, message } = data;
    try {
      setDisabled(true);

      const templateParams = {
        lastName,
        firstName,
        email,
        subject,
        message,
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      toggleAlert('Formulaire envoyé avec succès', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Un problème est survenu', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <>
      <h2
        className={
          scrolled ? 'form-title focus-in-contract' : 'form-title--hidden'
        }
      >
        Envie d&apos;en savoir plus ?
      </h2>
      <div className="contact-form-container" id="contact">
        <p className="form-text">
          N&apos;hésitez pas à me contacter pour obtenir plus
          d&apos;informations
        </p>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="name-container">
            <div className="formInput-name-container">
              <label
                htmlFor="lastName"
                className="contact-form-label formInput--name"
              >
                Nom
              </label>
              {/* <div className="formInput--name"> */}
              <input
                type="text"
                name="lastName"
                {...register('lastName', {
                  required: {
                    value: true,
                    message: 'Veuillez saisir votre nom',
                  },
                  maxLength: {
                    value: 50,
                    message: '50 caractères maximum',
                  },
                  pattern: {
                    value: /^[A-Za-z.\s_-]+$/i,
                    message: 'Seulement des caractères alphabétiques',
                  },
                })}
                className="form-control formInput formInput--name"
                placeholder="Votre nom"
              />
            </div>

            <div className="formInput-name-container">
              <label
                htmlFor="firstName"
                className="contact-form-label formInput--name"
              >
                Prénom
              </label>
              <input
                type="text"
                name="firstName"
                {...register('firstName', {
                  required: {
                    value: true,
                    message: 'Veuillez saisir votre prénom',
                  },
                  maxLength: {
                    value: 20,
                    message: '20 caractères maximum',
                  },
                  pattern: {
                    value: /^[A-Za-z.\s_-]+$/i,
                    message: 'Seulement des caractères alphabétiques',
                  },
                })}
                className="form-control formInput formInput--name"
                placeholder="Votre prénom"
              />
            </div>
          </div>

          {errors.lastName && (
            <span className="errorMessage">{errors.lastName.message}</span>
          )}
          {errors.firstName && (
            <span className="errorMessage">{errors.firstName.message}</span>
          )}

          <label htmlFor="email" className="contact-form-label">
            Votre email
          </label>
          <input
            type="email"
            name="email"
            {...register('email', {
              required: {
                value: true,
                message: 'Veuillez saisir une adresse e-mail valide',
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Adresse e-mail non valide',
              },
            })}
            className="form-control formInput"
            placeholder="Votre adresse e-mail"
          />
          {errors.email && (
            <span className="errorMessage">{errors.email.message}</span>
          )}
          <label htmlFor="subject" className="contact-form-label">
            Objet
          </label>
          <input
            type="text"
            name="subject"
            {...register('subject', {
              required: {
                value: true,
                message: 'Veuillez saisir un objet de message',
              },
              maxLength: {
                value: 125,
                message: "L'objet ne peut dépasser 125 caractères maximum",
              },
            })}
            className="form-control formInput"
            placeholder="L'objet de votre message"
          />
          {errors.subject && (
            <span className="errorMessage">{errors.subject.message}</span>
          )}
          <label htmlFor="message" className="contact-form-label">
            Votre message
          </label>
          <textarea
            rows={5}
            name="message"
            {...register('message', {
              required: {
                value: true,
                message: 'Veuillez saisir un message',
              },
            })}
            className=" formInput formInput--message"
            placeholder="Votre message"
          />
          {errors.message && (
            <span className="errorMessage">{errors.message.message}</span>
          )}

          {/* <input
          type="text"
          name="message"
          {...register('message', {
            required: true,
          })}
          className="form-control formInput formInput--message"
          placeholder="Votre message"
        /> */}

          <input
            className="form-control formInput formInput--button"
            type="submit"
            value="J'envoie le message"
          />

          {alertInfo.display && (
            <div
              className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
              role="alert"
            >
              {alertInfo.message}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() =>
                  setAlertInfo({ display: false, message: '', type: '' })
                } // Clear the alert when close button is clicked
              >
                <IoCloseOutline />
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
