import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site settings',
  type: 'document',
  groups: [
    {name: 'savvyCal', title: 'SavvyCal'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'savvyCalLink',
      title: 'SavvyCal link',
      type: 'string',
      description: 'The path SavvyCal expects, for example ILV/meet.',
      group: 'savvyCal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'savvyCalButtonText',
      title: 'SavvyCal button text',
      type: 'string',
      description: 'The text for the SavvyCal button',
      group: 'savvyCal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the site, recommended length approx. 50-60 characters.',
      group: 'seo',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'The description of the site',
      group: 'seo',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image used for the SEO, recommended size 1200 x 630',
      group: 'seo',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      description: 'The URL of the site, for example https://www.aoehealing.com',
      group: 'seo',
    }),
  ],
})
