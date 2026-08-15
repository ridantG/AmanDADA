// Single source of truth for contact details and social profiles.
// Used by the Navbar top bar, Footer, and Contact page.
export const PHONE = "+91 8871871143";
export const PHONE_HREF = "tel:+918871871143";
export const EMAIL = "themicmagician@gmail.com";
export const WHATSAPP_NUMBER = "918871871143";

export const whatsappLink = (
  message = "Hi Aman, I want to book you for an event."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const SOCIALS = {
  instagram: "https://www.instagram.com/anchor_shinde",
  facebook: "https://www.facebook.com/Anchor.Shinde7",
  youtube: "https://www.youtube.com/@Anchorfromdelhi",
  twitter: "https://x.com/anchoramanmp07",
};
