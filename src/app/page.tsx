import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-orange-300 to-yellow-400 px-3 rounded-md">
          Welcome to Photo Ark
        </h1>
        <p className="text-lg text-gray-600">
          A Media Management Solution based on Cloudinary
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold mb-4">
            Effortless Media Management
          </h2>
          <p className="text-gray-700 mb-6">
            Cloudinary streamlines your media workflow. Upload, store, and
            deliver images and videos effortlessly. Say goodbye to complex media
            challenges.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/media-management.jpeg"
            alt="Media Management"
            width={400}
            height={400}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div className="order-2 md:order-1">
          <Image
            src="/responsive-design.png"
            alt="Responsive Design"
            width={400}
            height={400}
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-4">Responsive Design</h2>
          <p className="text-gray-700 mb-6">
            Cloudinary ensures your media content is optimized and responsive.
            Deliver the best user experience on any device or screen size.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold mb-4">
            Security & Scalability
          </h2>
          <p className="text-gray-700 mb-6">
            Trust in Cloudinarys robust security measures. Whether you have a
            small blog or a global enterprise, we scale with you, ensuring your
            media is safe and accessible.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/security.jpg"
            alt="Security & Scalability"
            width={400}
            height={400}
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div className="order-2 md:order-1">
          <Image
            src="/Generative-Recolor-2-png.avif"
            alt="Responsive Design"
            width={400}
            height={400}
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-4">Generative AI</h2>
          <p className="text-gray-700 mb-6">
            Cloudinary responsibly applies industry-leading generative AI and
            large language models (LLMs) alongside our existing AI framework to
            streamline asset management and analysis.
          </p>
        </div>
      </section>
    </main>
  );
}
