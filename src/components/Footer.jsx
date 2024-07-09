import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-10 rounded-lg">
      <div className="container mx-auto">
        <div className="flex justify-between mb-6">
          <div>
            <img src={Logo} className="w-40" alt="accredian" />
          </div>
          <button className="bg-blue-500 py-2 px-4 rounded-lg font-semibold">
            Schedule 1-on-1 Call Now
          </button>
        </div>
        <div className="flex justify-between">
          <div className="w-1/3">
            <h2 className="text-lg font-bold mb-4">Programs</h2>
            <ul>
              {[
                'Data Science & AI',
                'Product Management',
                'Business Analytics',
                'Digital Transformation',
                'Business Management',
                'Project Management',
                'Strategy & Leadership',
                'Senior Management',
                'Fintech'
              ].map((program) => (
                <li key={program} className="mb-2 flex justify-between">
                  {program}
                  <span>+</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 ml-5">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul>
              <li className="mb-2">Email us (For Data Science Queries): admissions@accredian.com</li>
              <li className="mb-2">Email us (For Product Management Queries): pmp@accredian.com</li>
              <li className="mb-2">Data Science Admission Helpline: +91 9079652392 (9 AM - 7 PM)</li>
              <li className="mb-2">Product Management Admission Helpline: +91 9625811095</li>
              <li className="mb-2">Enrolled Student Helpline: +91 7699322507</li>
              <li className="mb-2">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
            </ul>
            <h2 className="text-lg font-bold mt-4 mb-4">Why Accredian</h2>
            <div className="flex space-x-4 justify-center">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
          <div className="w-1/3">
            <h2 className="text-lg font-bold mb-4">Accredian</h2>
            <ul>
              <li className="mb-2">About</li>
              <li className="mb-2">Career</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Admission Policy</li>
              <li className="mb-2">Referral Policy</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms Of Service</li>
              <li className="mb-2">Master FAQs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        &copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;