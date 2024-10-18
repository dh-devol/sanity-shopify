import Image from "next/image";
import { client } from "../lib/sanity";

async function getData() {
    const query = `*[_type == "team"] {
        _id,
        name,
        title,
        "imageUrl" : images.asset->url,
        "bioText": bio[0].children[0].text,
    }`;

    const data = await client.fetch(query);

    return data;
}

export default async function Team() {
    const data = await getData();
    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
            {data.map((team) => (
                <div key={team._id} className="group relative">
                    <div className="aspect-square w-full overflow-hidden bg-grey-200 group-hover:opacity-75 lg:h-80">
                        <Image
                            src={team.imageUrl}
                            alt="Team member"
                            className="w-full h-full ovject-cover lg:h-full lg:w-full"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div>
                        <h2>{team.name}</h2>
                    </div>
                    <div>
                        <h3>{team.title}</h3>
                    </div>
                    <div>
                        <p>{team.bioText}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
