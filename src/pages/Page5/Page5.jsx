import bgImage from '../../assets/images/bg.gif';
import dino from '../../assets/images/dino01.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Page5() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const moveRandom = () => {
    const randomX = Math.floor(Math.random() * 600) - 600; // Dịch chuyển từ -100px đến 100px
    const randomY = Math.floor(Math.random() * 600) - 600;
    setPosition({ x: randomX, y: randomY });
  };

  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/next/6/tsf');
  };

  return (
    <div
      className='w-screen h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden flex-col gap-3'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        className='font-rubik text-[35px] text-pinkest flex flex-col justify-center items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: 'easeInOut' }}
      >
        <span>Thank you for coming into my life </span>
        <span>{`When I'm with you, I'm so happiiiiiiiiiiiiiiiii <3`}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5, ease: 'easeInOut' }}
        className='font-rubik text-[35px] text-pinkest flex flex-col justify-center items-center'
      >
        {` Happy Valentine's day <3`}
      </motion.div>

      <motion.img
        src={dino}
        alt='dino'
        className='w-[350px] h-[250px]'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 2.6, ease: 'easeInOut' }}
      />
      <div className=' flex flex-col justify-center items-center gap-5'>
        <motion.span
          className='font-rubik text-[38px] text-pinkest'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 5, ease: 'easeInOut' }}
        >
          Do you luv me?
        </motion.span>
        <motion.div
          className='flex gap-5'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 5.8, ease: 'easeInOut' }}
        >
          <button
            onClick={handleOnClick}
            className='font-pangolin w-[80px] h-[50px] bg-pinkest rounded-[30px] border-4 border-white text-[20px] flex justify-center items-center text-white hover:scale-[4.5] ease-in-out duration-300'
          >
            YES
          </button>
          <button
            className='font-pangolin w-[80px] h-[50px] bg-white rounded-[30px] border-4 border-pinkest text-[20px] flex justify-center items-center text-pinkest z-98'
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            onMouseEnter={moveRandom}
          >
            NOPE
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Page5;
