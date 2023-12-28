import IMAGE from '~/assets/images'

export const NATION = [
  {
    name: 'Châu Âu',
    nameEnglish: 'Europe',
    image: IMAGE.nation_european,
    imageNoText: IMAGE.nation_european,
    children: [
      'Germany',
      'Spain',
      'Italy',
      'France',
      'Portugal',
      'Netherlands',
      'Belgium',
      'England',
      'Switzerland',
      'Croatia',
      'Denmark',
      'Austria',
      'Sweden',
      'Poland',
      'Turkey',
      'Ukraine',
      'Russia',
      'Wales',
      'Scotland',
      'Czech Republic'
    ]
  },
  {
    name: 'Châu Á',
    nameEnglish: 'Asia',
    image: IMAGE.nation_asian,
    imageNoText: IMAGE.nation_asian_no_text,
    children: [
      'Japan',
      'South Korea',
      'Iran',
      'Saudi Arabia',
      'Australia',
      'United Arab Emirates',
      'Iraq',
      'Qatar',
      'China',
      'Uzbekistan',
      'Syria',
      'Jordan',
      'Lebanon',
      'Oman',
      'Việt Nam',
      'Thailand',
      'Bahrain',
      'Kuwait',
      'Yemen',
      'Palestine'
    ]
  },
  {
    name: 'Nam Mỹ',
    nameEnglish: 'SouthAmerica',
    image: IMAGE.nation_americas,
    imageNoText: IMAGE.nation_americas,
    children: [
      'Brazil',
      'Argentina',
      'Uruguay',
      'Colombia',
      'Chile',
      'Peru',
      'Paraguay',
      'Ecuador',
      'Venezuela',
      'Bolivia'
    ]
  },
  {
    name: 'Bắc Mỹ',
    nameEnglish: 'NorthAmerica',
    image: IMAGE.nation_americas,
    imageNoText: IMAGE.nation_americas,
    children: ['Canada', 'Mexico', 'USA']
  },
  {
    name: 'Châu Phi',
    nameEnglish: 'Africa',
    image: IMAGE.nation_africa,
    imageNoText: IMAGE.nation_africa,
    children: [
      'Nigeria',
      'Cameroon',
      'Senegal',
      'Algeria',
      'Ivory Coast',
      'Egypt',
      'Ghana',
      'Morocco',
      'Tunisia',
      'South Africa',
      'Mali',
      'Burkina Faso',
      'DR Congo',
      'Guinea',
      'Uganda',
      'Cape Verde',
      'Zimbabwe',
      'Zambia',
      'Kenya',
      'Benin'
    ]
  }
] as const

export const LIST_NATION = Object.values(NATION).map((item) => item.nameEnglish as string)
