import React, { useState, useRef } from 'react'
import Marquee from "../../assets/Group 45.png"
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./HomeTwo.css"
import Frame from "../../assets/Frame 260.png"
import Frame2 from "../../assets/Group 88.png"
import { useMediaQuery } from '@mui/material';

function HomeTwo() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const textFieldStyle = {
    '& .MuiInputLabel-root': {
      color: 'white',
      fontSize: isMobile ? '16px' : '20px',
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      '&.Mui-focused': {
        color: 'white'
      }
    },
    '& .MuiInput-root': {
      fontSize: isMobile ? '16px' : '20px',
      fontFamily: 'Helvetica',
      color: 'white',
      '&:before': {
        borderBottomColor: 'white'
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'white'
      },
      '&:after': {
        borderBottomColor: 'white'
      },
      '&.Mui-focused': {
        color: 'white'
      }
    },
    '& .MuiFormHelperText-root': {
      fontSize: isMobile ? '12px' : '14px',
      fontFamily: 'Helvetica'
    },
    '& .Mui-error': {
      color: 'white',
      '&:after': {
        borderBottomColor: '#d32f2f'
      }
    }
  }

  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailId: '',
    concern: '',
    caseHistory: '',
    settlementHelp: false,
    privacyConsent: false,
    humanVerification: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 1) {
      newErrors.firstName = 'First name must be at least 1 character';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else {
      const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Invalid US phone number format (e.g. +1 561-555-7689)';
      }
    }

    if (!formData.emailId.trim()) {
      newErrors.emailId = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailId)) {
        newErrors.emailId = 'Please enter a valid email address';
      }
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must agree to the privacy policy';
    }

    if (!formData.humanVerification) {
      newErrors.humanVerification = 'Please verify you are human';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please correct the errors in the form');
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
    }, 1000);
    setIsSubmitting(true);

    const serviceId = 'service_3vbv36o';
    const templateId = 'template_7xrqzk5';
    const publicKey = '5saECdElLOrsCGmdQ';

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.emailId,
      phone_number: formData.phoneNumber,
      concern: formData.concern,
      case_history: formData.caseHistory
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSuccessDialogOpen(true);
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          emailId: '',
          concern: '',
          caseHistory: '',
          settlementHelp: false,
          privacyConsent: false,
          humanVerification: false
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        toast.error('Error submitting form. Please try again.');
        setIsSubmitting(false);
      });

      const closeModal = () => {
        setShowModal(false);
      };
  };

  const handleCloseDialog = () => {
    setSuccessDialogOpen(false);
  };
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  
  // Desktop View
  if (!isMobile) {
    return (
      <div className='mt-32'>
        <div className="flex w-[1566.954px] h-[140px] -rotate-[4.013deg] -ml-10 justify-end items-center gap-8 bg-[#C09F53] overflow-hidden relative mt-10">
          <div className="w-full overflow-hidden py-2">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="flex items-center mr-32">
                  <span className="w-[795px] h-[121px] flex-shrink-0 text-[#FFF] text-center font-['Playfair_Display'] text-[80px] font-[800] leading-none">
                    Get a free case review
                  </span>
                  <img src={Marquee} alt="Banner" className="h-[100px] w-[100px] object-cover ml-16 justify-between mt-[-1%]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-[20px] mt-[-11%] ml-[4%] w-[1150px] h-[1200px] text-center bg-[#023437]">
          <form ref={formRef} onSubmit={handleSubmit} className='mt-[20%]'>
            <div className="flex mt-32">
              <div className="flex-1 px-4">
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  variant="standard"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  sx={{
                    ...textFieldStyle,
                    marginBottom: '60px'
                  }}
                />

                <TextField
                  id="emailId"
                  name="emailId"
                  label="Email ID"
                  variant="standard"
                  fullWidth
                  value={formData.emailId}
                  onChange={handleChange}
                  error={!!errors.emailId}
                  helperText={errors.emailId}
                  sx={textFieldStyle}
                />
              </div>

              <div className="flex-1 px-4">
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  variant="standard"
                  fullWidth
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  sx={{
                    ...textFieldStyle,
                    marginBottom: '60px'
                  }}
                />
                <TextField
                  id="concern"
                  name="concern"
                  label="Select your concern"
                  variant="standard"
                  fullWidth
                  value={formData.concern}
                  onChange={handleChange}
                  error={!!errors.concern}
                  helperText={errors.concern}
                  sx={textFieldStyle}
                />
              </div>
            </div>

            <div className="flex-2 w-[96%] mt-0 ml-[2%]">
              <TextField
                id="caseHistory"
                name="caseHistory"
                label="Briefly explain your case history"
                variant="standard"
                fullWidth
                multiline
                rows={4}
                value={formData.caseHistory}
                onChange={handleChange}
                error={!!errors.caseHistory}
                helperText={errors.caseHistory}
                className='mt-5'
                sx={{
                  ...textFieldStyle,
                  marginBottom: '30px',
                  '& .MuiInputLabel-root': {
                    transform: 'translate(0, -30px) scale(1)',
                    fontSize: '20px',
                    color: "white",
                    fontWeight: 'bold',
                  },
                  '& .MuiInputLabel-shrink': {
                    transform: 'translate(0, -10px) scale(0.75)',
                    color: "white"
                  },
                  '& .MuiInput-root': {
                    marginTop: '10px',
                    color: "white",
                    '&:before': {
                      borderBottom: '1px solid white',
                      marginTop: '20px'
                    },
                    '&:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid white'
                    },
                    '&:after': {
                      borderBottom: '2px solid white'
                    }
                  },
                  '& .MuiInput-input': {
                    color: "white"
                  },
                  '& .MuiFormHelperText-root': {
                    color: "white"
                  }
                }}
              />

              <div className="mt-8 space-y-6 text-white">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="settlementHelp"
                    name="settlementHelp"
                    checked={formData.settlementHelp || false}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="settlementHelp" className="ml-3 block text-lg">
                    I would be needing help to file a settlement.
                  </label>
                </div>

                <div className="flex items-start mt-4">
                  <div className="flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      name="privacyConsent"
                      checked={formData.privacyConsent || false}
                      onChange={handleChange}
                      className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <label htmlFor="privacyConsent" className="ml-3 block text-white text-lg text-left">
                    <span className="block">
                      I agree to the{' '}
                      <a href="/privacy-policy" className="underline hover:text-blue-200">
                        privacy policy
                      </a>{' '}
                      and{' '}
                      <a href="/disclaimer" className="underline hover:text-blue-200">
                        disclaimer
                      </a>{' '}
                      and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list.
                    </span>
                    <span className="block mt-2">
                      I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                    </span>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="humanVerification"
                    name="humanVerification"
                    checked={formData.humanVerification || false}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    required
                  />
                  <label htmlFor="humanVerification" className="ml-3 block text-lg">
                    Please click this box so we know you're a person and not a computer
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                inline-flex
                h-[60px]                     
                px-[49px]                    
                justify-center
                items-center
                gap-[10px]
                flex-shrink-0
                rounded-[60px]
                bg-[#023437]                 
                text-[#FFFBF3]             
                border
                border-[#FFFBF3]             
                font-open-sans             
                text-[16px]                 
                font-bold                    
                leading-normal
                hover:bg-[#374A67]           
                disabled:opacity-70         
                transition-colors           
                duration-200                 
                mt-16
                ml-[-76%]
              "
            >
              {isSubmitting ? 'Submitting...' : 'Begin Here'}
            </button>
          </form>
        </div>

        <div className='mt-16'>
          <img
            src={Frame}
            alt="L Icon"
            className="h-full w-full object-cover mt-3"
          />
        </div>

      </div>
    );
  }

  // Mobile View
  return (
    <>

      <div className='mt-16 px-4'>
        <div className="flex h-[60px] -rotate-[4.013deg] justify-end items-center bg-[#C09F53] overflow-hidden relative mt-5 mx-[-16px]">
          <div className="w-full overflow-hidden py-2">
            <div className="flex whitespace-nowrap animate-marquee">
              <div className="flex items-center mr-16">
                <span className="text-[#FFF] text-center font-['Playfair_Display'] text-[32px] font-[800] leading-none">
                  Get a free case review
                </span>
                <img src={Marquee} alt="Banner" className="h-[40px] w-[40px] object-cover ml-4" />
              </div>
              <div className="flex items-center mr-16">
                <span className="text-[#FFF] text-center font-['Playfair_Display'] text-[32px] font-[800] leading-none">
                  Get a free case review
                </span>
                <img src={Marquee} alt="Banner" className="h-[40px] w-[40px] object-cover ml-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 mt-[-22%] text-center bg-[#023437] rounded-lg">
          <form ref={formRef} onSubmit={handleSubmit} className='mt-[15%] '>
            <div className="space-y-6 text-normal">
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                variant="standard"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                sx={{
                  ...textFieldStyle,
                  marginBottom: '0px',
                  marginTop: '40px'
                }}
              />

              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                variant="standard"
                fullWidth
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                sx={{
                  ...textFieldStyle,
                  marginBottom: '30px'
                }}
              />

              <TextField
                id="emailId"
                name="emailId"
                label="Email ID"
                variant="standard"
                fullWidth
                value={formData.emailId}
                onChange={handleChange}
                error={!!errors.emailId}
                helperText={errors.emailId}
                sx={{
                  ...textFieldStyle,
                  marginBottom: '30px'
                }}
              />

              <TextField
                id="concern"
                name="concern"
                label="Select your concern"
                variant="standard"
                fullWidth
                value={formData.concern}
                onChange={handleChange}
                error={!!errors.concern}
                helperText={errors.concern}
                sx={{
                  ...textFieldStyle,
                  marginBottom: '30px'
                }}
              />

              <TextField
                id="caseHistory"
                name="caseHistory"
                label="Briefly explain your case history"
                variant="standard"
                fullWidth
                multiline
                rows={4}
                value={formData.caseHistory}
                onChange={handleChange}
                error={!!errors.caseHistory}
                helperText={errors.caseHistory}
                sx={{
                  ...textFieldStyle,
                  marginBottom: '30px'
                }}
              />
            </div>

            <div className="mt-6 space-y-4 text-white">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="settlementHelp"
                  name="settlementHelp"
                  checked={formData.settlementHelp || false}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>

              <label htmlFor="settlementHelp" className='mt-[-10%]'>
                I would be needing help to file a settlement.
              </label>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    checked={formData.privacyConsent || false}
                    onChange={handleChange}
                    className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    required
                  />
                </div>
                <label htmlFor="privacyConsent" className="ml-3 block text-white text-base text-left">
                  <span className="block">
                    I agree to the{' '}
                    <a href="/privacy-policy" className="underline hover:text-blue-200">
                      privacy policy
                    </a>{' '}
                    and{' '}
                    <a href="/disclaimer" className="underline hover:text-blue-200">
                      disclaimer
                    </a>.
                  </span>
                  <span className="block mt-2">
                    and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                  </span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="humanVerification"
                  name="humanVerification"
                  checked={formData.humanVerification || false}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  required
                />
                <label htmlFor="humanVerification" className="ml-3 block text-base">
                  Please verify you're human
                </label>
              </div>
            </div>

            <button
        type="submit"
        disabled={isSubmitting}
        onClick={handleSubmit}
        className="
          w-full
          h-[50px]                     
          justify-center
          items-center
          gap-[10px]
          flex-shrink-0
          rounded-[60px]
          bg-[#023437]                 
          text-[#FFFBF3]             
          border
          border-[#FFFBF3]             
          font-open-sans             
          text-[16px]                 
          font-bold                    
          leading-normal
          hover:bg-[#374A67]           
          disabled:opacity-70         
          transition-colors           
          duration-200                 
          mt-8
          mb-4
        "
      >
        {isSubmitting ? 'Submitting...' : 'Begin Here'}
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-[#023437] mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-6">
              Your submission has been received. We'll get back to you soon.
            </p>
            <button
              onClick={closeModal}
              className="
                w-full
                h-[50px]                     
                justify-center
                items-center
                gap-[10px]
                flex-shrink-0
                rounded-[60px]
                bg-[#023437]                 
                text-[#FFFBF3]             
                border
                border-[#023437]             
                font-open-sans             
                text-[16px]                 
                font-bold                    
                leading-normal
                hover:bg-[#374A67]           
                transition-colors           
                duration-200
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    
          </form>
        </div>


      </div>

      <div className='mt-16'>
        <img
          src={Frame2}
          alt="L Icon"
          className="h-full w-full object-cover mt-3"
        />
      </div>
    </>
  );
}

export default HomeTwo;

