import { useRoute } from 'vue-router';
import { useMeta, type MetaSourceProxy } from 'vue-meta';

export default function useMetaRoute(): MetaSourceProxy {
  const route = useRoute();
  const { title, description } = route?.meta ?? {};
  const url = window?.location.href || 'unknown';

  const { meta } = useMeta({
    title,
    description,
    link: {
      rel: 'canonical',
      href: url
    },
    og: {
      url,
      title,
      description
    }
  });

  return meta;
}