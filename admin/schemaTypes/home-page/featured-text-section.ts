import {defineField, defineType} from 'sanity'

export const featuredTextSection = defineType({
  name: 'featuredTextSection',
  title: 'Featured Text Section',
  type: 'object',
  fieldsets: [{name: 'title', options: {columns: 2}}],
  fields: [
    defineField({
      name: 'title_en_US',
      title: 'Title English',
      type: 'string',
      fieldset: 'title',
    }),
    defineField({
      name: 'title_no_NB',
      title: 'Title Norsk',
      type: 'string',
      fieldset: 'title',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'textArea',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
