import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export const fDate = (date: string | Date | null | undefined, newFormat?: string): string => {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export const fDateTime = (date: string | Date | null | undefined, newFormat?: string): string => {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export const fTimestamp = (date: string | Date | null | undefined): number | '' => {
  return date ? getTime(new Date(date)) : '';
}

export const fToNow = (date: string | Date | null | undefined): string => {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}
