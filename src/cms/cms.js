import CMS from 'decap-cms-app'

CMS.registerEventListener({
    name: 'prePublish',
    handler: ({ entry }) => {
        return entry.get('data').set('title', 'new title');
    },
});