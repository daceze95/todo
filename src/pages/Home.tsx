import Form from '../components/InputField';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div className=' bg-[#f4f4f4] h-screen'>
      <Nav />
      <div className='px-[10%] flex flex-1'>
        <Form />
      </div>
    </div>
  );
};

export default Home;
