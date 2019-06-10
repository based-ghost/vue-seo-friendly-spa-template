import { MetaInfo } from 'vue-meta';

export const buildMetaInfo = (routeMetaInfo: object = {}): MetaInfo => {
    const metaInfo: MetaInfo = {
        title: '',
        titleTemplate: '',
        meta: [
            {
                property: 'og:title',
                content:  '',
                vmid: 'og:title',
            },
            {
                property: 'og:description',
                content: '',
                vmid: 'og:description',
            },
            {
                name: 'description',
                content: '',
            },
        ],
    };

    if (!routeMetaInfo || Object.keys(routeMetaInfo).length === 0) {
        return metaInfo;
    }

    const title = routeMetaInfo['title'] || '';
    const titleTemplate = routeMetaInfo['titleTemplate'] || '';
    const description = routeMetaInfo['description'] || '';

    metaInfo.title = title;
    metaInfo.titleTemplate = titleTemplate;
    metaInfo.meta[0].content = title;
    metaInfo.meta[1].content = description;
    metaInfo.meta[2].content = description;

    return metaInfo;
};