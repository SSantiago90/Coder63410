// Conmponente de Presentación -> UI
import Item from "./Item";
function ItemList(props) {
  const { products, greeting } = props;

  return (
    <div className="item-list-container bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8 pt-16">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-600 uppercase">
          {greeting}
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              text={item.text}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemList;
