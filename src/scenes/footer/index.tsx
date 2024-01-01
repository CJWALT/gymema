import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
         <img alt='logo' src={Logo}/>
         <p className='my-5'>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eligendi labore cum facere ratione eius. Doloremque temporibus quia unde officia culpa ratione.
         </p>
         <p>
            &copy; Evogym All Rights Reserved.
         </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className='my-5'>Massa orc Senectus</p>
          <p className='my-5'>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>(334)-353-2355</p>
          
        </div>
        

      </div>
    </footer>
  )
}

export default Footer