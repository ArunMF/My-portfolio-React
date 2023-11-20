import React from 'react'

function AboutMe() {
  return (
    <div>
        <div className="container mt-5">
          <h1 className='text-center text-white fs-1'>About me</h1>
            <div className='row'>
                <div className="col text-center p-3">
                    <img src="https://i.postimg.cc/kgHhgk5j/arun-mynatty1.jpg" height="200px" width="200px" style={{borderRadius:"100px"}} alt="" />
                    <h3 className='mt-3 text-white'>Arun M F</h3>
                    <p className='mt-3 text-white'>A MEA(R)N stack developer, well-versed in both front-end and back-end technologies, <br /> is equipped with the skills to create comprehensive and dynamic web applications.</p>
                    <p>Date Of Birth :<span className='text-white'> 17/08/2001</span></p>
                    <p>Address :<span className='text-white'> Mynatty(H), West koratty, Mambra P O <br /> Thrissur, Kerala, Pin: 680308</span></p>
                    {/* <p>Email : arunmf10@gmail.com</p>
                    <p>Phone : 8592051971</p> */}
                    <button className='btn btn-success my-2 shadow'>Download CV</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe