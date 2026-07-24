import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });
    try {
      const response = await fetch("https://formsubmit.co/ajax/fareedmuneeb98@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          _subject: `New Contact from ${formData.name || 'Website'}`,
          _template: "basic"
        })
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', company: '', email: '', phone: '' });
        setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000);
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000);
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({ type: 'error', message: 'An error occurred while sending the message.' });
      setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="h-ful py-12 sm:py-24 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: " url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-primary font-medium text-[20px] sm:text-[30px] tracking-widest uppercase block font-sans pb-4 ">
            {t('contactTitle') || "Let's"} <span className="text-primary">{t('contactSubtitle') || "Collaborate"}</span> {t('contactTitleSuffix') || ". We're All Ears!"}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-sans">
            {t('contactDesc') || "Open the door to collaboration by sharing your personal details, project goals, and desired timelines. Let our connection be the bridge that turns your vision into reality as we journey together toward a common goal."}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#101424] p-4 sm:p-12 rounded-2xl shadow-2xl border border-white/5">
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold font-sans">{t('contactFormName') || 'Full Name'}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contactFormName') || 'Full Name'}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-sans transition-all"
                />
              </div>

              {/* Company/Organization */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold font-sans">{t('contactFormCompany') || 'Company/Organization'}</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('contactFormCompany') || 'Company/Organization'}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-sans transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Your Email */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold font-sans">{t('contactFormEmail') || 'Your Email'}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contactFormEmail') || 'Your Email'}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-sans transition-all"
                />
              </div>

              {/* Contact Number */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold font-sans">{t('contactFormPhone') || 'Contact Number'}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contactFormPhone') || 'Contact Number'}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-sans transition-all"
                />
              </div>
            </div>

            {/* Submit Button and Status */}
            <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mt-4">
              {submitStatus.message && (
                <div className={`w-full sm:w-auto px-4 py-3 rounded-lg text-sm font-semibold font-sans text-center transition-all duration-300 ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'}`}>
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto px-10 py-3 bg-primary hover:bg-[#d9441d] text-white font-bold rounded-lg transition-all duration-300 shadow-[0_4px_15px_rgba(247,80,35,0.4)] hover:shadow-[0_4px_25px_rgba(247,80,35,0.6)] cursor-pointer ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (t('contactFormSending') || 'Sending...') : (t('contactFormSend') || 'Send Message')}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
