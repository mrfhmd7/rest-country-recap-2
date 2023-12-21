const loadCountries = () => {
     fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(data => displayCountries(data));
}

const displayCountries = countries => {
     console.log(countries[0]);
     const countriesHTML = countries.map(country => getCountryHTML(country));
     const container = document.getElementById('countries');
     // console.log(container);
     container.innerHTML = countriesHTML.join(' ');
}

// const getCountryHTML = country => {
const getCountryHTML = ({name, region, capital, flags}) => {
     //const { name, flags } = country; //destructuring
     return `
          <div class="country">
               <h2>${name.common}</h2>
               <h3>${capital}</h3>
               <h4>${region}</h4>
               <img src="${flags.png}" />
          </div>
     `
}

loadCountries();