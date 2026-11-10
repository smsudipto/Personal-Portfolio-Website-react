import { useState } from 'react'
import personalInfo from '../data/personalInfo'
import '../styles/contact.css'

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
    setSuccessMessage('')
  }

  const validateForm = () => {
    const nextErrors = {}
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    }

    if (!trimmedData.name) nextErrors.name = 'Please enter your name.'
    if (!trimmedData.email) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!emailPattern.test(trimmedData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!trimmedData.subject) nextErrors.subject = 'Please enter a subject.'
    if (!trimmedData.message) nextErrors.message = 'Please enter a message.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSuccessMessage('')
      return
    }

    setErrors({})
    setFormData(initialFormData)
    setSuccessMessage(
      'Thanks for your message. This frontend demo validated your form successfully.',
    )
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content container">
        <div className="section-heading contact-heading">
          <p className="section-kicker">Let&apos;s connect</p>
          <h2>Get In Touch</h2>
          <p className="contact-introduction">
            Have a question or want to discuss an opportunity? Send a message
            using the form below. This is a frontend-only contact form
            demonstration.
          </p>
        </div>

        <div className="contact-layout">
          <aside className="contact-details">
            <h3>Contact information</h3>
            <p>
              The details below are editable placeholders until your preferred
              contact information is available.
            </p>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>{personalInfo.contactEmail}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{personalInfo.contactLocation}</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>{personalInfo.contactAvailability}</dd>
              </div>
            </dl>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {[
              { name: 'name', label: 'Name', type: 'text' },
              { name: 'email', label: 'Email', type: 'email' },
              { name: 'subject', label: 'Subject', type: 'text' },
            ].map((field) => (
              <div className="form-field" key={field.name}>
                <label htmlFor={`contact-${field.name}`}>{field.label}</label>
                <input
                  id={`contact-${field.name}`}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors[field.name])}
                  aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                />
                {errors[field.name] && (
                  <span id={`${field.name}-error`} className="field-error" role="alert">
                    {errors[field.name]}
                  </span>
                )}
              </div>
            ))}

            <div className="form-field form-field-message">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span id="message-error" className="field-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button className="button button-primary contact-submit" type="submit">
              Send Message
            </button>
            {successMessage && (
              <p className="form-success" role="status">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
