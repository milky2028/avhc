const StringToDate = (input: string): Date => {
  const dateReg = /(\d{2})\/(\d{2})\/(\d{4})/;
  const result = dateReg.exec(input);
  const year = +result![3];
  const month = +result![1] - 1;
  const day = +result![2];
  return new Date(year, month, day);
};

const FormatJsDate = (date: Date): string => {
    const dtf = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    return dtf.format(date);
  };

const FormatJsTimestamp = (date: Date): string => {
    const dtf = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'America/Indianapolis',
      timeZoneName: 'short'
    });
    return dtf.format(date);
  };

export { StringToDate, FormatJsDate, FormatJsTimestamp };
