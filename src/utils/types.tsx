export type Cart = {
    _id: string;
    title: string;
    imageUrl: string | null;
    price: number;
    description: string;
    tags: string[];
    dicountPercentage?: number;
    availableSizes?: string[];
    uuid: number | string | undefined;
    quantity: number;
}