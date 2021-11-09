import { useMeta } from 'vue-meta';
import { useRoute } from 'vue-router';

import type { MetaSourceProxy } from 'vue-meta';

export default function useMetaRoute(): MetaSourceProxy {
  const route = useRoute();
  const { title, description } = route?.meta ?? {};

  const { meta } = useMeta({
    title,
    description,
    og: {
      title,
      description
    }
  });

  return meta;
}