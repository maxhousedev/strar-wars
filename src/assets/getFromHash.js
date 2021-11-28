import { EPISODE_HASH_PREFIX } from './createFilmCard';

export default function getFormHash(hash) {
  let result = null;
  if (hash.length === 0) {
    result = 0;
  } else {
    result = hash.replace(EPISODE_HASH_PREFIX, '');
  }

  return result;
}
