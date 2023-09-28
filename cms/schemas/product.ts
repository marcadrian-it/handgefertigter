import {Rule} from '@sanity/types'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      unique: true,
      validation: (Rule: Rule) => Rule.required().max(20),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 20,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 20),
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive().precision(2),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().max(180),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'archived',
      title: 'Archived',
      type: 'boolean',
    },
  ],
}
