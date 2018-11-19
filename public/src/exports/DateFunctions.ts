const StringToDate = (input: string): Date => {
  const dateReg = /(?<month>\d{2})\/(?<day>\d{2})\/(?<year>\d{4})/;
  const result = dateReg.exec(input);
  return new Date(+result!.groups!.year, +result!.groups!.month - 1, +result!.groups!.day);
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
