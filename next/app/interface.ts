export interface simplifiedproduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    title: string;
}

export interface SimplePage {
    _id: string;
    _type: string;
    slug: {
        current: string;
    };
    title: string;
    showHero: boolean;
    _createdAt: string;
    _updatedAt: string;
    bodyText: string;
}
