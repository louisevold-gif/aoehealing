import {defineField} from 'sanity'
import {textArea} from './text-area'
import {title} from './title'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: title.name,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: textArea.name}],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
}
