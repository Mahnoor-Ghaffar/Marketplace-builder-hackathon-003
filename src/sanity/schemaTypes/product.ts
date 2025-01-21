// export default {
//   name: 'product',
//   type: 'document',
//   title: 'Product',
//   fields: [
//     {
//       name: "id",
//       type: "number",
//       title: "ID",
//     },
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Product Name',
//     },
//     {
//       name: 'description',
//       type: 'string',
//       title: 'Description'
//     },
//     {
//       name: 'price',
//       type: 'number',
//       title: 'Product Price',
//     },
//     {
//       name: 'discountPercentage',
//       type: 'number',
//       title: 'Discount Percentage',
//     },
//     {
//       name: 'priceWithoutDiscount',
//       type: 'number',
//       title: 'Price Without Discount',
//       description: 'Original price before discount'
//     },
//     {
//       name:'rating',
//       type:'number',
//       title:'Rating',
//       description:'Rating of the product'
//     },
//     {
//       name: 'ratingCount',
//       type: 'number',
//       title: 'Rating Count',
//       description: 'Number of ratings'
//     },
//     {
//       name: 'tags',
//       type: 'array',
//       title: 'Tags',
//       of: [{ type: 'string' }],
//       options: {
//         layout: 'tags'
//       },
//       description: 'Add tags like "new arrival", "bestseller", etc.'
//     },
//     {
//       name: 'sizes',
//       type: 'array',
//       title: 'Sizes',
//       of: [{ type: 'string' }],
//       options: {
//         layout: 'tags'
//       },
//       description: 'Add sizes like S , M , L , XL , XXL'
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'image',
//       options: {
//         hotspot: true 
//       }
//     }
//   ]
// };


import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        }
    ]
})