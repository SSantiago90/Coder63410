function Item(props) {
  const { price, title, text, img } = props;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-6 transform hover:-translate-y-1 max-w-md w-full mx-auto">
      <img
        src={img}
        alt="Product Image"
        className="w-full h-72 object-cover mb-4 rounded-lg"
      />
      <div className="pt-4 pb-8">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{text}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-teal-600 bg-green-100 px-3 py-1 rounded-lg">
            ${price}
          </span>
        </div>
        <button
          type="button"
          className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 text-white transition-colors duration-200 ease-in-out"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}

export default Item;
