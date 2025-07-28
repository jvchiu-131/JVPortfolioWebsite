'use client';
import { Card, CardBody } from "@heroui/card";
import clsx from "clsx";
import { title } from "../primitives";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";
import { Button } from "@heroui/button";
import emailjs from "@emailjs/browser";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactCard = ({
  formData,
  onChange,
  onSubmit,
  isSending,
  error,
  success,
}: {
  formData: ContactFormData;
  onChange: (field: keyof ContactFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSending: boolean;
  error: string | null;
  success: boolean;
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Card isBlurred>
        <CardBody>
          <div className="text-center mb-6">
            <span>What brought you here? What's up with it? Yow pull up fam</span>
          </div>

          <div className="space-y-6">
            <div>
              <span>Your Name</span>
              <Input
                onChange={(e) => onChange("name", e.target.value)}
                value={formData.name}
                label="Name"
                type="text"
                variant="bordered"
              />
            </div>

            <div>
              <span>Your Email</span>
              <Input
                onChange={(e) => onChange("email", e.target.value)}
                value={formData.email}
                label="Email"
                type="email"
                variant="bordered"
              />
            </div>

            <div>
              <span>Your Message</span>
              <Textarea
                onChange={(e) => onChange("message", e.target.value)}
                value={formData.message}
                label="Message"
                placeholder="Enter your message"
                variant="bordered"
              />
            </div>

            <div className="flex flex-col items-center">
              <Button type="submit" color="primary" isDisabled={isSending} className="mt-2">
                {isSending ? "Sending..." : "Send Message"}
              </Button>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {success && <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>}
            </div>
          </div>
        </CardBody>
      </Card>
    </form>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email.");
      return;
    }

    setError(null);
    setIsSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          reply_to: email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="h-screen max-w-screen">
      <div className="flex flex-col justify-center items-center h-full px-4">
        <div className="max-w-xl w-full">
          <div className="text-center mb-12">
            <span className={clsx(title({ size: "lg" }), "text-[#0f1626]")}>
              Let's{" "}
              <span className={title({ color: "neonPinkPurple", size: "lg" })}>
                Talk
              </span>
            </span>
          </div>

          <ContactCard
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isSending={isSending}
            error={error}
            success={success}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
