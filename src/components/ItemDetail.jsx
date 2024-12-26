function ItemDetail(props) {
  const { price, title, category, img, stock } = props;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src={img}
              alt="Product Image"
              className="object-cover w-full h-96 lg:h-full"
            />
          </div>
          <div className="lg:w-1/2 p-8">
            <h3 className="text-4xl font-extrabold mb-8 text-center text-blue-600 uppercase">
              {title}
            </h3>
            <p className="text-md text-gray-600 mb-6">{category}</p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-semibold">${price}</span>
              <span className="text-lg text-gray-400">
                Quedan <strong>{stock}</strong> unidades
              </span>
            </div>

            <button
              type="button"
              disabled={stock === 0}
              className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md shadow-sm bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-white"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
