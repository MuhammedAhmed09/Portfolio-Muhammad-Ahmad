import cv from '../../assets/Muhammad-Ahmad-FlowCV-Resume-20250705.pdf';

const MyCv = () => {
  return (
    <section className='w-full max-h-max lg:ml-52 min-h-[100vh]'>
      <iframe src={cv} className='w-full h-full'></iframe>
    </section>
  )
}

export default MyCv