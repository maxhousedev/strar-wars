const url = 'https://swapi.dev/api/';

export default function fetchStarWars(resources) {
  return async () => {
    const response = await fetch(url + resources);
    let data;
    if (response.ok) {
      data = await response.json();
    } else {
      data = `Ошибка ${response.status}`;
    }

    return data;
  };
}
