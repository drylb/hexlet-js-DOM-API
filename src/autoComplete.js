/* eslint-disable no-undef */

import 'whatwg-fetch';

// VERSION #1=====================================================================

/* export default () => {
  // BEGIN (write your solution here)
  const inputCountry = document.querySelector('[data-autocomplete-name="country"]');
  const inputCapital = document.querySelector('[data-autocomplete-name="capital"]');

  const dataCountry = inputCountry.dataset.autocomplete;
  const dataCapital = inputCapital.dataset.autocomplete;

  const ulCapital = document.querySelector('ul[data-autocomplete-name="capital"]');
  const ulCountry = document.querySelector('ul[data-autocomplete-name="country"]');

  const currentHost = window.location.origin;

  inputCountry.addEventListener('input', async (e) => {
    const { value } = e.target;
    const url = new URL(`..${dataCountry}`, currentHost);
    const data = await fetch(url).then((response) => response.json()).then((data_) => data_);
    if (data.length !== 0) {
      const result = data.filter((item) => item.includes(value));
      result.forEach((country) => {
        if (result.length > 1) {
          const li = document.createElement('li');
          li.innerHTML = country;
          ulCountry.append(li);
        } else {
          ulCountry.innerHTML = `<li>${country}</li>`;
        }
      });
    } else {
      ulCountry.innerHTML = '<li>Nothing</li>';
    }
  });

  inputCapital.addEventListener('input', async (e) => {
    const { value } = e.target;
    const url = new URL(`..${dataCapital}`, currentHost);
    const data = await fetch(url).then((response) => response.json()).then((data_) => data_);
    if (data.length !== 0) {
      const result = data.filter((item) => item.includes(value));
      ulCapital.innerHTML = '<li>Nothing</li>';
      if (ulCapital.firstElementChild?.textContent === 'Nothing') {
        ulCapital.removeChild(ulCapital.firstElementChild);
      }
      result.forEach((capital) => {
        if (result.length > 1) {
          const li = document.createElement('li');
          li.innerHTML = capital;
          ulCapital.append(li);
        } else {
          ulCapital.innerHTML = `<li>${capital}</li>`;
        }
      });
    } else {
      ulCapital.innerHTML = '<li>Nothing</li>';
    }
  });
}; */

// VERSION #2=====================================================================

/* export default () => {
  // BEGIN (write your solution here)
  const inputCountry = document.querySelector('[data-autocomplete-name="country"]');
  const inputCapital = document.querySelector('[data-autocomplete-name="capital"]');

  const dataCountry = inputCountry.dataset.autocomplete;
  const dataCapital = inputCapital.dataset.autocomplete;

  const ulCapital = document.querySelector('ul[data-autocomplete-name="capital"]');
  const ulCountry = document.querySelector('ul[data-autocomplete-name="country"]');

  const currentHost = window.location.origin;

  inputCountry.addEventListener('input', async (e) => {
    const { value } = e.target;
    const url = new URL(`..${dataCountry}`, currentHost);
    url.searchParams.append('term', value);
    const response = await fetch(url);
    const data = await response.json();
    const result = data.length === 0 ? ['Nothing'] : data;
    const listHTML = result.map((item) => `<li>${item}</li>`).join('\n');
    ulCountry.innerHTML = listHTML;
  });

  inputCapital.addEventListener('input', async (e) => {
    const { value } = e.target;
    const url = new URL(`..${dataCapital}`, currentHost);
    url.searchParams.append('term', value);
    const response = await fetch(url);
    const data = await response.json();
    const result = data.length === 0 ? ['Nothing'] : data;
    const listHTML = result.map((item) => `<li>${item}</li>`).join('\n');
    ulCapital.innerHTML = listHTML;
  });
}; */

// VERSION #3=====================================================================

export default () => {
  const autocompleteElements = document.querySelectorAll('input[data-autocomplete]');
  autocompleteElements.forEach((el) => {
    const route = el.dataset.autocomplete;
    const dataAutocompleteName = el.dataset.autocompleteName;
    el.addEventListener('input', async (e) => {
      const list = document.querySelector(`ul[data-autocomplete-name="${dataAutocompleteName}"]`);
      const url = new URL(route, window.location.origin);
      url.searchParams.append('term', e.target.value);
      const response = await fetch(url);
      const items = await response.json();
      const options = items.length === 0 ? ['Nothing'] : items;
      const listHTML = options.map((item) => `<li>${item}</li>`).join('\n');
      list.innerHTML = listHTML;
    });
  });
};
