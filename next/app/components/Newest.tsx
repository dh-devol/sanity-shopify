import Image from "next/image";
import { simplifiedproduct } from "../interface";
import { client } from "../lib/sanity";
import Link from "next/link";


async function getData() {
    const query = `*[_type == "product"][0...4] | order(_createdAt desc){
        _id,
        "title": store.title,
        "imageUrl": store.previewImageUrl,
        "price": store.priceRange.minVariantPrice,
        "slug": store.slug.current,
    }`;

    const data = await client.fetch(query);

    return data
}

export default async function Newest() {
    const data: simplifiedproduct[] = await getData();
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        New Products
                    </h2>
                </div>
                <div className="mt-6 grid grid-col-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                <Image 
                                    src={product.imageUrl}
                                    alt={product.title}
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <h3 className="text-sm text-gray-700">
                                    <Link href={`/product/${product.slug}`}>
                                        {product.title}
                                    </Link>
                                </h3>
                                <p className="text-sm font-medium text-gray-900">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}