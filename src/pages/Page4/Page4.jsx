import bgImage from '../../assets/images/bg.gif';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.JPG';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.JPG';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Page4() {
  const images = [
    { src: img1, date: '18/11/2023', caption: 'ur 1.5-year-old avatar' },
    { src: img2, date: '19/12/2023', caption: `us in the 'trung tam gdqp'` },
    { src: img3, date: '12/05/2024', caption: 'our 200-day anniversary' },
    { src: img4, date: '12/09/2024', caption: 'just a cute random photo <3' },
    { src: img5, date: '27/10/2024', caption: 'our 1-year anniversaryyyyy' },
    { src: img6, date: '01/01/2025', caption: 'us on the first day of 2025' },
  ];
  const [flippedStates, setFlippedStates] = useState(Array(images.length).fill(false));
  const toggleFlip = (index) => {
    setFlippedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const renderImages = (images) => {
    return images.map((image, index) => (
      <motion.div
        key={index}
        className='w-[180px] h-[180px] border-[5px] rounded-[30px] border-pinker cursor-pointer'
        onClick={() => toggleFlip(index)}
        initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: (index + 1) * 1, ease: 'easeInOut' }}
        style={{
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
      >
        <motion.img
          src={image.src}
          className='absolute w-full h-full rounded-[25px] backface-hidden object-cover'
          animate={{ rotateY: flippedStates[index] ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />

        <motion.div
          className='absolute w-full h-full rounded-[25px] border-pinker object-cover cursor-pointer flex flex-col justify-center items-center bg-white'
          animate={{ rotateY: flippedStates[index] ? 0 : -180, opacity: flippedStates[index] ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <span className='font-lilita font-bold text-[25px] text-pinkest'>{image.date}</span>
          <span className='font-pangolin font-bold text-[15px] text-purplepink w-full text-center'>
            {image.caption}
          </span>
        </motion.div>
      </motion.div>
    ));
  };

  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/next/5/kqf');
  };

  return (
    <div
      className='w-screen h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col gap-5'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div className='w-[850px] h-[500px] bg-white rounded-[30px] flex flex-col items-center justify-center gap-[5px]'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0, ease: 'easeInOut' }}
          className='w-full h-[40px] text-[40px] font-rubik text-pinker flex items-center justify-center'
        >
          You & Me
        </motion.div>
        <div className='w-[650px] h-[400px]  grid grid-cols-3 grid-rows-2 gap-x-[40px] gap-y-[20px] flex items-center justify-center'>
          {renderImages(images)}
        </div>
        <motion.div
          className='font-pangolin text-bold'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 6.5, ease: 'easeInOut' }}
        >
          <span className='underline italic text-pinkest'>Notice:</span>{' '}
          <span className='text-pinker'>Click on the photo !!</span>
        </motion.div>
      </motion.div>
      <motion.button
        className='w-[250px] h-[50px] bg-lesspink border-[5px] border-pinkest rounded-[30px] font-pangolin text-pinkest text-[20px] hover:scale-[1.2]  hover:bg-pinkest hover:text-white ease-in-out duration-300'
        onClick={handleOnClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 7.5, ease: 'easeInOut' }}
      >
        Something I wanna say...
      </motion.button>
    </div>
  );
}

export default Page4;
