import { Block } from 'payload'

export const Hero: Block = {
  slug: 'Hero',
  labels: {
    singular: 'Hero',
    plural: 'Hero',
  },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції' },
    { name: 'badge', type: 'text', label: 'Бейдж на головній' },
    { name: 'title', type: 'text', label: 'Заголовок', required: true },
    { name: 'subtitle', type: 'text', label: 'Підзаголовок' },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Зображення' },
    {
      name: 'buttons',
      type: 'array',
      label: 'Кнопки',
      maxRows: 2,
      fields: [
        { name: 'text', type: 'text', required: true, label: 'Текст' },
        { name: 'link', type: 'text', required: true, label: 'Посилання' },
        {
          name: 'variant',
          type: 'select',
          options: [
            { value: 'primary', label: 'Primary' },
            { value: 'secondary', label: 'Secondary' },
          ],
          label: 'Варіант',
        },
      ],
    },
  ],
}
