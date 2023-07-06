// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sortByCountryName = (a: any, b: any) => {
  return a.name.common.localeCompare(b.name.common);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const phoneCountryTrans = (data: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCountryNames = (data: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data?.sort(sortByCountryName)?.map((country: any) => {
    return {
      name: country.name.common,
      imgSrc: country.flags.svg || country.flags.png,
      value: country.ccn3,
    };
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCountrySelection = (data: any) => {
  return data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ?.sort(sortByCountryName)?.filter((country: any) => country.ccn3 == 826 || country.ccn3 == 276)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((country: any) => {
      return {
        imgSrc: country.flags.svg || country.flags.png,
        value: country.ccn3,
      };
    });
};
