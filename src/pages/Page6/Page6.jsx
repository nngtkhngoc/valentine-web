import cat from '../../assets/images/besito-catlove.gif';
import bgImage from '../../assets/images/bg.gif';
import { motion } from 'framer-motion';

function Page6() {
  return (
    <div
      className='w-screen h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden flex-col gap-10'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.img
        src={cat}
        alt='cat'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0, ease: 'easeInOut' }}
      />
      <motion.div
        className='font-pangolin font-bold text-[70px] text-pinkest animate-bounce'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
      >
        GOODBYEEEEEEEEEEEEEE
      </motion.div>
    </div>
  );
}

export default Page6;
