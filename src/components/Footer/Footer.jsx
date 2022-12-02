import {Link} from 'react-router-dom';
import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
let Logo ='https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621453/Cooking%20Academy%20Assets/Layer_2_vmobmf.svg';




function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])

  return (
    <>
    <section className='bg-[#000000f6] xs:py-20 md:py-10'>
        <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 md:gap-10 bg-cover bg-no-repeat bg-center md:bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669628048/Cooking%20Academy%20Assets/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_dhixjz.webp)] text-[#ffffffdc] border-[#CBA135] md:border-t-2 md:border-b-2'>
          
          <div className='lg:py-10 ' data-aos="fade-right">
            <img className='' src={Logo}></img>
            <p className='pt-5 xs:text-sm md:text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure, nulla soluta repudiandae non odio quia reprehenderit inventore corporis rem repellendus ullam culpa quo suscipit veniam laboriosam minima nobis obcaecati.</p>
          </div>
          <div className='md:col-span-2 grid xs:py-10 md:py-0 grid-cols-2' data-aos="fade-right">
                  <div className='lg:py-10 grid lg:place-items-center '>
                      <ul className='flex flex-col gap-5 '>
                        <li className='hover:text-[#CBA135]'><Link exact to='/'>Home</Link></li>
                        <li className='hover:text-[#CBA135]'><Link to='/about-us'>About Us</Link></li>
                        <li className='hover:text-[#CBA135]'><Link to=''>Our Program</Link></li>
                        <li className='hover:text-[#CBA135]'><Link to=''>Corporate</Link></li>
                      </ul>
                  </div>
                  <div className='lg:py-10 grid lg:place-items-center '>
                      <ul className='flex flex-col gap-5 '>
                        <li className='hover:text-[#CBA135]'><Link to=''>Kitchen</Link></li>
                        <li className='hover:text-[#CBA135]'><Link to=''>Contact us</Link></li>
                      </ul>
                  </div>
          </div>
          <div className='lg:py-10 text-base font-semibold flex flex-col justify-center gap-10' data-aos="fade-right">
              <div>
                  <p>GET IN TOUCH</p>
                  <a href='#'>+974 5004 7555</a>
                  <p>Email:<a href='#'>Info@cookingacademy.qa</a></p>
              </div>
              <div>
                  <p>the cooking academy</p>
                  <p>Street 978 - zone 31 - building 30 and 32</p>
                  <p>Umm Lekhba. Doha</p>
              </div>
          </div>
        </div>

        <div className='w-11/12 mx-auto flex xs:flex-col md:flex-row xs:gap-5 md:gap-0 justify-between text-white pt-10' >
            <div><p>All Right Reserved.</p></div>
            <div className='flex gap-5'>
              <a href='#'><i class="fa-brands fa-facebook text-xl"></i></a>
              <a href='#'><i class="fa-brands fa-twitter text-xl"></i></a>
              <a href='#'><i class="fa-brands fa-linkedin-in text-xl"></i></a>
            </div>
            <div>
              <p><a href='#'>Terms of Use</a><span className='px-5'>|</span><a href='#'>Privacy Policy</a></p>
            </div>
        </div>
    
    </section>
    </>
  )
}

export default Footer;