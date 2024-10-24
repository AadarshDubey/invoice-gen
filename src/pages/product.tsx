import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  name: string;
  price: number;
  quantity: number;
}

const AddProduct: React.FC = () => {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number | string>("");
  const [productQuantity, setProductQuantity] = useState<number | string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = () => {
    if (productName && productPrice && productQuantity) {
      const newProduct: Product = {
        name: productName,
        price: Number(productPrice),
        quantity: Number(productQuantity),
      };
      setProducts([...products, newProduct]);
      setProductName("");
      setProductPrice("");
      setProductQuantity("");
    }
  };

  return (
    <div className="bg-customBlack text-white h-screen">
      <nav className="relative bg-RichBlack flex justify-between items-center p-[8px] pr-[80px] pb-[8px] pl-[80px] h-[64px] z-10">
        <div className="pointer-events-none absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_61%,_rgba(79,89,168,1)_0%,_transparent_60%)] blur-[200px] opacity-70 w-[600px] h-[600px] z-0"></div>

        <div className="flex items-center z-10">
          <img
            src="/img/icon.png"
            alt="Levitation Logo"
            className="h-[71px] w-[71px] mr-2"
          />
          <div className="leading-tight">
            <span className="font-bold text-[20px] font-sans">levitation</span>
            <br />
            <span className="font-bold text-[10px] font-sans">infotech</span>
          </div>
        </div>
        <Link to="/login" className="mr-16 bg-LimeGreen px-4 py-2 rounded text-gray-900">
          Logout
        </Link>
      </nav>

      <div className="px-14">
        <h1 className=" text-[40px] font-bold mb-4 mt-24">Add Products</h1>
        <p className="mb-6 text-[20px] text-subtext">
          This is basic login page which is used for levitation <br />{" "}
          assignment purpose.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            className="p-2 border rounded bg-InnerBlack"
            placeholder="Enter the product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="number"
            className="p-2 border rounded bg-InnerBlack"
            placeholder="Enter the price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <input
            type="number"
            className="p-5 border rounded bg-InnerBlack"
            placeholder="Enter the Qty"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
          />
        </div>

        <button
  className="bg-BlackLG text-LimeGreen py-3 px-6  rounded mb-4 mt-4 flex items-center"
  onClick={handleAddProduct}
>
  Add Product
  <img src="/plus.svg" alt="Plus Icon" className="ml-3" />
</button>


<table className="mt-8 w-full text-left border-collapse border-l-2 border-r-2 border-b-2 border-bordercol ">
  <thead>
    <tr className="bg-white text-bordercol rounded-t-lg">
      <th className="border-b border-bordercol p-2 rounded-tl-lg">
        <span className="inline-flex items-center">
          Product Name
          <img
            src="/arrow.svg"
            alt="Arrow Logo"
            className="h-4 w-4 ml-4"
          />
        </span>
      </th>
      <th className="border-b border-bordercol p-2">
        <span className="inline-flex items-center">
          Quantity
          <img
            src="/arrow.svg"
            alt="Rotated Arrow Logo"
            className="h-4 w-4 ml-4 transform rotate-180"
          />
        </span>
      </th>
      <th className="border-b border-bordercol p-2">Price</th>
      <th className="border-b border-bordercol p-2 rounded-tr-lg">Total Price</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product, index) => (
      <tr key={index}>
        <td className="border-b border-bordercol p-2">{product.name}</td>
        <td className="border-b border-bordercol p-2">{product.quantity}</td>
        <td className="border-b border-bordercol p-2">{product.price}</td>
        <td className="border-b border-bordercol p-2">
          INR {product.price * product.quantity}
        </td>
      </tr>
    ))}

    {products.length > 0 && (
      <>
        <tr>
          <td className="border-b border-bordercol p-2" colSpan={2}></td>
          <td className="border-b border-bordercol p-2 font-bold">
            +GST 18%
          </td>
          <td className="border-b border-bordercol p-2 font-bold">
            INR{" "}
            {(
              products.reduce(
                (total, product) =>
                  total + product.price * product.quantity,
                0
              ) * 1.18
            ).toFixed(2)}
          </td>
        </tr>
      </>
    )}
  </tbody>
</table>

      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-RichBlack pt-[12px] w-[435px] pb-[12px] pr-[16px] pl-[16px] rounded text-LimeGreen">
          Generate PDF Invoice
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
