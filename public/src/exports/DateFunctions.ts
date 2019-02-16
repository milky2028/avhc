export const StringToDate = (input: string): Date => {
    const dateReg = /(\d{2})\/(\d{2})\/(\d{4})/;
    const [, month, day, year] = dateReg.exec(input)!;
    return new Date(+year, +month - 1, +day);
};

export const FormatJsDate = (date: Date): string => {
    const dtf = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
    return dtf.format(date);
  };

export const FormatJsTimestamp = (date: Date): string => {
    const dtf = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'America/Denver',
      timeZoneName: 'short'
    });
    return dtf.format(date);
  };

