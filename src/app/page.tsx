"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "home",
          href: "/",
        },
        {
          name: "About",
          id: "about",
          href: "/about",
        },
        {
          name: "Menu",
          id: "menu",
          href: "/menu",
        },
        {
          name: "Testimonials",
          id: "testimonials",
          href: "/testimonials",
        },
        {
          name: "Contact",
          id: "contact",
          href: "/contact",
        },
      ]}
      brandName="Bella Napoli"
      button={{
        text: "Reservations",
        href: "/reservations",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-static-grid",
      }}
      title="Taste the True Italy at Bella Napoli"
      description="Experience authentic Italian cuisine handcrafted with passion and tradition. From classic pasta to exquisite desserts, every dish is a celebration of flavor."
      testimonials={[
        {
          name: "Sophia R.",
          handle: "@sophia_eats",
          testimonial: "Bella Napoli is my go-to for incredible Italian food. The pasta is always perfect, and the ambiance is wonderfully authentic!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-woman-smiling_23-2148454539.jpg",
          imageAlt: "Sophia R. profile picture",
        },
        {
          name: "Marco L.",
          handle: "@foodie_marco",
          testimonial: "Simply the best Italian in town! Every dish feels like a trip to Naples. Don't miss the tiramisu!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bartender-smiling-camera_107420-65492.jpg",
          imageAlt: "Marco L. profile picture",
        },
        {
          name: "Elena P.",
          handle: "@elena_ventures",
          testimonial: "A truly charming spot with fantastic service and even better food. The ravioli is out of this world!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-working-office_23-2148162631.jpg",
          imageAlt: "Elena P. profile picture",
        },
        {
          name: "Giovanni M.",
          handle: "@giovanni_reviews",
          testimonial: "Bella Napoli brings the heart of Italy to your plate. Impeccable flavors and a warm, inviting atmosphere. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-pensive-bearded-hipster-jacket-red-sweater-dark-background_613910-1834.jpg",
          imageAlt: "Giovanni M. profile picture",
        },
      ]}
      tag="Authentic Flavors"
      buttons={[
        {
          text: "View Menu",
          href: "/menu",
        },
        {
          text: "Make a Reservation",
          href: "/reservations",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Story: A Passion for Italian Tradition"
      description={[
        "At Bella Napoli, our journey began with a simple dream: to bring the authentic tastes and traditions of Southern Italy to your table. Founded by Chef Isabella Rossi, whose family recipes trace back generations, we pride ourselves on using only the freshest, finest ingredients.",
        "Every dish tells a story, a symphony of flavors crafted with love and respect for Italian culinary heritage. From our homemade pastas to our slow-cooked sauces and perfectly baked pizzas, we invite you to savor the true essence of Italy, right here in our warm and welcoming restaurant.",
      ]}
      buttons={[
        {
          text: "Learn More About Us",
          href: "/about",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-items-per-row"
      useInvertedBackground={false}
      features={[
        {
          title: "Handmade Pasta",
          description: "Our pasta is made fresh daily, using traditional methods and the finest semolina flour, ensuring a perfect al dente bite every time.",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-pizza-with-fresh-cheese_23-2150096957.jpg",
          imageAlt: "Freshly made Italian pasta",
        },
        {
          title: "Exquisite Wine Pairings",
          description: "Complement your meal with a selection from our curated wine list, featuring premium Italian reds and whites chosen to enhance every flavor.",
          imageSrc: "http://img.b2bpic.net/free-photo/sliced-fish-with-cheese-glass-wine_140725-6341.jpg",
          imageAlt: "Glass of red wine next to Italian dishes",
        },
      ]}
      title="Experience Our Culinary Delights"
      description="Discover the passion behind every dish, crafted with fresh, authentic Italian ingredients."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Bella Napoli",
          name: "Classic Lasagna",
          price: "$22.00",
          rating: 5,
          reviewCount: "125",
          imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-dish-food_23-2150777707.jpg",
          imageAlt: "A serving of classic Italian lasagna",
        },
        {
          id: "2",
          brand: "Bella Napoli",
          name: "Mushroom Risotto",
          price: "$20.00",
          rating: 5,
          reviewCount: "98",
          imageSrc: "http://img.b2bpic.net/free-photo/pasta-with-vegetables-grated-cheese_141793-898.jpg",
          imageAlt: "Creamy mushroom risotto",
        },
        {
          id: "3",
          brand: "Bella Napoli",
          name: "Tiramisu",
          price: "$9.00",
          rating: 5,
          reviewCount: "150",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-fancy-dessert_23-2150527576.jpg",
          imageAlt: "A slice of tiramisu dessert",
        },
      ]}
      title="Our Signature Dishes"
      description="A taste of what makes Bella Napoli special – beloved classics and house favorites."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          handle: "@sarah_foodie",
          testimonial: "Every visit to Bella Napoli is a delight. The food is consistently amazing, and the staff makes you feel like family!",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-woman-smiling_23-2148454539.jpg",
          imageAlt: "Sarah J. profile picture",
        },
        {
          id: "2",
          name: "Michael D.",
          handle: "@gourmet_mike",
          testimonial: "The best carbonara I've ever had outside of Italy. Truly authentic and incredibly flavorful. Highly recommended!",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bartender-smiling-camera_107420-65492.jpg",
          imageAlt: "Michael D. profile picture",
        },
        {
          id: "3",
          name: "Olivia P.",
          handle: "@olivia_travels",
          testimonial: "Bella Napoli captures the essence of Italian hospitality. Wonderful atmosphere, impeccable service, and delicious food.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-working-office_23-2148162631.jpg",
          imageAlt: "Olivia P. profile picture",
        },
        {
          id: "4",
          name: "David S.",
          handle: "@dave_eats",
          testimonial: "The pizza here is just divine, perfectly crispy crust and fresh toppings. It's like being back in Naples!",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-pensive-bearded-hipster-jacket-red-sweater-dark-background_613910-1834.jpg",
          imageAlt: "David S. profile picture",
        },
      ]}
      title="What Our Guests Say"
      description="Hear directly from our satisfied customers about their Bella Napoli experience."
      speed={35}
      topMarqueeDirection="right"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Do you offer vegetarian or vegan options?",
          content: "Yes, we have a variety of delicious vegetarian and vegan dishes, clearly marked on our menu. Please inform your server about any dietary restrictions.",
        },
        {
          id: "2",
          title: "Can I make a reservation online?",
          content: "Absolutely! You can easily make a reservation through our website's reservation page or by calling us directly during opening hours.",
        },
        {
          id: "3",
          title: "Do you cater for private events?",
          content: "Yes, Bella Napoli offers catering services for private events and parties. Please contact us to discuss your specific needs and create a custom menu.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-male-chef-breaking-egg-flour-create-dough_23-2148763128.jpg"
      imageAlt="Cozy restaurant interior with soft lighting"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about Bella Napoli, our menu, and services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Visit Us or Make a Reservation"
      description="We are eager to welcome you to Bella Napoli. Reach out to us for reservations, inquiries, or to simply say Ciao!"
      inputPlaceholder="Enter your email"
      buttonText="Send Message"
      termsText="By submitting this form, you agree to our privacy policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/panoramic-landscape-rolling-hills-pasture-lands-central-otago-new-zealand_181624-15237.jpg"
      imageAlt="Scenic Italian countryside"
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Starters",
              href: "/menu#starters",
            },
            {
              label: "Pasta",
              href: "/menu#pasta",
            },
            {
              label: "Pizza",
              href: "/menu#pizza",
            },
            {
              label: "Desserts",
              href: "/menu#desserts",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Our Story",
              href: "/about#story",
            },
            {
              label: "Our Team",
              href: "/about#team",
            },
            {
              label: "Gallery",
              href: "/about#gallery",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact",
              href: "/contact",
            },
            {
              label: "Reservations",
              href: "/reservations",
            },
            {
              label: "Facebook",
              href: "https://facebook.com",
            },
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
          ],
        },
      ]}
      logoText="Bella Napoli"
      copyrightText="© 2024 Bella Napoli. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
