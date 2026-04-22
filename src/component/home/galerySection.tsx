export default function GalerySection() {
  const images = [
    "/images/galerySection.jpeg",
    "/images/galerySection2.jpeg",
    "/images/galerySection3.jpeg",
  ];

  return (
    <div className="py-20 px-6 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Gallery Kami</h2>
        <p className="text-gray-500 mt-2">
          Momen terbaik dari kopi pilihan kami
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group shadow-md"
          >
            <img
              src={img}
              alt="gallery"
              loading="lazy"
              className="w-full h-[300px] object-cover 
              group-hover:scale-110 transition duration-500"
            />

            <div
              className="absolute inset-0 bg-black/20 opacity-0 
              group-hover:opacity-100 transition duration-300"
            />

            <p
              className="absolute bottom-4 left-4 text-white font-semibold 
              opacity-0 group-hover:opacity-100 transition duration-300"
            >
              Coffee Moment ☕
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
