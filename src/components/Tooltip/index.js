const Tooltip = ({ name }) => {
  return `
      <thead>
        <tr>
          <th colSpan="2">${name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Age</th>
          <td>27</td>
        </tr>
        <tr>
          <th>Spouse</th>
          <td>Bridget Agnes Murphy</td>
        </tr>
        <tr>
          <th>Employer</th>
          <td>Waterbury Clock Company</td>
        </tr>
      </tbody>`;
};

export default Tooltip;
