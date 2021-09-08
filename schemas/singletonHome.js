export default {
    title: 'Home Page',
    name: 'home',
    type: 'document',
    __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Hero Heading',
            name: 'heroHeading',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Hero Blurb',
            name: 'heroBlurb',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            title: 'Hero Background Image',
            name: 'heroBackgroundImage',
            description: 'The image for the hero background',
            type: "image",
            validation: Rule => Rule.required()
        },
        {
            title: 'Content Heading',
            name: 'contentHeading',
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
            title: 'Content Image',
            name: 'contentImage',
            description: 'The image to accompany the content',
            type: "image",
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

