import {defineField} from 'sanity'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroBanner',
      title: 'Hero Banner',
      type: 'heroBanner',
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
    defineField({
      name: 'socialMediaSection',
      title: 'Social Media Section',
      type: 'socialMediaSection',
    }),
  ],
  preview: {
    select: {
      title: 'heroBanner.title_en_US',
    },
    prepare({title}: {title?: string}) {
      return {title: title || 'Home Page'}
    },
  },
}
