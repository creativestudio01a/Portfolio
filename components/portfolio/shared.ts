export type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const emptyContactForm: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" }
} as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetSrc(src: string) {
  return `${basePath}${src}`;
}
