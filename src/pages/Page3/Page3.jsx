import bgImage from '../../assets/images/bg.gif';
import avatar from '../../assets/images/avatar.JPG';
import lock from '../../assets/images/lock.png';
import unlock from '../../assets/images/unlock.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';

function Page3() {
  const targetDate = new Date();
  const calculateTimeLeft = () => {
    const startDate = new Date('2023-10-27T00:00:00');
    const difference = targetDate - startDate;
    const years = Math.floor(difference / (1000 * 60 * 60 * 24) / 365);
    const months = Math.floor(difference / (1000 * 60 * 60 * 24) / 30) - years * 12;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)) - years * 365 - months * 30;

    if (difference > 0) {
      return {
        years: years,
        months: months,
        days: days,
        totalDays: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/next/4/hjk');
  };

  return (
    <div
      className='w-screen h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='w-[850px] h-[500px] bg-white rounded-[30px] flex flex-col items-center justify-center gap-3'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='w-full h-[150px] flex justify-center items-center gap-[50px] pl-3 pr-3'
        >
          <img
            src={avatar}
            className='rounded-full object-cover w-[150px] h-[150px] border-[4px] border-pinker hover:scale-[1.1] ease-in-out duration-300'
          />
          <div className='w-[480px] h-[60px] rounded-full bg-pinker font-pangolin flex items-center justify-center text-[20px] text-white hover:rotate-10 ease-in-out duration-300'>
            It's been a long time since we got to know each other :3
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className='w-full h-[50px] flex justify-center items-center font-lilita text-[45px] text-pinkest '
        >
          {`${timeLeft.years} ${timeLeft.years <= 1 ? 'year' : 'years'}, ${timeLeft.months} ${timeLeft.months <= 1 ? 'month' : 'months'}, ${timeLeft.days} ${timeLeft.days <= 1 ? 'day' : 'days'} `}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className='w-full h-[150px] flex justify-center items-center font-lilita gap-5 '
        >
          <div className='h-full flex flex-col justify-center items-center'>
            <span className='text-[70px] w-[100px] text-purplepink h-[80px] flex flex-col justify-center items-center'>
              {timeLeft.totalDays}
            </span>
            <span className='text-[30px] text-pinker'>Days</span>
          </div>

          <div className='h-full flex flex-col justify-start p-5 font-lilita text-[50px] text-purplepink'> : </div>

          <div className='h-full flex flex-col justify-center items-center'>
            <span className='text-[55px] w-[55px] text-purplepink h-[80px] flex flex-col justify-center items-center'>
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className='text-[30px] text-pinker'>Hrs</span>
          </div>

          <div className='h-full flex flex-col justify-start p-5 font-lilita text-[50px] text-purplepink'> : </div>

          <div className='h-full flex flex-col justify-center items-center'>
            <span className='text-[55px] w-[55px] text-purplepink h-[80px] flex flex-col justify-center items-center'>
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className='text-[30px] text-pinker'>Mins</span>
          </div>

          <div className='h-full flex flex-col justify-start p-5 font-lilita text-[50px] text-purplepink'> : </div>

          <div className='h-full flex flex-col justify-center items-center'>
            <span className='text-[55px] w-[55px] text-purplepink h-[80px] flex flex-col justify-center items-center'>
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
            <span className='text-[30px] text-pinker'>Secs</span>
          </div>
        </motion.div>

        <motion.button
          className='w-[350px] h-[60px] rounded-[30px] bg-pinker flex justify-center items-center gap-5 group hover:bg-pinkest hover:scale-[1.1] ease-in-out duration-300'
          onClick={handleOnClick}
          initial={{ opacity: 0, height: '0%' }}
          animate={{ opacity: 1, height: '60px' }}
          transition={{ duration: 0, ease: 'easeInOut', delay: 4 }}
        >
          <img src={lock} className='w-[30px] h-[30px] group-hover:hidden' alt='Locked' />
          <img src={unlock} className='w-[30px] h-[30px] hidden group-hover:block' alt='Unlocked' />
          <span className='w-max h-full font-pangolin text-white text-[25px] flex justify-center items-center'>
            Unlock our memories
          </span>
        </motion.button>
      </div>
    </div>
  );
}

export default Page3;
