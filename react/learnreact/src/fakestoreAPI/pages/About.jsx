function About() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-rose-500 mb-6">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-bold text-rose-400">Ecommerce</span>, your one-stop destination for all your shopping needs. We are dedicated to providing you with the best products, focusing on quality, customer service, and reliability.
        </p>
        <p className="text-gray-700 mb-4">
          Founded in 2025, <span className="font-bold text-rose-400">Ecommerce</span> has come a long way from its beginnings. Our mission is to make online shopping easy, accessible, and enjoyable for everyone. Whether you're looking for the latest gadgets, trendy fashion, or everyday essentials, we've got you covered.
        </p>
        <p className="text-gray-700 mb-4">
          At <span className="font-bold text-rose-400">Ecommerce</span>, we believe in building lasting relationships with our customers. Your satisfaction is our top priority, and we strive to exceed your expectations with every purchase.
        </p>
        <h2 className="text-2xl font-bold text-rose-500 mt-6 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Customer Satisfaction: We put our customers first in everything we do.</li>
          <li>Quality Products: We ensure that every product meets the highest standards.</li>
          <li>Innovation: We embrace change and continuously improve our services.</li>
          <li>Integrity: We are committed to honesty and transparency in all our dealings.</li>
        </ul>
        <h2 className="text-2xl font-bold text-rose-500 mt-6 mb-4">Contact Us</h2>
        <p className="text-gray-700">
          Have questions or feedback? We'd love to hear from you! Reach out to us at{" "}
          <a href="mailto:support@ecommerce.com" className="text-blue-500 underline">
            support@ecommerce.com
          </a>{" "}
          or call us at <span className="font-bold">+1-800-123-4567</span>.
        </p>
      </div>
    </div>
  );
}

export default About;
