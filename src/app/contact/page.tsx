// import React from 'react'
// import {
//   FaEnvelopeOpen,
//   FaGithubAlt,
//   FaLinkedin,
//   FaPhoneSquareAlt,
//   FaGithub
// } from "react-icons/fa"
// import {FiSend} from "react-icons/fi"
// const Contact = () => {
//   return (
//     <>
//     <section className="contact section">
//       <h2 className="section__title">
//         Get In <span>Touch</span>
//       </h2>
//       <div className="contact__container container grid">
//         <div className="contact__data">
//           <h3 className="contact__title">Don't be Shy  !</h3>
//           <p className="contact__description">
//             Feel free to get in touch with me. Iam always open to disccussing new projects, creative ideas or oppertunities to be part of your visions.
//           </p>
//           <div className="contact__info">
//             <div className="info__item">
//               <FaEnvelopeOpen className='info__icon' />
//               <div>
//                 <span className="info__title">
//                   Mail me
//                 </span>
//                 <h4 className="info__desc">
//                   malika786009@gmail.com
//                 </h4>
//               </div>
//             </div>
//             <div className="info__item">
//               <FaPhoneSquareAlt className='info__icon' />
//               <div>
//                 <span className="info__title">
//                   Call me
//                 </span>
//                 <h4 className="info__desc">
//                   +92 315 3831104
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <div className="contact__socials">
//             <a href="" className="contact__social-link">
//               <FaLinkedin/>
//             </a>
//             <a href="" className="contact__social-link">
//               <FaGithub/>
//             </a>
//           </div>
//         </div>
//         <form className=" contact__form">
//           <div className="form__input-group">
//             <div className="form__input-div">
//               <input type="text"
//                placeholder='Your Name'
//                 className="form__control" />
//             </div>
//             <div className="form__input-div">
//               <input type="email"
//                placeholder='Your Email'
//                 className="form__control" />
//             </div>
//             <div className="form__input-div">
//               <input type="text"
//                placeholder='Your Subject'
//                 className="form__control" />
//             </div>
//           </div>
//           <div className="form__input-div">
//               <textarea 
//               placeholder='Your Message'
//               className='form__control textarea'></textarea>
//             </div>
//             <button className='button'>
//               Send Message
//               <span className='button__icon contact__button-icon'>
//                 <FiSend/>
//               </span>
//             </button>
//         </form>
//       </div>
//     </section>
//     </>
//   )
// }

// export default Contact;
import React from 'react';
import {
  FaEnvelopeOpen,
  FaGithub,
  FaLinkedin,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact section py-9">
      <h2 className=" text-6xl font-bold text-center mb-9 hover:text-rose-800">
        Get In Touch
      </h2>
      <div className="contact__container container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Contact Info Column */}
        <div className="contact__data p-6 bg-white rounded-lg shadow-md">
          <h3 className=" text-2xl font-bold mb-4 hover:text-rose-800">Don't be Shy!</h3>
          <p className=" mb-6 text-gray-600">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className=" mb-6">
            <div className=" flex items-center mb-4">
              <FaEnvelopeOpen className='hover:text-rose-800  text-2xl mr-3' />
              <div>
                <span className=" font-medium">Mail me</span>
                <h4 className=" text-gray-600">malika786009@gmail.com</h4>
              </div>
            </div>
            <div className=" flex items-center">
              <FaPhoneSquareAlt className=' hover:text-rose-800 text-2xl mr-3' />
              <div>
                <span className=" font-medium">Call me</span>
                <h4 className=" text-gray-600">+92 315 3831104</h4>
              </div>
            </div>
          </div>
          <div className=" flex space-x-4">
            <a href="#" className="hover:text-rose-800 text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-rose-800 text-2xl">
              <FaGithub />
            </a>
          </div>
        </div>
        
        {/* Contact Form Column */}
        <form className="p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Your Name' 
                className="form__control w-full p-3 border border-gray-300 rounded-lg" required 
              />
            </div>
            <div className="form__input-div">
              <input 
                type="email" 
                placeholder='Your Email' 
                className="form__control w-full p-3 border border-gray-300 rounded-lg" required 
              />
            </div>
          </div>
          <div className="form__input-div mb-4">
            <input 
              type="text" 
              placeholder='Your Subject' 
              className="form__control w-full p-3 border border-gray-300 rounded-lg" required
            />
          </div>
          <div className="form__input-div mb-4">
            <textarea 
              placeholder='Your Message' 
              className='form__control w-full p-3 border border-gray-300 rounded-lg h-32' required
            ></textarea>
          </div>
          <button className='button w-full py-3 px-4 bg-black text-white font-semibold rounded-lg flex items-center justify-center hover:bg-rose-800 transition'>
            Send Message
            <span className='button__icon contact__button-icon ml-2'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;