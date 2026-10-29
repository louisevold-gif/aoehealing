import {defineField, defineType} from 'sanity'

export const socialMediaSection = defineType({
  name: 'socialMediaSection',
  title: 'Social Media Section',
  type: 'object',
  fieldsets: [{name: 'socialMedia', options: {columns: 3}}],
  fields: [
    defineField({
      name: 'instagram',
      title: 'Instagram Handle',
      type: 'string',
      fieldset: 'socialMedia',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube Handle',
      type: 'string',
      fieldset: 'socialMedia',
    }),
    defineField({
      name: 'tiktok',
      title: 'Tiktok Handle',
      type: 'string',
      fieldset: 'socialMedia',
    }),
    defineField({
      name: 'threads',
      title: 'Threads Handle',
      type: 'string',
      fieldset: 'socialMedia',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook Handle',
      type: 'string',
      fieldset: 'socialMedia',
    }),
    defineField({
      name: 'bluesky',
      title: 'Bluesky Handle',
      type: 'string',
      fieldset: 'socialMedia',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin Handle',
      type: 'string',
      fieldset: 'socialMedia',
    }),
  ],
})
