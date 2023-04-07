export function TreatmentDetails(treatmentId) {
  const section = document.createElement('section');

  section.innerHTML = `
      <h2>Treatment</h2>
      <p class="loading">Ładuję zabieg...</p>
      `;

  fetch(`http://localhost:3000/treatments/${treatmentId}`)
    .then((response) => response.json())
    .then((treatment) => {
      const details = document.createElement('article');

      details.innerHTML = `
          <h3>${treatment.name}</h3>
          <p>Obszar: ${treatment.area}</p>
          <p>Czas zabiegu: ${treatment.time} minut</p>
          <p>
              <strong>${treatment.price.toFixed(2)} PLN</strong>
          </p>
          `;

      // usuwamy element mowiacy o ladowaniu
      section.querySelector('.loading').remove();
      // podstawiamy gotowa informacje o zabiegu
      section.append(details);
    });

  return section;
}
