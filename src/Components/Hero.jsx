import Button from './Button'

function Hero() {
  return (
    <section className="h-[600px] flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 via-black to-gray-900 pt-24 text-center">
      <h1 className="text-5xl font-black mb-4">Apple India Offers</h1>
      <p className="text-xl mb-6 max-w-md">
        Enjoy up to ₹10000 instant cashback on your favourite products with eligible cards. Plus up to 12 months of No Cost EMI.
      </p>
      <Button text="Shop now"/>
    </section>
  )
}

export default Hero
