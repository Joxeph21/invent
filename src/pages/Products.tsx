import Empty from "../ui/Empty";
import BoxBanner from "../ui/BoxBanner";
import SearchBox from "../ui/SearchBox";
import SortBy, { sortProps } from "../ui/SortBy";
import JacketImage from "../assets/images/jacket.png";
import type { ProductType } from "../ui/ProductItem";
import ProductItem from "../ui/ProductItem";

const ProductOptions: sortProps[] = [
  { value: "name-asc", label: "name (A-Z)" },
  { value: "name-desc", label: "name (Z-A)" },
  { value: "price-low", label: "price (lowest)" },
  { value: "price-high", label: "price (highest)" },
  { value: "qty-high", label: "quantity (high)" },
  { value: "rty-low", label: "quantity (low)" },
];


const products: ProductType[] = [
  {
    id: 193030,
    name: "Gucci leather brown jacket",
    category: "Mens Jacket",
    quantity: 243,
    images: [JacketImage],
    hasDiscount: true,
    discountPrice: 9800,
    price: 12000,
    created_at: new Date().toString(),
  },
  {
    id: 192330,
    name: "Gucci leather brown jacket",
    category: "Mens Jacket",
    quantity: 0,
    images: [JacketImage],
    hasDiscount: false,
    discountPrice: 9800,
    price: 12000,
    created_at: new Date().toString(),
  },
];

export default function Products() {
  return (
    <BoxBanner>
      <div className="w-full bg-white shadow-sm p-3 rounded-md flex items-center justify-between ">
        <h1 className="text-2xl font-semibold">Products</h1>
        <SearchBox placeholder="Search Products" />
        <SortBy options={ProductOptions} />
      </div>
      {/* <Empty name="Products" /> */}

      <div className="flex flex-col gap-3 border-[1px] bg-white rounded-lg">
        <div className="flex bg-stone-100 border-b gap-2 text-center capitalize p-4 text-sm font-bold items-center justify-between">
          <p className="w-5"></p>
          <p className="w-1/2 text-center ">Product Info</p>
          {/* <p className="w-1/4">Name</p> */}
          <div className="flex justify-between w-1/2">
            <p className="w-10">Unit</p>
            <p className="w-1/4">Stock</p>
            <p className="w-10">Price</p>
            <p className="w-10"></p>
          </div>
        </div>

        {products.map((product, i) => (
          <ProductItem key={product.id} index={i + 1} product={product} />
        ))}
      </div>
    </BoxBanner>
  );
}
