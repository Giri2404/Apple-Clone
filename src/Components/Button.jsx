function Button({ text }) {
  return (
    <button className="bg-gray-200 text-black rounded-full px-6 py-2 font-semibold hover:bg-gray-300 transition-all">
      {text}
    </button>
  )
}

export default Button
