import React,{useState} from 'react'
import './landingPage.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ExploreSlider from '../../components/sliders/explore-slider'
import WorkSlider from '../../components/sliders/workshop-slider';
import {Faq,Price} from '../../components/constant/data'


// Assets Links
let Brand1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669636282/Cooking%20Academy%20Assets/PngItem_2430409_c1mjn7.png';
let Brand2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621451/Cooking%20Academy%20Assets/Layer_2_1_i3ipvl.svg';
let Brand3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621452/Cooking%20Academy%20Assets/Layer_2_2_ge5flv.svg';
let Brand4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621451/Cooking%20Academy%20Assets/Layer_2_3_id8fxj.svg';
let Brand5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621453/Cooking%20Academy%20Assets/logo_1_dbbxfe.webp';
let Brand6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621452/Cooking%20Academy%20Assets/Layer_2_4_huybkz.svg';
let Brand7 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621452/Cooking%20Academy%20Assets/Layer_2_5_gnuqug.svg';
let Videotemp = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621456/Cooking%20Academy%20Assets/Downloader.la_-62d10cae714b0_sk6f66.webp';
let zomImg = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621459/Cooking%20Academy%20Assets/banner_ur6e4k.webp';
let Item1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621459/Cooking%20Academy%20Assets/Chicken-Yakitori_EXPS_FT21_186160_F_0607_1-15_njhpqx.webp';
let Item2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/Downloader.la_-62d1127ecf2b9_z39o5c.webp';
let Item3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621450/Cooking%20Academy%20Assets/exps128090_TH153340B10_01_7b-1_wgmm2v.webp';
let Item4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621450/Cooking%20Academy%20Assets/exps187883_TH153343C04_14_2b-1_qulj3p.webp';
let Item5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/abhishek-hajare-6hr5YZDjyHc-unsplash_mvfec6.jpg';
let Item6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/alex-lvrs-aX_ljOOyWJY-unsplash_zl6jpa.webp';
let Item7 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621449/Cooking%20Academy%20Assets/Cuccidati_EXPS_HCBZ22_49902_P2_MD_04_15_16b-1_tvsxfq.webp';
let Item8 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621459/Cooking%20Academy%20Assets/amirali-mirhashemian-5tC2YOVXE9Y-unsplash_fjtjrv.webp';
let  User1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621459/Cooking%20Academy%20Assets/avatar-ff16c9f4f6a033d94f3ef4d895e78d42_2x_h99rtd.png';
let  User2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/avatar-8aae058a0f5df7ef941fe5ef9577bc3c_2x_ybvck6.png';
let  User3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/avatar-8aae058a0f5df7ef941fe5ef9577bc3c_2x_ybvck6.png';
let  User4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/avatar-08db931a9ed7cf9e60e5a8c188683a76_2x_dos7la.png';
let  User5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621457/Cooking%20Academy%20Assets/Downloader.la_-62d179ce09ad1_2x_jvrg8j.png';
let  User6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621457/Cooking%20Academy%20Assets/Downloader.la_-62d1798845da8_2x_bxvjqo.png';
let  User7 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621457/Cooking%20Academy%20Assets/Downloader.la_-62d179a7d9dfc_vnafio.png';



function LandingPage() {

    // ---accordion--//
    const [accordion, setActiveAccordion] = useState(0);
    const [accordion2, setActiveAccordion2] = useState(0);

    function toggleAccordion(index) {
      if (index === accordion) {
        setActiveAccordion(-1);
        return
      }
      setActiveAccordion(index);
    };
    function toggleAccordion2(index) {
      if (index === accordion2) {
        setActiveAccordion2(-1);
        return
      }
      setActiveAccordion2(index);
    };
    // ----accordion---//


  return (
    <>
    {/* =================================Banner================================= */}
    <section className='banner bg-[#080808] text-white'>
            <div className='md:pl-32 lg:h-[90vh]  flex flex-col gap-8 justify-center'>
              <p className='text-5xl font-bold lg:w-[40%]'>Flavours surrounds you in The Cooking Academy</p>
              <p className='text-xl lg:w-[35%] text-[color:var(--text-clr)]'>Cooking is not just about ingredients; it's a creative outlet for us.</p>
              <a href='#' className='bg-[color:var(--thm-clr2)] w-fit py-1 pl-2 pr-8 rounded-full grid place-items-center grid-flow-col text-xl' ><i class="fa-solid fa-circle-play text-4xl pr-2"></i>Resume Class</a>
              <p className='lg:w-[40%] mt-10 text-[color:var(--text-clr)]'>The Cooking Academy is a Digital Platform where you can learn various cooking styles and techniques from professional chefs.</p>
            </div>
            <div>
            </div>         
    </section>
    {/* =================================Banner================================= */}

    {/* =================================Brands================================= */}
    <section className='w-10/12 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-7 gap-10 place-items-center py-20'>
          <LazyLoadImage effect='blur' className='h-10' src={Brand1}/>
          <LazyLoadImage effect='blur' className='h-10' src={Brand2}/>
          <LazyLoadImage effect='blur' className='h-14' src={Brand3}/>
          <LazyLoadImage effect='blur' className='h-14' src={Brand4}/>
          <LazyLoadImage effect='blur' className='h-14' src={Brand5}/>
          <LazyLoadImage effect='blur' className='h-14' src={Brand6}/>
          <LazyLoadImage effect='blur' className='h-14' src={Brand7}/>
        </div>
    </section>
    {/* =================================Brands================================= */}


    {/* =================================Explore================================= */}
    <section className=''>
      <div className='flex gap-10 py-10 lg:pl-32'>
        <h3 className='text-3xl font-semibold'>Explore our classes.</h3>
        <a href='#' className='text-slate-800 hover:text-white text-xl font-medium flex align-bottom pt-2'>See all</a>
      </div>
      <ExploreSlider/>
      <div className='grid place-items-center pt-20 pb-10'>
        <a href='#' className='bg-slate-500 hover:bg-slate-600 rounded-md px-5 py-2'>Explore Classes</a>
    </div>
    </section>
    {/* =================================Explore================================= */}

    {/* =================================About us================================= */}
      <section className='w-10/12 mx-auto lg:py-10'>
              <h2 className='text-center font-bold text-5xl'>About Us</h2>
              <p className='w-[80%] mx-auto text-center text-[#ffffffcb] text-xl lg:py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas nam fuga itaque expedita distinctio totam dolore, consequuntur ullam dolorum est consectetur eos, maxime enim dolorem nihil illo minus, reprehenderit aliquid delectus dignissimos maiores dicta sunt quasi! Harum, magnam doloribus?</p>
              <h2 className='text-center font-bold text-4xl text-[color:var(--thm-clr2)] pt-5'>Last year achievemrnt</h2>
              <p className='w-[60%] mx-auto text-center text-[#ffffffcb] text-xl lg:py-5'>we are a culinary startup based in qatar with the aim of bringing people together, to leam and enjoy the art of cooking.</p>

              <div className='md:w-10/12 mx-auto md:pt-5 grid grid-cols-1 md:grid-cols-4 place-items-center text-[color:var(--thm-clr2)]'>
                  <h4 className='text-7xl'>+00</h4>
                  <h4 className='text-7xl'>+00</h4>
                  <h4 className='text-7xl'>+00</h4>
                  <h4 className='text-7xl'>+00</h4>
              </div>
      </section>
    {/* =================================About us================================= */}

     {/* =================================Workshop================================= */}
     <section className='workshop'>
       <div className='w-10/12 mx-auto lg:pt-20'>
          <h2 className='font-bold text-5xl'>Workshop</h2>
          <div className='flex flex-col md:flex-row justify-between pt-5'>
            <p className='text-[#ffffffcb] lg:w-[60%] text-xl '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
            <a href='#' className='bg-white hover:bg-[#f0eeee] text-black h-fit w-fit  py-2 px-5 rounded-lg lg:text-xl font-medium'>See all<i class="fa-solid fa-arrow-right pl-5"></i></a>
          </div>
          <div>
            <LazyLoadImage effect='blur' className='pt-5' src={Videotemp}/>
          </div>

          
       {/* slider */}
        <div><WorkSlider/></div>
       </div>

     </section>
     {/* =================================Workshop================================= */}

    {/* ==================================Other Service================================ */}
    <section>
      <div className='lg:pl-32 flex gap-10 py-10'>
        <h3 className='text-3xl font-semibold'>Other Services.</h3>
        <a href='#' className='text-slate-800 hover:text-white text-xl font-medium flex align-bottom pt-2'>See all</a>
      </div>

      <div class="grid grid-rows-4 grid-flow-row md:grid-flow-col overflow-hidden">
            <div class="relative zoom-card row-span-4 md:col-span-2">
              <img  src={zomImg}/>
              <h3 className='absolute bottom-5 left-10 text-4xl font-bold'>Kitchen Studio</h3>
            </div>
            <div class="relative zoom-card row-span-2">
            <img  src={zomImg}/>
            <h3 className='absolute bottom-5 left-10 text-4xl font-bold'>Consultancy</h3>
            </div>
            <div class="relative zoom-card row-span-2">
            <img  src={zomImg}/>
            <h3 className='absolute bottom-5 left-10 text-4xl font-bold'>Kitchen</h3>
            </div>
          </div>

    </section>
    {/* ==================================Other Service================================ */}


    {/* ==================================Enquire================================ */}
    <section className='w-10/12 mx-auto lg:py-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 bg-slate-800 py-16 rounded-md place-items-center'>
              <div>
                <h3 className='font-bold text-2xl'>Enquire Now for More Details</h3>
                <p className='text-[#ffffffcb]'>Enter your email and we'll send you some samples of our favorite classes.</p>
              </div>
              <div>
                <form className='flex gap-5'>
                  <div className='flex flex-col gap-2'>
                    <input className='outline-none  bg-black rounded-md border-2 border-[#383737] text-xl py-1 lg:w-72' type="text" />
                    <span className='flex'><input className='ml-1 mr-3' type='checkbox'/><p className='text-xs text-[#ffffffb0]'>I agree to receive email updates</p></span>
                  </div>
                  <button className='bg-slate-600 hover:bg-slate-700 text-base text-[#ffffffb0] px-8 py-2 rounded-md h-fit w-fit' type='submit'>Submit</button>
                </form>
              </div>
          </div>
    </section>
    {/* ==================================Enquire================================ */}



    {/* ==================================Enquire================================ */}
      <section className='w-10/12 mx-auto enquire p-2'>
        <div className='bg-[#000000a2] rounded-3xl'>
              <div className='flex justify-between py-10 px-5'>
                <p className='text-[color:var(--thm-clr2)] text-3xl lg:w-[30%]'>Try these delicious recipe to make your day</p>
                <p className='text-[#ffffffb0] text-right text-xl lg:w-[30%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, magnam.</p>
              </div>


              <div className='dishes grid grid-cols-1 md:grid-cols-4 gap-5 gap-y-10 p-10 '>
                    <div className='relative'>
                      <img className=' rounded-3xl' src={Item1}/>
                        <p className='text-lg  font-semibold py-3 '>Chicken Yakitori</p>
                      <span className='flex justify-between text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative'>
                      <img className=' rounded-3xl' src={Item2}/>
                        <p className='text-lg  font-semibold py-3 '>Cassoulet Today</p>
                      <span className='flex justify-between text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative'>
                      <img className=' rounded-3xl' src={Item3}/>
                        <p className='text-lg  font-semibold py-3 '>Nana's Italian Roulade</p>
                      <span className='flex justify-between text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative'>
                      <img className=' rounded-3xl' src={Item4}/>
                        <p className='text-lg  font-semibold py-3 '>Beef Paprikash with Fire-Roated Tomatoes</p>
                      <span className='flex justify-between text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative'>
                      <img className=' rounded-3xl' src={Item5}/>
                        <p className='text-lg  font-semibold py-3 '>Vannila chololava icecream</p>
                      <span className='flex justify-between text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative'>
                      <img className=' rounded-3xl' src={Item6}/>
                        <p className='text-lg  font-semibold py-3 '>Oma's Apfelkuchen (Grandma's Apple cake)</p>
                      <span className='flex justify-between text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative'>
                      <img className=' rounded-3xl' src={Item7}/>
                        <p className='text-lg  font-semibold py-3 '>Cuccidati</p>
                      <span className='flex justify-between text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative'>
                      <img className=' rounded-3xl' src={Item8}/>
                        <p className='text-lg  font-semibold py-3 '>Irish Spiced Beef</p>
                      <span className='flex justify-between text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>

              </div>
                    <div className='grid place-items-center pt-20 pb-10'>
                        <a href='#' className='bg-slate-500 hover:bg-slate-600 rounded-md px-5 py-2'>Explore Classes</a>
                    </div>
        </div>
      </section>
    {/* ==================================Enquire================================ */}


    {/* ==================================Feedback================================ */}
    <section className='feedback lg:my-28'>
      <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-5'>
          <div className='md:col-span-2 flex justify-center flex-col'>
                <h1 className='text-4xl font-medium'>Feedbacks</h1>
                <p className='text-[#ffffffc7] lg:w-[60%] py-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates id inventore fugiat!</p>
                <a className='bg-white text-black px-4 py-2 text-xl rounded-lg w-fit h-fit' href="#">Read all <i class="fa-solid fa-arrow-right pl-4"></i></a>
          </div>

          <div className='md:col-span-3 grid grid-cols-1 gap-3 md:grid-cols-3'>
                <div className='bg-white p-5 rounded-3xl'>
                  <p className='text-black text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img className='h-14' src={User1} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-3xl bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669705586/Cooking%20Academy%20Assets/Downloader.la_-62d179a7d9dfc_dl2d8z.webp)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img className='h-14' src={User7} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-3xl'>
                  <p className='text-black text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img className='h-14' src={User2} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-3xl bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669706361/Cooking%20Academy%20Assets/Downloader.la_-62d1798845da8_zo60xv.webp)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img className='h-14' src={User6} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-3xl'>
                  <p className='text-black text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img className='h-14' src={User4} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-3xl bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669706433/Cooking%20Academy%20Assets/Downloader.la_-62d179ce09ad1_pgh3it.webp)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img className='h-14' src={User5} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-3xl'>
                  <p className='text-black text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img className='h-14' src={User3} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-3xl bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669706522/Cooking%20Academy%20Assets/avatar-8aae058a0f5df7ef941fe5ef9577bc3c_shlfy1.jpg)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img className='h-14' src={User2} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-3xl'>
                  <p className='text-black text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img className='h-14' src={User4} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
          </div>
      </div>
    </section>
    {/* ==================================Feedback================================ */}


    {/* ==================================Frequently questions================================ */}
      <section className='w-[90%] md:w-[50%] mx-auto'>
        <p className='text-center text-3xl  pb-5'>Frequently asked questions</p>
        <div className='accordion__faq'>
            <h2 className='text-xl pb-3'>General</h2>
            {Faq.map((item, index) =>
                        <div key={index} onClick={() => toggleAccordion(index)}>
                            <div className="accordion__faq-heading acco-m">
                            <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                            <div>
                                {accordion === index ?
                                <span className="verticle"><i class="fa-solid fa-angle-up"></i></span> : <span className="horizental"><i class="fa-solid fa-angle-down"></i></span>}
                            </div>
                            </div>
                            <div className='acco-m'><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
                  
                        </div>
                        )
                    }
        </div>
        <div className='accordion__faq pt-10'>
            <h2 className='text-xl pb-3'>Pricing & Payment</h2>
            {Price.map((item, index) =>
                        <div key={index} onClick={() => toggleAccordion2(index)}>
                            <div className="accordion__faq-heading acco-m">
                            <h3 className={accordion2 === index ? "active" : ""}>{item.question}</h3>
                            <div>
                                {accordion2 === index ?
                                <span className="verticle"><i class="fa-solid fa-angle-up"></i></span> : <span className="horizental"><i class="fa-solid fa-angle-down"></i></span>}
                            </div>
                            </div>
                            <div className='acco-m'><p className={accordion2 === index ? "active" : "inactive"} >{item.answer}</p></div>
                  
                        </div>
                        )
                    }
        </div>
      </section>
    {/* ==================================Frequently questions================================ */}


    </>
  )
}

export default LandingPage