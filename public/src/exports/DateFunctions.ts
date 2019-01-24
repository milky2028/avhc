const StringToDate = (input: string): Date => {
    const dateReg = /(\d{2})\/(\d{2})\/(\d{4})/;
    const result = dateReg.exec(input);
    const [, month, day, year] = dateReg.exec(input)!;
    return new Date(+year, +month - 1, +day);
};

const FormatJsDate = (date: Date): string => {
    const dtf = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
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
