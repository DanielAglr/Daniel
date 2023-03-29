function Intro() {
  return (
    <div className='w-[90vw] max-w-[1500px] h-[100vh]'>
      <div className='text-[85px] text-contrast mt-[30vh] md:leading-[70px] md:mt-[20vh]'>
          Hi, I'm <span className='text-accent'>Daniel</span>.
      </div>
      <div className='max-w-[55%] text-contrast-dark text-[20px] mb-[50px] md:max-w-[85%] md:my-[5vh] '>I'm a student from Long Beach. I'm very interested in full-stack development, data manipulation, and anything involving React.</div>
      <div>
        <a className='flex justify-center items-center w-[150px] h-[50px] text-accent border border-accent rounded-[5px] no-underline' href='mailto:daniel16aglr@gmail.com'>
          <i className='bx bx-conversation text-[20px] pr-[5px]'/>
          <h6 className='flex justify-center items-center w-auto h-[20px] text-[20px] font-semibold'>Reach me</h6>
        </a>
      </div>
    </div>
  )
};

export default Intro;