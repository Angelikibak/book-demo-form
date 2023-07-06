const sortByCountryName = (a: any, b: any) => {
  return a.name.common.localeCompare(b.name.common);
};

export const phoneCountryTrans = (data: any) => {
  return data?.sort(sortByCountryName)?.map((country: any) => {
    const code =
      country.idd.root?.toString() + country.idd?.suffixes?.[0]?.toString();

    return {
      imgSrc: country.flags.svg || country.flags.png,
      code: code || '',
      value: country.ccn3,
    };
  });
};

export const getCountryNames = (data: any) => {
  return data?.sort(sortByCountryName)?.map((country: any) => {
    return {
      name: country.name.common,
      imgSrc: country.flags.svg || country.flags.png,
      value: country.ccn3,
    };
  });
};

export const getCountrySelection = (data: any) => {
  return data
    ?.sort(sortByCountryName)?.filter((country: any) => country.ccn3 == 826 || country.ccn3 == 276)
    .map((country: any) => {
      return {
        imgSrc: country.flags.svg || country.flags.png,
        value: country.ccn3,
      };
    });
};
