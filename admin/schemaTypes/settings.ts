import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'savvyCalLink',
      title: 'SavvyCal link',
      type: 'string',
      description: 'The path SavvyCal expects, for example ILV/meet.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'savvyCalButtonText',
      title: 'SavvyCal button text',
      type: 'string',
      description: 'The text for the SavvyCal button',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
