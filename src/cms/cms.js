import CMS from '@staticcms/core'

CMS.registerEventListener({
    name: 'preSave',
    handler: ({ entry }) => {
        return entry.get('data').set('title', 'new title');
    },
});