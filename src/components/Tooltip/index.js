const Tooltip = ({ name, age, spouse, employer }) => {
  return `
      <thead>
        <tr>
          <th colSpan="2">${name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Age</th>
          <td>${age}</td>
        </tr>
        ${
          spouse
            ? `<tr>
                <th>Spouse</th>
                <td>${spouse}</td>
              </tr>`
            : ''
        }
        ${
          employer
            ? `<tr>
                <th>Employer</th>
                <td>${employer}</td>
              </tr>`
            : ''
        }
      </tbody>`;
};

export default Tooltip;
