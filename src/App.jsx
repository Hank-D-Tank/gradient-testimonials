import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import Card from './components/Card';
import Marquee from 'react-fast-marquee';

function App() {
  const testimonials = [
    {
      image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jane Doe",
      role: "CEO, Tech Innovations",
      text: "Our team has been searching for a solution that could streamline our complex workflow. The intuitive design and powerful features have significantly increased our productivity and collaboration."
    },
    {
      image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "John Smith",
      role: "Lead Software Developer",
      text: "As a developer who has worked with countless tools, I can confidently say this product stands out in solving real-world challenges. Its seamless integration and robust architecture make it a game-changer."
    },
    {
      image: "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Emily Rodriguez",
      role: "Product Manager",
      text: "What sets this product apart is its incredible adaptability and user-centric design. We've implemented it across multiple departments with remarkable results."
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Michael Chang",
      role: "Innovation Strategist",
      text: "In the fast-paced world of technology, finding a solution that is both cutting-edge and reliable is rare. This product bridges that gap perfectly."
    },
    {
      image: "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sarah Johnson",
      role: "Marketing Director",
      text: "The analytics and reporting features have transformed our marketing strategy. We now make data-driven decisions with unprecedented clarity and confidence."
    },
    {
      image: "https://images.pexels.com/photos/4353618/pexels-photo-4353618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "David Kim",
      role: "Startup Founder",
      text: "As a startup founder, I needed a tool that could scale with our growth. This solution has been instrumental in our rapid expansion, providing the flexibility we needed."
    },
    {
      image: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Olivia Martinez",
      role: "Education Technology Specialist",
      text: "The platform's collaborative features have revolutionized how our educational teams work together. It's like having a virtual workspace that understands our unique challenges."
    },
    {
      image: "https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Alex Wong",
      role: "Cybersecurity Expert",
      text: "Security is my top priority, and this product has exceeded all my expectations. The robust security protocols and continuous updates provide peace of mind in an ever-changing digital landscape."
    }
  ];
  return (
    <>
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          inset: '0',
          zIndex: "5"
        }}
        pointerEvents='none'
      >
        <ShaderGradient
          control='query'
          urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false'
        />
      </ShaderGradientCanvas>


      <h1 className='text-2xl font-black z-10 text-[#bcbeff] mt-5 ml-5'>HTK.</h1>

      <div className="flex flex-col text-white  z-10 font-bold mt-auto ml-5 mb-20">
        <div className="text-5xl">
          Voices of <span className='text-[#bcbeff]'>Success.</span>
        </div>
        <p className='text-sm font-light mt-4'>Transformative Experiences from Global Innovators and Industry Leaders</p>
      </div>

      <Marquee gradient={true}
        gradientColor='#0000773c'
        speed={30}
        pauseOnHover={true}
        autoFill={true}
        className="flex items-center z-10 h-fit mb-20"
      >
        {testimonials.map((testimonial, index) => (
          <Card key={index} {...testimonial} />
        ))}
      </Marquee>

    </>
  )
}

export default App