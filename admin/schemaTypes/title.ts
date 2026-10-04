import {defineField, defineType} from 'sanity'

export const title = defineType({
  name: 'title',
  title: 'Title',
  type: 'object',
  fields: [
    defineField({
      name: 'no_NB',
      title: 'Norsk Bokmål',
      type: 'string',
    }),
    defineField({
      name: 'en_US',
      title: 'English',
      type: 'string',
    }),
  ],
})
