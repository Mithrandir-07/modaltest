import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";


export default function Home() {
  const {register, handleSubmit, watch, formState: { errors }} =useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <header class="container mx-auto px-5">

          <div class="flex justify-between pt-10">

            <span class="fond-bpld text-3xl">
              Tailwind
            </span>

            <div class="space-x-5">
              <a href="" class="hover:underline">About</a>
              <a href="" class="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">Contacts</a>
            </div>
          </div>
        </header> 

        <div class="container mx-auto py-big px-3 sm:px-0">
          <h1 class="text-center text-3xl fond-bold">TailwindCSS</h1>
          <p class="pt-3 w-full sm:w-[450px] mx-auto ">The quickest way to start using Tailwind CSS in your Next.js project is to use the Next.js + Tailwind CSS Example. This will automatically configure your Tailwind setup based on the official Next.js example. If you'd like to configure Tailwind manually, continue with the rest of this guide.</p>
        </div>   

        <div class="flex justify-center space-x-0 md:space-x-10 flex-col md:flex-row space-y-5 md:space-y-0 px-3 sm:px-0">
          <div class="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">Button1</div>
          <div class="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">Button2</div>
          <div class="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">Button3</div>
          <div class="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">Button4</div>
          <div class="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">Button5</div>
        </div>

        <div class="pt-10 md:space-y-0 px-3 sm:px-0">
          <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("firstName", { required: true, maxLength: 20 })} />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />

          </form>
        </div>
      </main>
    </div> 
  )
}
