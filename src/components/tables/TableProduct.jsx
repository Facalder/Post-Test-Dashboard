/* eslint-disable tailwindcss/no-custom-classname */
export default function TableProduct() {
  const product = [
    {
      id: 0,
      product: "Apple Watch Series",
      image: "../../../public/images/product/product-01.png",
      category: "Electronics",
      price: 40,
      sold: 100,
      profit: 20,
    },
    {
      id: 1,
      product: "Macbook Pro 2020",
      image: "../../../public/images/product/product-02.png",
      category: "Electronics",
      price: 80,
      sold: 120,
      profit: 80,
    },
    {
      id: 2,
      product: "Dell Inspiron 15",
      image: "../../../public/images/product/product-03.png",
      category: "Electronics",
      price: 30,
      sold: 20,
      profit: 10,
    },
    {
      id: 3,
      product: "HP Probook 450",
      image: "../../../public/images/product/product-04.png",
      category: "Electronics",
      price: 50,
      sold: 60,
      profit: 90,
    },
  ];

  return (
    <div className="border-stroke shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white">
      <div className="xl:px-7.5 px-4 py-6 md:px-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>
      <div className="border-stroke py-4.5 dark:border-strokedark 2xl:px-7.5 grid grid-cols-6 border-t px-4 sm:grid-cols-8 md:px-6">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Sold</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Profit</p>
        </div>
      </div>
      {product.map((product, key) => (
        <>
          <div
            key={key}
            className="border-stroke py-4.5 dark:border-strokedark 2xl:px-7.5 grid grid-cols-6  border-t px-4 sm:grid-cols-8 md:px-6"
          >
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <img src={product.image} alt="Product" />
                </div>
                <p className="text-sm text-black dark:text-white">
                  {product.product}
                </p>
              </div>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {product.category}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                ${product.price}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {product.sold}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-meta-3 text-sm">{product.profit}%</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
