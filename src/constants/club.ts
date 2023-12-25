import IMAGE from '~/assets/images'

export const CLUB = [
  {
    name: 'Premier League',
    image: IMAGE.club_premier_league,
    imageNoText: IMAGE.club_premier_league_no_text,
    children: [
      'Manchester City',
      'Manchester United',
      'Liverpool',
      'Chelsea',
      'Arsenal',
      'Tottenham Hotspur',
      'Leicester City',
      'West Ham',
      'Everton',
      'Aston Villa',
      'Leeds United',
      'Newcastle United',
      'Wolverhampton',
      'Crystal Palace',
      'Southampton',
      'Brighton',
      'Burnley',
      'Fulham',
      'West Brom',
      'Sheffield United',
      'Burnley'
    ]
  },
  {
    name: 'Laliga',
    image: IMAGE.club_laliga,
    imageNoText: IMAGE.club_laliga_no_text,
    children: [
      'Real Madrid',
      'Barcelona',
      'Atletico Madrid',
      'Sevilla',
      'Real Sociedad',
      'Villarreal',
      'Real Betis',
      'Granada',
      'Valencia',
      'Levante',
      'Celta Vigo',
      'Athletic Bilbao',
      'Osasuna',
      'Cadiz',
      'Alaves',
      'Getafe',
      'Huesca',
      'Real Valladolid',
      'Elche',
      'Eibar'
    ]
  },
  {
    name: 'Serie A',
    image: IMAGE.club_serie_a,
    imageNoText: IMAGE.club_serie_a_no_text,
    children: [
      'Juventus',
      'Inter Milan',
      'AC Milan',
      'AS Roma',
      'Napoli',
      'Atalanta',
      'Lazio',
      'Sassuolo',
      'Verona',
      'Udinese',
      'Bologna',
      'Cagliari',
      'Fiorentina',
      'Genoa',
      'Spezia',
      'Torino',
      'Benevento',
      'Crotone',
      'Parma',
      'Sampdoria'
    ]
  },
  {
    name: 'Bundesliga',
    image: IMAGE.club_bundesliga,
    imageNoText: IMAGE.club_bundesliga_no_text,
    children: [
      'Bayern Munich',
      'Borussia Dortmund',
      'RB Leipzig',
      'Bayer Leverkusen',
      'Wolfsburg',
      'Eintracht Frankfurt',
      'Borussia Monchengladbach',
      'VfB Stuttgart',
      'Freiburg',
      'Hoffenheim',
      'Augsburg',
      'Mainz 05',
      'Hertha BSC',
      'Arminia Bielefeld',
      'Cologne',
      'Union Berlin',
      'Schalke 04'
    ]
  },
  {
    name: 'Ligue 1',
    image: IMAGE.club_league_1,
    imageNoText: IMAGE.club_league_1_no_text,
    children: [
      'Paris Saint-Germain',
      'Marseille',
      'Lyon',
      'Monaco',
      'Lille',
      'Rennes',
      'Nice',
      'Reims',
      'Montpellier',
      'Strasbourg',
      'Bordeaux',
      'Lorient',
      'Metz',
      'Angers',
      'Nantes',
      'Brest',
      'Saint-Etienne',
      'Lens',
      'Nimes',
      'Dijon'
    ]
  },
  {
    name: 'V League',
    image: IMAGE.club_vleague,
    imageNoText: IMAGE.club_vleague,
    children: [
      'Bình Dương',
      'Hà Nội',
      'Hoàng Anh Gia Lai',
      'Nam Định',
      'Sông Lam Nghệ An',
      'Thanh Hoá',
      'Quảng Ninh',
      'Đà Nẵng',
      'Viettel',
      'Hà Tĩnh',
      'Hải Phòng',
      'Sài Gòn',
      'Bình Định'
    ]
  }
] as const

export const LIST_CLUB = Object.values(CLUB).map((item) => item.name as string)
