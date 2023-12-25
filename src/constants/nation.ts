import IMAGE from '~/assets/images'

export const NATION = [
  {
    name: 'Châu Âu',
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
    name: 'Châu Mỹ',
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
    name: 'Châu Phi',
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
  },
  {
    name: 'Châu Đại Dương',
    image: IMAGE.nation_oceania,
    imageNoText: IMAGE.nation_oceania,
    children: ['New Zealand', 'Papua New Guinea', 'Samoa']
  }
] as const

export const LIST_NATION = Object.values(NATION).map((item) => item.name as string)
