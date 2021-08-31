export default {
    title: 'Shipping & Delivery',
    name: 'shippingDelivery',
    type: 'document',
    __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}],
            validation: Rule => Rule.required()
        },
        {
            title: 'SEO / Share Settings',
            name: 'seo',
            type: 'seo'
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title
            }
        }
    }
}

