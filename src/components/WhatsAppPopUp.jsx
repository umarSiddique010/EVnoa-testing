import WhatsAppLogo from '../assets/logo/WhatsApp-logo.png';

const WhatsAppPopUp = () => {
  return (
    <div
      className='
    h-fit w-fit
    fixed bottom-5 right-6 bg-transparent rounded-full z-[1000]
    '
    >
      <a
        href='https://wa.me/919711963167'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='h-24 w-24 cursor-none transition-all ease-in-out delay-75 duration-500 hover:scale-125'
          src={WhatsAppLogo}
          alt='message on whatsApp'
        />
      </a>
    </div>
  );
};

export default WhatsAppPopUp;
