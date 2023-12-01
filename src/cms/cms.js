import CMS from 'decap-cms-app'

CMS.registerEventListener({
    name: 'preSave',
    handler: ({ entry }) => {
        return entry.get('data').set('title', 'new title');
    },
});