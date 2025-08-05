import { FaFacebook, FaGithub, FaGlobe, FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'
import Swal from 'sweetalert2'

const contactDetails = [
  { icon: <FaPhone />, title: 'Mobile Number', text: '+20-10-9718-2681' },
  { icon: <IoLocationSharp />, title: 'Location', text: 'Egypt / Beheira / Abo-Hommos' },
  { icon: <MdEmail />, title: 'E-mail', text: 'muhammedahmedragab@gmail.com' },
  { icon: <FaGlobe />, title: 'Website', text: <a href="https://muhammad-ahmad-xi.vercel.app/" target="_blank" rel="noreferrer">My Portfolio</a> },
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/MuhammedAhmed09" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/19muhammad19" },
  { icon: <RiInstagramFill />, href: "https://www.instagram.com/b7r090/" },
];

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "708bc748-2ea4-40c1-afd8-dd7d6e3104d8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: json
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
          position: "top-end",
          title: 'Success!',
          text: 'Message sent successfully!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        event.target.reset();
    }
};


  return (
    <section className="p-12 w-full min-h-screen lg:ml-52">
      <h2 className="text-3xl font-bold text-[#80ed99] mb-10 text-center">Contact</h2>
      
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='md:w-2/3 flex flex-col items-center text-center'>
          {contactDetails.map((item, index) => (
            <div key={index} className="mb-6 flex flex-col items-center">
              <i className="text-[#80ed99] text-4xl mb-2">{item.icon}</i>
              <b className="text-[#80ed99] block">{item.title}</b>
              <p className="text-sm text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>

        <div>
          <div className='mb-4'>
            <ul className='flex justify-around bg-[#212529] p-3 rounded-3xl text-2xl text-[#80ed99]'>
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} target="_blank" rel="noreferrer">{link.icon}</a>
                </li>
              ))}
            </ul>
          </div>

          <p className='font-bold mb-2'>Send Me A Message</p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className='flex flex-col md:flex-row md:gap-4'>
              <input
                className='bg-[#212529] text-[#e3e3e3] placeholder-[#626a72] w-full rounded px-3 py-2'
                placeholder='Name'
                type="text"
                name='name'
                required
              />
              <input
                className='bg-[#212529] text-[#e3e3e3] placeholder-[#626a72] w-full rounded px-3 py-2 mt-2 md:mt-0'
                placeholder='E-mail'
                type='email'
                name='email'
                required
              />
            </div>
            <textarea
              className='bg-[#212529] text-[#e3e3e3] placeholder-[#626a72] w-full rounded px-3 py-2 min-h-[150px]'
              name='message'
              placeholder='Your message...'
              required
            />
            <button
              type='submit'
              className='bg-[#1d8637] cursor-pointer hover:bg-[#1d8637d2] text-white rounded px-8 py-2 font-semibold transition'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
