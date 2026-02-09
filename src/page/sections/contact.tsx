import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import ErrorMessage from "../../components/errorMessage";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>();

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      setSubmitStatus({ type: null, message: "" });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_PUBLIC_ACCESS_KEY,
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#020618] text-gray-100">
      <div className="w-full px-6 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col gap-4 mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Get In Touch
          </h2>
          <span className="w-14 h-1 bg-sky-400 rounded-full" />
        </div>
        <p className="text-gray-300 text-[14px] lg:text-[20px] max-w-2xl mb-12">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className=" max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg border ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border-green-500/50 text-green-400"
                    : "bg-red-500/10 border-red-500/50 text-red-400"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                className="w-full px-4 py-3 bg-slate-950 border border-white/20 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-400 transition"
                placeholder="Your name"
              />
              <ErrorMessage error={errors.name?.message} />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-3 bg-slate-950 border border-white/20 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-400 transition"
                placeholder="your.email@example.com"
              />
              <ErrorMessage error={errors.email?.message} />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className="w-full px-4 py-3 bg-slate-950 border border-white/20 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-400 transition resize-none"
                placeholder="Your message..."
              />
              <ErrorMessage error={errors.message?.message} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-sky-400 text-slate-950 rounded-lg font-medium hover:bg-sky-500 transition-all hover:shadow-lg hover:shadow-sky-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
