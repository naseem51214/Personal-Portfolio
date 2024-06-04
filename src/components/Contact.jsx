import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
function Contact() {
    const onSubmit = async (data)=>{
        const userInfo = {
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
           await axios.post("https://getform.io/f/raeqmgva",userInfo)
           toast.success("Your message has been sent")
        } catch (error) {
            toast.error("Somthing went wrong")
        }

    }
    // ----------
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>please fill the following form to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form 
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/raeqmgva" 
            // method="POST" 
            className="bg-green-500 w-96 px-8 py-6 rounded-xl">
            <h1 className="text-xl font-semibold mb-4 text-white">Send your message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-white ">Full Nanme</label>
              <input
               {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-grey leading-tight focus:outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
              />
             {errors.name && <span>This field is required</span>}

            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-white ">Email address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-grey leading-tight focus:outline"
                id="email"
                type="text"
                name="email"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-white ">Message</label>
              <textarea
                {...register("message", { required: true })}

                className="shadow rounded-lg appearance-none border py-2 px-3  leading-tight focus:outline"
                id="message"
                type="text"
                name="message"
                placeholder="Type your message here"
              />
                {errors.message && <span>This field is required</span>}

            </div>
            <button type="submit" className="bg-blue-700 text-white  rounded-xl py-2 px-3 hover:text-white duration-300">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
