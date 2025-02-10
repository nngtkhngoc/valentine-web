import bgImage from '../../assets/images/bg.gif';
import letter from '../../assets/images/letter.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function HomePage() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/next/2');
  };

  return (
    <div
      className='w-screen h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col gap-2'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Hình ảnh xuất hiện từ từ */}
      <motion.img
        src={letter}
        alt='Letter'
        className='w-[500px]'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className='font-rubik text-[36px] flex flex-col justify-center items-center text-pinkest'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className='animate-bounce'>KNOCK KNOCK</span>
        <span>U'VE GOT A LETTER JUST FOR U :3 </span>
      </motion.div>

      <motion.button
        className='w-[576px] h-[82px] rounded-[30px] border-[5px] border-pinkest bg-lesspink font-pangolin text-[40px] text-pinkest hover:scale-[1.2] ease-in-out duration-300'
        onClick={handleOnClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Click to open it
      </motion.button>
    </div>
  );
}

export default HomePage;
