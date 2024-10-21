import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      {/* <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div> */}

      <div className="prose mx-auto mt-14 text-left dark:prose-invert">
      <p>Your trusted source for educational and informational content! Based in Delhi, India, our blog is dedicated to providing insightful articles and resources that empower readers with knowledge in various fields.</p>

    <p>Whether you’re seeking the latest tech trends, social media tips, or digital tools insights, our platform is designed to be your go-to destination.</p>

    <h2>Our Mission</h2>
    <p>At Fast Video Save, we are passionate about sharing information that adds value to your everyday life. Our content is carefully curated and written with the goal of making complex topics easy to understand. We cover a wide range of subjects—from the latest updates in the digital world to expert advice on improving your online presence.</p>

    <h2>Why Choose Us</h2>
    <p>We pride ourselves on delivering content that is informative, up-to-date, and relevant. With the help of Google Analytics, we continuously monitor and improve the user experience to make sure that our content reaches and resonates with our audience.</p>

    <h2>Our Goal</h2>
    <p>Our mission is simple: to educate, inform, and inspire. We believe that learning should be accessible to everyone, and through our blog, we aim to make it happen.</p>

    <h2>Contact Us</h2>
    <p>Thank you for visiting Fast Video Save. We hope you find our articles helpful and enlightening. Should you have any suggestions or inquiries, feel free to reach out to us at <a href="mailto:fastvideosave@gmail.com">fastvideosave@gmail.com</a>. We’re always here to listen!</p>

      </div>
    </Container>
  );
}
