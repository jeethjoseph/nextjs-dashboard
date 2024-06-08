import { Inter,Lusitana } from 'next/font/google'

export const inter = Inter({subsets:['latin']})
// With lusitana we are getting errors in import if the weight is not specified.
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
  });