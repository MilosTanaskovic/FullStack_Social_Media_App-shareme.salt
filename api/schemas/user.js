export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string'
        },
        {
            name: 'userBackgroundImg',
            title: 'User Background Img',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}