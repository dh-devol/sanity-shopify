import Team from "../components/Team";
import { SimplePage } from "../interface";
import { client } from "../lib/sanity";

// pages/about-us.tsx
async function getData() {
    const query = `*[_type == "page" && slug.current == "about-us"][0] {
		_id,
		title,
		"bodyText" : body[0].children[0].text,
	}`;

    const data = await client.fetch(query);

    return data;
}

export default async function AboutUs() {
    const data: SimplePage = await getData();

    return (
        <div className="bg-white">
            <div className="mx-auto max-2-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-bwtween items-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                        Key members of staff at Floors of Stone
                    </h1>
                </div>
                <Team />
            </div>
        </div>
    );
}
