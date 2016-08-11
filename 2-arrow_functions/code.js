var company = {
  employees: ['eubene', 'tea', 'ray'],
  domain: 'euresa.io',
  emails: function() {
    return this.employees.map(employee => {
      return `${employee}@${this.domain}`;
    });
  }
};

console.log(company.emails()); // ['eubene@euresa.io', 'tea@euresa.io', 'ray@euresa.io']
