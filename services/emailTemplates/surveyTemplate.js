const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Please answer the following question:</h3>
          <p>${survey.body}</p>
          <span>
            <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
          </span>
          <span>
            <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
          </span>
        </div>
      </body>
    </html>
  `;
};
