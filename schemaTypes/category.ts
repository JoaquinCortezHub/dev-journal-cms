import {defineField, defineType} from 'sanity';
import {UlistIcon} from '@sanity/icons';

export default defineType({
  name: 'category',
  title: 'Categories',
  icon: UlistIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
