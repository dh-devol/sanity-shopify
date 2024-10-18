import {UserIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const teamType = defineField({
  name: 'team',
  title: 'Team',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'images',
      type: 'image',
      title: 'Profile Picture',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'portableText',
    }),
  ],
})
