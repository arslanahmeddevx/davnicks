const fs = require('fs');
const text = `Butterfly	Azo	37	28.93
Butterfly	Daizy	34	24
Butterfly	Dumi	38	28.06
Butterfly	Tilla	22	15.78
Dilophosaurus	Danny	100	65.46
Dilophosaurus	Danny #2	100	57.58
Dilophosaurus	Dazzy	100	60.94
Dilophosaurus	Dumi	100	86.34
Dilophosaurus	Kiki	100	71.47
Dilophosaurus	Mimi	56	51.57
Dilophosaurus	Nani	100	58.85
Dilophosaurus	Sammi	100	59.85
Disco Bee	Ceri	48	37.95
Disco Bee	Sammy	45	33.62
Dog	Bella	1	1.25
Dog	Cappy	1	1.15
Dog	Ceri	1	1.16
Dog	Clia	1	1.83
Dog	Danny	1	1.86
Dog	Dumi	1	1.38
Dog	Geo	1	1.34
Dog	Gus	1	1.74
Dog	Jae	1	1.98
Dog	Jala	1	1.33
Dog	Janzy	1	1.95
Dog	Janzy	1	1.92
Dog	Jax	1	0.99
Dog	Luma	1	1.96
Dog	Mally	1	1.59
Dog	Mally	1	1.56
Dog	Mimy	1	1.35
Dog	Nani	1	1.67
Dog	Nani	1	1.14
Dog	Sammy	1	2
Dog	Sammy	1	1.99
Dog	Simon	1	2.04
Dog	Yusie	1	1.38
Dragonfly	Cal	41	26.91
Dragonfly	Cappy	37	26.33
Dragonfly	Ceri	28	19.73
Dragonfly	Clia	95	80.55
Dragonfly	Daizy	100	86.76
Dragonfly	Ettie	41	39.95
Dragonfly	Fawny	37	35.81
Dragonfly	Jacob	23	5
Dragonfly	Jala	45	33.87
Dragonfly	Katie	57	36.02
Dragonfly	Mally	42	21
Dragonfly	Mimy	40	26.43
Dragonfly	Ollie	38	33.23
Dragonfly	Samster	32	20
Dragonfly	Tia	39	36.25
Dragonfly	Yusie	31	16.71
Kitsune	Cappy	100	19.84
Kitsune	Ettie	100	60.88
Kitsune	Fernando	100	18.79
Kitsune	Gus	100	71.52
Kitsune	Jackie	100	27.39
Kitsune	Lani	100	65.93
Kitsune	Mimi	100	71.83
Mimic Octopus	Fernando	29	30.59
Mimic Octopus	Fernando	100	86.28
Mimic Octopus	Sammy	26	21.44
Mimic Octopus	Shay	29	26.3
Queen Bee	Chaia	34	22.9
Queen Bee	Colly	35	32.05
Queen Bee	Dani	31	25.97
Queen Bee	Fernando	20	17.82
Queen Bee	Gigi	68	40.63
Queen Bee	Nani	28	21.19
Queen Bee	Paya	40	35.3
Queen Bee	Sammy	30	29.47
Raccoon	Biscuit	99	20.35
Raccoon	Chaia	40	30.28
Raccoon	Dani	32	20.81
Raccoon	Gus	47	28.24
Raccoon	Jae	33	26.61
Raccoon	Jaeda	40	36.35
Raccoon	Jaia	42	25.99
Raccoon	Jazzy	31	20.55
Raccoon	Keena	49	20.92
Raccoon	Neko	20	21.89
Raccoon	Mally	1	1.59
Raccoon	Mally	1	1.56
Raccoon	Sammy	1	2
Raccoon	Sammy	1	1.99
Raccoon	Dumi	1	1.38
Raccoon	Clia	1	1.83
Raccoon	Janzy	1	1.95
Raccoon	Jala	1	1.33
Raccoon	Nani	1	1.67
Raccoon	Jax	1	0.99
Raccoon	Danny	1	1.86
Raccoon	Ceri	1	1.16
Raccoon	Bella	1	1.25
Raccoon	Geo	1	1.34
Raccoon	Mimy	1	1.35
Raccoon	Luma	1	1.96
Raccoon	Simon	1	2.04
Raccoon	Yusie	1	1.38
Raccoon	Jae	1	1.98
Raccoon	Jae	1	1.02
Raccoon	Gus	1	1.74
Raccoon	Nani	1	1.14
Raccoon	Janzy	1	1.92
Raccoon	Cappy	1	1.15
Raccoon	Dazzy	1	1.66
Raccoon	Colly	1	2.08
Raccoon	Danny	1	1.83
Raccoon	Shay	1	1.37
Raccoon	Gus	1	1.37
Raccoon	Dumi	28	7.25
Raccoon	Etty	1	1.44
Red Fox	Etty	23	13.61
Red Fox	Janzy	42	35.67
Red Fox	Katie	35	26.55`;

const pets = text.split('\n').filter(Boolean).map(line => {
  const [type, name, age, weight] = line.split('\t');
  return { type, name, age: parseFloat(age), weight: parseFloat(weight) };
});

fs.writeFileSync('src/data/petDupeData.ts', `export const dupedPets = ${JSON.stringify(pets, null, 2)};`);
console.log('done');
