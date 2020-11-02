const menuIndex = {
  data: [
    {
      name: 'Dashboard',
      url: '/dashboard',
    },
    {
      name: 'Certificados SSL',
      url: '/',
    },
    {
      name: 'Blindagem de site',
      url: '/',
    },
    {
      name: 'Loja',
      url: '/',
    },
    {
      name: 'WAF',
      children: [
        {
          name: 'Starter',
          url: '/',
        },
        {
          name: 'Pro',
          url: '/',
        },
        {
          name: 'Enterprise',
          url: '/',
        },
      ],
    },
  ],
  system: [
    {
      name: 'Sistema',
      url: '/',
    },
    {
      name: 'Organizações',
      url: '/',
    },
  ],
};

export default menuIndex;
