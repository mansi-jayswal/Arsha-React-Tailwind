import Button from '../../components/common/Button'


function ContactForm() {
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert('fjknvvj')
  }
  return (
    <div className="">
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 py-8 px-6'>
      <div className="flex gap-4">
        <div className="w-1/2 flex flex-col">
          <label className="text-base text-default-color  mb-1" htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            className="p-2 border text-default-color focus:outline-none focus:ring-2 focus:ring-secondary-color"
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <label className="text-base text-default-color  mb-1" htmlFor="email">Your Email</label>
          <input
            type="email"
            required
            id="email"
            className="p-2 border text-default-color  focus:outline-none focus:ring-2 focus:ring-secondary-color"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-base text-default-color  mb-1" htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          required
          className="p-2 border text-default-color focus:outline-none focus:ring-2 focus:ring-secondary-color"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-base text-default-color  mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          className="p-2 border text-default-color  focus:outline-none focus:ring-2 focus:ring-secondary-color"
          rows="8"
          required
        ></textarea>
      </div>
      <div className='text-center items-center justify-center mt-8'>
        <Button text="Send Message" className="px-8 py-2 text-lg" type="submit"/>
      </div>
      </form>
    </div>
  );
}

export default ContactForm;
