export default {
    title: 'Global Settings',
    name: 'global',
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
            title: 'Fixed Banner Content',
            name: 'fixedBannerContent',
            description: 'The text to display at the top of each page. e.g. Free internation shipping now available',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'CTA Background',
            name: 'ctaBackground',
            type: 'image',
            description: 'The image for the CTA across all pages',
            validation: Rule => Rule.required()
        },
        {
            title: 'CTA Heading ',
            name: 'ctaHeading',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'CTA Blurb',
            name: 'ctaBlurb',
            type: "array",
            of: [{type: 'block'}],
            validation: Rule => Rule.required()
        },
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

