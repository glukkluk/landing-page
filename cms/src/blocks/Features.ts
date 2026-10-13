import { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  labels: {
    singular: 'Feature',
    plural: 'Features',
  },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції' },
    { name: 'badge', type: 'text', label: 'Бейдж на головній' },
    { name: 'title', type: 'text', label: 'Заголовок', required: true },
    {
      name: 'items',
      type: 'array',
      label: 'Наші фічі',
      fields: [
        { name: 'icon', type: 'text', label: 'Іконка', required: true },
        { name: 'title', type: 'text', label: 'Заголовок', required: true },
        { name: 'text', type: 'textarea', label: 'Текст' },
      ],
    },
  ],
}
