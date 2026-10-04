import {defineField, defineType} from 'sanity'

export const textArea = defineType({
  name: 'textArea',
  title: 'Text Area',
  type: 'object',
  fields: [
    defineField({
      name: 'no_NB',
      title: 'Norsk Bokmål',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'en_US',
      title: 'English',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
