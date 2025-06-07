// import axios from 'axios'

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
// .then((response) => {
//     console.log(response.data);
// })

const testimonials =  [
    {
        name:"Hulk Hogan",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."

    },
    {
    name:"John Cena",
        photoUrl: "https://images.unsplash.com/photo-1643651388510-835ee7e61119?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I was blown away by the quality and excitement of the WWE products offered by John Cena. The merchandise is top-notch and truly embodies the spirit of wrestling. As a fan, I couldn't be happier with my purchases."
    },
    {
        name:"Gandi",
            photoUrl: "https://images.unsplash.com/photo-1601921004897-b7d582836990?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "I am extremely satisfied with gandi's india product. It exceeded all my expectations and the quality is top-notch. I highly recommend this to anyone looking for quality products. Thank you, gandi!"
        },
        {
            name:"Kane",
                photoUrl: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: "kane's WWE products are top-notch, offering fans an unforgettable experience. From action figures to apparel, kane delivers quality merchandise that truly celebrates the spirit of wrestling. As a loyal customer, I am always impressed with the range and authenticity of their products."
            }
]

const imageElem = document.querySelector("img");
const textElem = document.querySelector(".text");
const usernameElem = document.querySelector(".username");


let idx=0;
updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    imageElem.src = photoUrl;
    textElem.innerText = text;
    usernameElem.innerText = name;
    idx++
    if (idx === testimonials.length){
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 2000)

}