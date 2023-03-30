import Head from "next/head";
import { Header } from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Form from "@/components/form/Form";

export default function Home() {
  return (
    <>
      <Head>
        <title>ONG Literatura Solidária</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main id='home'>
        <Hero />
      </main>
      <section id='quem-somos'>
        <About />
      </section>
      <section id='form'>
        <Form />
      </section>
    </>
  );
}
