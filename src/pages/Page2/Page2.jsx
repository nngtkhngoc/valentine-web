import bgImage from '../../assets/images/bg.gif';
import pass from '../../assets/images/pass.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { motion } from 'framer-motion';

function Page2() {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
  const [password, setPassword] = useState('');
  const renderNumbers = (numbers) => {
    return numbers.map((number) => {
      return (
        <button
          className='w-[65px] h-[50px] rounded-[30px] bg-pinker text-white flex text-center justify-center items-center font-pangolin text-[25px] hover:bg-pinkest ease-in-out duration-300'
          onClick={number !== '#' ? () => handleOnClick(number) : () => handleEnter()}
        >
          {number}
        </button>
      );
    });
  };

  const handleOnClick = (value) => {
    setPassword((prev) => prev + value);
  };

  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleEnter = () => {
    if (password === '271023') navigate('/next/3/abc');
    else {
      messageApi.open({ type: 'error', content: 'The password is wrong' });
      setPassword('');
    }
  };
  return (
    <div
      className='w-screen h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col gap-2'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {contextHolder}

      <div className='w-[850px] h-[500px] bg-white rounded-[30px] flex items-center justify-center'>
        <motion.div
          initial={{ height: '0%' }}
          animate={{ height: '400px' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className='w-[700px] h-[400px] bg-white border-[7px] border-pinker rounded-[30px] flex items-center justify-center'
        >
          <div className='w-full h-full pl-10 pr-5 pt-5 pb-5 flex items-center gap-[60px]'>
            <motion.img
              src={pass}
              alt='pass'
              className='w-[220px] h-[300px] object-cover rounded-[30px] border-[5px] border-pinker'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.div
              className='h-full w-72 space-y-5 flex flex-col items-center justify-center'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <input
                type='password'
                className='w-full h-[60px] rounded-[30px] bg-pinker font-pangolin text-white placeholder:text-white text-center text-[23px]'
                placeholder='Enter your password'
                value={password}
              ></input>
              <div className='grid grid-cols-3 grid-rows-4 gap-x-[60px] gap-y-[20px] w-full'>
                {renderNumbers(numbers)}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Page2;
