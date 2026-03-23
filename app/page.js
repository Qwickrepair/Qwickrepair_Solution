"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {

const slides = [
"/slider/slide1.jpg",
"/slider/slide2.jpg",
"/slider/slide3.jpg",
"/slider/slide4.jpg"
];

const [currentSlide,setCurrentSlide] = useState(0);

useEffect(()=>{
const interval = setInterval(()=>{
setCurrentSlide((prev)=>(prev+1)%slides.length)
},3000)

return ()=>clearInterval(interval)

},[])

function sendEmail(e){

e.preventDefault();

const name = e.target.name.value;
const phone = e.target.phone.value;
const email = e.target.email.value;
const service = e.target.service.value;
const problem = e.target.problem.value;

const subject = "Qwickrepair Service Booking";

const body = 
`Full Name: ${name}%0D%0A
Phone: ${phone}%0D%0A
Email: ${email}%0D%0A
Service: ${service}%0D%0A%0D%0A
Problem:%0D%0A${problem}`;

const mailtoLink =
`mailto:qwickrepair@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

window.open(mailtoLink, "_blank");

}

return(

<div style={{fontFamily:"Arial"}}>

{/* HEADER */}
<header style={{
background:"#ffffff",
padding:"15px 40px",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
}}>

<div style={{display:"flex",alignItems:"center",gap:"10px"}}>

<img src="/logo/Qwickrepair.png" style={{height:"50px"}}/>

<h2 style={{color:"#09B7A1"}}>Qwickrepair Solutions</h2>

</div>

<div style={{display:"flex",gap:"20px"}}>
<a href="#services">Services</a>
<a href="#about">About</a>
<a href="#booking">Book</a>
</div>

</header>

{/* HERO */}
<section style={{textAlign:"center",padding:"60px"}}>
<h1 style={{color:"#09B7A1"}}>Home Repair Services in Bengaluru</h1>
<p>Plumbing • Electrical • Carpentry • Pest Control • Painting • Cleaning</p>
</section>

{/* SLIDER */}
<img src={slides[currentSlide]} style={{width:"100%",height:"420px",objectFit:"cover"}}/>

{/* SERVICES */}
<section id="services" style={{padding:"60px",textAlign:"center"}}>

<h2>Our Services</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"30px",
marginTop:"40px"
}}>

<ServiceCard title="Plumbing" image="/services/plumbing.jpg" message="Plumbing service"/>
<ServiceCard title="Electrical" image="/services/electrical.jpg" message="Electrical service"/>
<ServiceCard title="Carpentry" image="/services/carpentry.jpg" message="Carpentry service"/>
<ServiceCard title="Painting" image="/services/painting.jpg" message="Painting service"/>
<ServiceCard title="Cleaning" image="/services/cleaning.jpg" message="Cleaning service"/>
<ServiceCard title="Pest Control" image="/services/pest-control.jpg" message="Pest Control service"/>

</div>

</section>

{/* ABOUT */}
<section id="about" style={{padding:"60px",background:"#f5f5f5"}}>

<h2 style={{color:"#09B7A1", textAlign:"center"}}>Why Qwickrepair?</h2>

<p style={{
maxWidth:"800px",
margin:"20px auto",
textAlign:"center",
lineHeight:"1.7"
}}>

At <b>Qwickrepair Solutions</b>, we bring together skilled professionals dedicated to delivering reliable and efficient home and commercial repair services.

From <b>plumbing, electrical, and carpentry</b> to <b>painting, cleaning, and pest control</b>, we offer a complete range of solutions tailored to your needs.

Whether it’s your home, office, or hotel, our on-call services and AMC support ensure you get timely assistance — exactly when you need it.

We are committed to providing a <b>high-quality, hassle-free, and dependable service experience</b>, backed by trained technicians, the right tools, and a customer-first approach.

</p>

</section>

{/* BOOKING */}
<section id="booking" style={{
padding:"60px",
background:"#f5f5f5",
display:"flex",
flexWrap:"wrap",
gap:"50px",
justifyContent:"center"
}}>

<div style={{maxWidth:"400px",width:"100%"}}>

<h2 style={{color:"#09B7A1"}}>Book a Service</h2>

<form onSubmit={sendEmail} style={{display:"flex",flexDirection:"column",gap:"10px"}}>
<input name="name" placeholder="Name" required/>
<input name="phone" placeholder="Phone" required/>
<input name="email" placeholder="Email" required/>

<select name="service">
<option>Plumbing</option>
<option>Electrical</option>
<option>Carpentry</option>
<option>Pest Control</option>
<option>Painting</option>
<option>Cleaning</option>
</select>

<textarea name="problem" placeholder="Problem"/>

<button style={{background:"#09B7A1",color:"#fff",padding:"10px"}}>
Send Request
</button>

</form>

</div>

<div style={{maxWidth:"400px"}}>
<h2 style={{color:"#09B7A1"}}>Contact Us</h2>
<p style={{marginTop:"20px"}}>

<b>Qwickrepair Solutions</b><br/>

No. 143/2, 4th Cross, 1st Main,<br/>

Krishnayan Palya, Indiranagar,<br/>

Bengaluru – 560038

</p>

<p>

<b>Phone:</b> +91 8880787787<br/>
<b>Email:</b> qwickrepair@gmail.com<br/>
<b>Working Hours:</b> 8:00AM – 8:00PM

</p>
</div>

</section>

{/* FLOATING */}
<div
style={{
position:"fixed",
right:"20px",
bottom:"20px",
display:"flex",
flexDirection:"column",
gap:"10px",
zIndex:999
}}
>

{/* CALL BUTTON */}
<a href="tel:+918880787787">

<button
style={{
background:"#09B7A1",
color:"#fff",
border:"none",
padding:"12px",
borderRadius:"50%",
cursor:"pointer",
boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
}}
>
📞
</button>

</a>

{/* WHATSAPP ICON */}
<a href="https://wa.me/918880787787" target="_blank">

<img
  src="/whatsapp.png"
  alt="WhatsApp"
  style={{
    width:"50px",
    height:"50px",
    borderRadius:"50%",
    cursor:"pointer"
  }}
/>

</a>

</div>

</div>
)

}

function ServiceCard({title,image,message}){

return(
<a href={`https://wa.me/918880787787?text=${message}`} target="_blank">

<div style={{
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
padding:"10px"
}}>

<img src={image} style={{width:"100%",height:"200px",objectFit:"cover"}}/>

<h3>{title}</h3>

</div>

</a>
)
}