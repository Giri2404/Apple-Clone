import Button from './Button'

function Section({ title, description, image, buttonText }) {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between py-16 px-8 border-b border-gray-800">
     <img
  src={image}
  alt={title}
  className="w-full max-w-md rounded-xl shadow-xl border border-gray-700 mb-8"
/>

      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="mb-4 text-lg">{description}</p>
        <Button text={buttonText} />
      </div>
    </section>
  )
}

export default Section
