import {defineField, defineType} from 'sanity'

export const heroBanner = defineType({
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'object',
  fieldsets: [
    {name: 'title', options: {columns: 2}},
    {name: 'button', options: {columns: 2}},
  ],
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'media', title: 'Media'},
    {name: 'button', title: 'Button'},
  ],
  fields: [
    defineField({
      name: 'title_en_US',
      title: 'Title English',
      type: 'string',
      fieldset: 'title',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title_no_NB',
      title: 'Title Norsk',
      type: 'string',
      fieldset: 'title',
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'textArea',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'media',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mediaCredit',
      title: 'Media Credit',
      type: 'string',
      group: 'media',
    }),
    defineField({
      name: 'button_text_en_US',
      title: 'Button Text English',
      type: 'string',
      fieldset: 'button',
      group: 'button',
    }),
    defineField({
      name: 'button_text_no_NB',
      title: 'Button Text Norsk',
      type: 'string',
      fieldset: 'button',
      group: 'button',
    }),
    defineField({
      name: 'button_link',
      title: 'Button Link',
      type: 'string',
      group: 'button',
    }),
    defineField({
      name: 'buttonType',
      title: 'Button Type',
      type: 'string',
      group: 'button',
      options: {
        list: [
          {title: 'Link', value: 'link'},
          {title: 'Booking', value: 'booking'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'booking',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
