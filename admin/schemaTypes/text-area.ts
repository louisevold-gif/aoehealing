import {defineField, defineType} from 'sanity'

export const textArea = defineType({
  name: 'textArea',
  title: 'Text Area',
  type: 'document',
  fields: [
    defineField({
      name: 'no-NB',
      title: 'Norsk Bokmål',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'en-US',
      title: 'English',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
