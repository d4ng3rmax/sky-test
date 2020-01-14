import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(collection: Array<any>, category: string): Array<any> {
    if (!collection) {
      return null;
    }

    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[category]]) {
        previous[current[category]] = [current];
      } else {
        previous[current[category]].push(current);
      }
      console.log('previous', previous)
      return previous;
    }, {});
    
    console.log('current', Object.keys(groupedCollection))
    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));

    // console.log('prop', category)
    // return collection;
  }

}

/*
<!DOCTYPE html>
<html>
<body>

<p>Subtract the numbers in the array, starting from the left:</p>

<p id="demo"></p>

<script>
var arr = [{
	"type": "highlights",
	"title": "Highlight",
	"items": [{
		"availableChannels": [],
		"title": "Watchmen",
		"hashKey": "5afc25a391e93f47248f1064",
		"isBlocked": false,
		"images": [{
			"width": 1920,
			"height": 1080,
			"type": 2,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1920x1080/images/sky-content-hub-prd/5afc25a391e93f47248f1064/5a563880332c65000165b739_2_1920x1080.jpeg"
		}, {
			"width": 1920,
			"height": 1080,
			"type": 2,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1920x1080/images/sky-content-hub-prd/5afc25a391e93f47248f1064/5a563880332c65000165b739_2_1920x1080.jpeg"
		}],
		"categories": "",
		"cast": [],
		"programType": "Serie",
		"sheetType": 2,
		"description": "Rorschach e seus amigos super-heróis investigam o assassinato de Edward Blake, um dos membros de sua equipe, que também era conhecido como O Comediante. À medida que o grupo desvenda os mistérios acerca do ocorrido, esses vigilantes se deparam com questões filosóficas, políticas e éticas, e percebem que as ambições humanas podem ir muito além do que eles imaginavam.",
		"shortDescription": "",
		"year": 2019,
		"schedules": [],
		"action": "play",
		"secondaryActions": {
			"setAlarm": false,
			"record": false,
			"isAvailable": true
		},
		"tags": {
			"contentType": "pago",
			"price": "",
			"provider": "HBO Play"
		},
		"isCvod": true,
		"isPPVLinear": {
			"availablePayPerViewLinear": null,
			"technology": []
		},
		"canBeWatchedOn": ["phone"],
		"isElegible": false,
		"isEligible": false,
		"isAvailable": true,
		"price": "",
		"subtitle": "Grátis",
		"priceDouble": "",
		"provider": "HBO Play"
	}, {
		"availableChannels": [],
		"title": "It: Capítulo Dois",
		"hashKey": "5dd303df66deeb42773e1d31",
		"SkyOnDemandContentId": 59663,
		"contentId": 59663,
		"isBlocked": false,
		"images": [{
			"width": 1920,
			"height": 1080,
			"type": 2,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1920x1080/images/sky-content-hub-prd/5dd303df66deeb42773e1d31/5a563880332c65000165b739_2_1920x1080.jpeg"
		}, {
			"width": 1920,
			"height": 1080,
			"type": 2,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1920x1080/images/sky-content-hub-prd/5dd303df66deeb42773e1d31/5a563880332c65000165b739_2_1920x1080.jpeg"
		}],
		"categories": "Suspense, Terror",
		"cast": [],
		"programId": "MV035183260000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "16",
		"description": "Vinte e sete anos depois dos eventos que chocaram os adolescentes que faziam parte do Clube dos Perdedores, os amigos realizam uma reunião. No entanto, o reencontro se torna uma verdadeira e sangrenta batalha quando Pennywise, o palhaço, retorna. Baseado na obra de Stephen King. Violência\n\nEsse filme também está disponível na TV para os equipamentos SD, HD e PLUS não conectados.",
		"shortDescription": "O palhaço Pennywise retorna 27 anos depois para atormentar os amigos mais uma vez, agora adultos.",
		"year": 2019,
		"schedules": [],
		"action": "play",
		"secondaryActions": {
			"setAlarm": false,
			"record": false
		},
		"isPayPerViewLinear": {
			"availablePayPerViewLinear": true,
			"technology": "plushdsd"
		},
		"tags": {
			"contentType": "pago",
			"price": 14.9
		},
		"price": "R$ 14,90",
		"isTvod": true,
		"isTvodPayPerview": true,
		"isPPVLinear": {
			"availablePayPerViewLinear": true,
			"technology": ["plus", "hd", "sd"]
		},
		"isPush": true,
		"isTvodDMS": true,
		"canBeWatchedOn": ["phone", "tv"],
		"isElegible": false,
		"isEligible": false,
		"subtitle": "R$ 14,90",
		"priceDouble": 14.9
	}, {
		"availableChannels": [],
		"title": "Yesterday",
		"hashKey": "5d1d6f658002f31be46c1572",
		"SkyOnDemandContentId": 59376,
		"contentId": 59376,
		"isBlocked": false,
		"images": [{
			"width": 1920,
			"height": 1080,
			"type": 2,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1920x1080/images/sky-content-hub-prd/5d1d6f658002f31be46c1572/5a563880332c65000165b739_2_1920x1080.jpeg"
		}, {
			"width": 1920,
			"height": 1080,
			"type": 2,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1920x1080/images/sky-content-hub-prd/5d1d6f658002f31be46c1572/5a563880332c65000165b739_2_1920x1080.jpeg"
		}],
		"categories": "Comédia, Musical",
		"cast": [],
		"programId": "MV035164780000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "14",
		"description": "Após sofrer um acidente, um cantor e compositor acorda em uma estranha realidade em que ele é a única pessoa que lembra dos Beatles. Com as músicas de seus ídolos, ele se transforma em um grande sucesso, mas a fama tem seu preço.\n\nEsse filme também está disponível na TV para os equipamentos PLUS não conectados.",
		"shortDescription": "Após sofrer um acidente, um cantor e compositor acorda em uma estranha realidade em que ele é a única pessoa que lembra dos Beatles. Com as músicas de seus ídolos, ele se transforma em um grande sucesso, mas a fama tem seu preço.",
		"year": 2019,
		"schedules": [],
		"action": "play",
		"secondaryActions": {
			"setAlarm": false,
			"record": false
		},
		"isPayPerViewLinear": {
			"availablePayPerViewLinear": false,
			"technology": "push"
		},
		"tags": {
			"contentType": "pago",
			"price": 14.9
		},
		"price": "R$ 14,90",
		"isTvod": true,
		"isTvodPayPerview": true,
		"isPPVLinear": {
			"availablePayPerViewLinear": false,
			"technology": []
		},
		"isPush": true,
		"isTvodDMS": true,
		"canBeWatchedOn": ["phone", "tv"],
		"isElegible": false,
		"isEligible": false,
		"subtitle": "R$ 14,90",
		"priceDouble": 14.9
	}, {
		"availableChannels": [],
		"title": "Velozes e Furiosos: Hobbs e Shaw",
		"hashKey": "5d1202be53825265a38eb2e7",
		"SkyOnDemandContentId": 58979,
		"contentId": 58979,
		"isBlocked": false,
		"images": [{
			"width": 1920,
			"height": 1080,
			"type": 2,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1920x1080/images/sky-content-hub-prd/5d1202be53825265a38eb2e7/5a2b35b13c44c90001a5034e_2_1920x1080.jpeg"
		}, {
			"width": 1920,
			"height": 1080,
			"type": 2,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1920x1080/images/sky-content-hub-prd/5d1202be53825265a38eb2e7/5a2b35b13c44c90001a5034e_2_1920x1080.jpeg"
		}],
		"categories": "Ação e Aventura, Comédia, Suspense",
		"cast": [],
		"programId": "MV035145320000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "14",
		"description": "Dwayne Johnson e Jason Statham retornam em seus inesquecíveis papéis de Hobbs e Shaw, neste filme cheio de ação da franquia de grande sucesso Velozes e Furiosos! Durante anos, o agente fortão Luke Hobbs  e o fora-da-lei Deckard Shaw sempre se estranharam.\n\nEsse filme também está disponível na TV para os equipamentos SD, HD e PLUS não conectados.",
		"shortDescription": "O corpulento policial Luke Hobbs se junta ao fora da lei Deckard Shaw para combater um terrorista geneticamente melhorado que tem força sobre-humana.",
		"year": 2019,
		"schedules": [],
		"action": "play",
		"secondaryActions": {
			"setAlarm": false,
			"record": false
		},
		"isPayPerViewLinear": {
			"availablePayPerViewLinear": true,
			"technology": "plushdsd"
		},
		"tags": {
			"contentType": "pago",
			"price": 14.9
		},
		"price": "R$ 14,90",
		"isTvod": true,
		"isTvodPayPerview": true,
		"isPPVLinear": {
			"availablePayPerViewLinear": true,
			"technology": ["plus", "hd", "sd"]
		},
		"isPush": true,
		"isTvodDMS": true,
		"canBeWatchedOn": ["phone", "tv"],
		"isElegible": false,
		"isEligible": false,
		"subtitle": "R$ 14,90",
		"priceDouble": 14.9
	}, {
		"availableChannels": [],
		"title": "Era Uma Vez Em... Hollywood",
		"hashKey": "5d42abef762cd8056bdc8647",
		"SkyOnDemandContentId": 59315,
		"contentId": 59315,
		"isBlocked": false,
		"images": [{
			"width": 1920,
			"height": 1080,
			"type": 2,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1920x1080/images/sky-content-hub-prd/5d42abef762cd8056bdc8647/5a563880332c65000165b739_2_1920x1080.jpeg"
		}, {
			"width": 1920,
			"height": 1080,
			"type": 2,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1920x1080/images/sky-content-hub-prd/5d42abef762cd8056bdc8647/5a563880332c65000165b739_2_1920x1080.jpeg"
		}],
		"categories": "Drama",
		"cast": [],
		"programId": "MV035158890000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "16",
		"description": "Era Uma Vez em... Holywood de Quentin Tarantino nos leva à Los Angeles de 1969, onde tudo está mudando. O estrela de TV Rick e seu antigo dublê Cliff tentam abrir caminho em uma indústria que eles não reconhecem mais.\n\nEsse filme também está disponível na TV para os equipamentos PLUS não conectados.",
		"shortDescription": "Era Uma Vez em... Holywood de Quentin Tarantino nos leva à Los Angeles de 1969, onde tudo está mudando. O estrela de TV Rick e seu antigo dublê Cliff tentam abrir caminho em uma indústria que eles não reconhecem mais.",
		"year": 2019,
		"schedules": [],
		"action": "play",
		"secondaryActions": {
			"setAlarm": false,
			"record": false
		},
		"isPayPerViewLinear": {
			"availablePayPerViewLinear": false,
			"technology": "plushdsd"
		},
		"tags": {
			"contentType": "pago",
			"price": 14.9
		},
		"price": "R$ 14,90",
		"isTvod": true,
		"isTvodPayPerview": true,
		"isPPVLinear": {
			"availablePayPerViewLinear": false,
			"technology": ["plus", "hd", "sd"]
		},
		"isPush": true,
		"isTvodDMS": true,
		"canBeWatchedOn": ["phone", "tv"],
		"isElegible": false,
		"isEligible": false,
		"subtitle": "R$ 14,90",
		"priceDouble": 14.9
	}]
}, {
	"type": "menu",
	"items": [{
		"title": "Explorar",
		"menuAction": "explore"
	}, {
		"title": "Escolher por Canal",
		"menuAction": "new_content"
	}]
}, {
	"type": "carousel-portrait",
	"title": "Black Week Ofertas",
	"movies": [{
		"availableChannels": [],
		"title": "O Rei Leão",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5afffea9c7c80900d54022c4/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5afffea9c7c80900d54022c4/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Ação e Aventura, Infantil",
		"cast": [],
		"programId": "MV035036920000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "10",
		"description": "Traído e exilado de seu reino, o leãozinho Simba precisa descobrir como crescer e retomar seu destino como herdeiro real nas planícies da savana africana.\n\n\nEsse filme também está disponível na TV para os equipamentos SD, HD e PLUS não conectados.",
		"shortDescription": "Traído e exilado de seu reino, o leãozinho Simba precisa descobrir como crescer e retomar seu destino como herdeiro real nas planícies da savana africana.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Toy Story 4",
		"isBlocked": false,
		"images": [{
			"width": 300,
			"height": 450,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5afda2776813b50542cd11df/5a563880332c65000165b739_3_300x450.jpeg"
		}, {
			"width": 300,
			"height": 450,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5afda2776813b50542cd11df/5a563880332c65000165b739_3_300x450.jpeg"
		}],
		"categories": "Animação, Infantil",
		"cast": [],
		"programId": "MV035031450000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "L",
		"description": "Agora morando na casa da pequena Bonnie, Woody apresenta aos amigos o novo brinquedo construído por ela: Forky, baseado em um garfo de verdade. O novo posto de brinquedo não o agrada nem um pouco, o que faz com que Forky fuja de casa. Decidido a trazer de volta o atual brinquedo favorito de Bonnie, Woody parte em seu encalço e, no caminho, reencontra Bo Peep, que agora vive em um parque de diversões.\n\nEsse filme também está disponível na TV para os equipamentos HD e PLUS não conectados.",
		"shortDescription": "Agora morando na casa da pequena Bonnie, Woody apresenta aos amigos o novo brinquedo construído por ela: Forky, baseado em um garfo de verdade.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Homem-Aranha: Longe De Casa",
		"isBlocked": false,
		"images": [{
			"width": 300,
			"height": 450,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5ba6a8e25b80edeedc103b79/5a563880332c65000165b739_3_300x450.jpeg"
		}, {
			"width": 300,
			"height": 450,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5ba6a8e25b80edeedc103b79/5a563880332c65000165b739_3_300x450.jpeg"
		}],
		"categories": "Ação e Aventura, Fantasia",
		"cast": [],
		"programId": "MV035033890000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "10",
		"description": "Peter Parker está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando é surpreendido pela visita de Nick Fury. Convocado para mais uma missão heroica, ele precisa enfrentar vários vilões que surgem em cidades-símbolo do continente, como Londres, Paris e Veneza, e também a aparição do enigmático Mysterio.\n\nEsse filme também está disponível na TV para os equipamentos PLUS não conectados.",
		"shortDescription": "Peter Parker precisa enfrentar vários vilões que surgem em cidades-símbolo da Europa.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Annabelle 3: De Volta Para Casa",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5bb48af108d27e5f2f67c288/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5bb48af108d27e5f2f67c288/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Suspense, Terror",
		"cast": [],
		"programId": "MV035067000000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "14",
		"description": "Determinados a impedir que Annabelle cause ainda mais estragos, os demonologistas Ed e Lorraine Warren levam a boneca possuída até a sala de artefatos em sua casa, colocando-a em segurança em um vidro sagrado e recorrendo à santa bênção de um padre. Mas, uma noite profana de terror os aguarda, pois Annabelle desperta os espíritos malignos da sala, que agora almejam um novo alvo: a filha de 10 anos do casal Warren, Judy, e seus amigos.\n\nEsse filme também está disponível na TV para os equipamentos HD e PLUS não conectados.",
		"shortDescription": "Após ser trancada atrás de um vidro sagrado na sala de artefatos dos Warren, Annabele desperta os espíritos malígnos do lugar, que colocam a filha dos Warren e seus amigos sob sua mira.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Luccas Neto em: Dia das Crianças",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5da7b6395c423166927a7a84/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5da7b6395c423166927a7a84/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Comédia, Infantil",
		"cast": [],
		"programId": "MV035129600000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "L",
		"description": "Luccas Neto quer fazer uma grande festa do Dia das Crianças, mas alguém está planejando tomar o controle da escola e cancelar a festa.\n",
		"shortDescription": "Luccas Neto quer fazer uma grande festa do Dia das Crianças, mas alguém está planejando tomar o controle da escola e cancelar a festa.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Pets - A Vida Secreta dos Bichos 2",
		"isBlocked": false,
		"images": [{
			"width": 300,
			"height": 450,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5d021244323c834d4c20fdfe/5a563880332c65000165b739_3_300x450.jpeg"
		}, {
			"width": 300,
			"height": 450,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5d021244323c834d4c20fdfe/5a563880332c65000165b739_3_300x450.jpeg"
		}],
		"categories": "Ação e Aventura, Animação, Comédia, Infantil",
		"cast": [],
		"programId": "MV035036930000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "L",
		"description": "\"Pets - A Vida Secreta dos Bichos 2\" continua com a história de Max, Gigi, Bola de Neve e o resto da turma, em novas aventuras, quando são forçados a criar coragem para se tornar seus próprios heróis.\n\nEsse filme também está disponível na TV para os equipamentos HD e PLUS não conectados.",
		"shortDescription": "\"Pets - A Vida Secreta dos Bichos 2\" continua com a história de Max, Gigi, Bola de Neve e o resto da turma, em novas aventuras, quando são forçados a criar coragem para se tornar seus próprios heróis.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "O Imperador de Paris",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5b008742181654506ca69458/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5b008742181654506ca69458/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Ação e Aventura, Drama",
		"cast": [],
		"programId": "MV035048400000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "16",
		"description": "No agitado consulado de Napoleão Bonaparte, um homem tenta escapar ao seu passado e parece consegui-lo. François Vidocq é uma lenda viva do submundo criminoso de Paris, mas é dado como morto aquando de mais uma espectacular evasão das masmorras napoleónicas. Recomeçando a sua vida como simples comerciante, Vidocq é apanhado pelo seu passado e acaba por chegar a um acordo com o chefe da segurança nacional para se juntar às forças policiais e combater os antigos confrades do mundo do crime. Mas tem inimigos de um lado e do outro…",
		"shortDescription": "François Vidocq, ex-presidiário e lenda do crime, retorna à prisão depois de ser acusado de um assassinato que não cometeu. Para finalmente se libertar do seu passado, ele decide fazer um acordo e se juntar à polícia em troca de sua liberdade.",
		"year": 2018
	}, {
		"availableChannels": [],
		"title": "X-Men: Fênix Negra",
		"isBlocked": false,
		"images": [{
			"width": 288,
			"height": 432,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/288x432/images/sky-content-hub-prd/5b96d7d481a507897e5dc992/5a563880332c65000165b739_3_288x432.jpeg"
		}, {
			"width": 288,
			"height": 432,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/288x432/images/sky-content-hub-prd/5b96d7d481a507897e5dc992/5a563880332c65000165b739_3_288x432.jpeg"
		}],
		"categories": "Ação e Aventura, Fantasia, Ficção Científica",
		"cast": [],
		"programId": "MV035041260000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "16",
		"description": "Durante uma missão de resgate no espaço, Jean é quase morta por uma misteriosa força cósmica dentro dela. Para lutar contra essa força, que está cada vez mais poderosa, Jean desencadeia seus poderes de maneiras que ela não pode compreender e nem conter.\n\nEsse filme também está disponível na TV para os equipamentos PLUS não conectados.",
		"shortDescription": "Jean Grey começa a desenvolver incríveis poderes que a corrompem e a transformam em uma Fênix Negra. Agora, os X-Men precisam decidir se a vida de um membro da equipe vale mais do que todas as pessoas do mundo.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Verão de 84",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5b0016f3fdd1c54e9b1b8bbb/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5b0016f3fdd1c54e9b1b8bbb/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Suspense",
		"cast": [],
		"programId": "MV035080360000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "14",
		"description": "Um grupo de adolescentes começa a suspeitar que um policial local pode ser um serial killer. Davey e seus amigos começam sua própria investigação, que tem resultados surpreendentes.",
		"shortDescription": "Um grupo de adolescentes começa a suspeitar que um policial local pode ser um serial killer. Davey e seus amigos começam sua própria investigação, que tem resultados surpreendentes.",
		"year": 2018
	}, {
		"availableChannels": [],
		"title": "Fora de Série",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d00c0c384e14d64578d7520/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d00c0c384e14d64578d7520/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Comédia",
		"cast": [],
		"programId": "MV035095710000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "16",
		"description": "Duas grandes amigas conhecidas por serem os maiores prodígios da escola estão prestes a terminar o ensino médio. Faltando poucos dias para o grande momento, elas percebem que estão arrependidas por terem estudado tanto e se divertido tão pouco. Determinadas a não passarem por todo esse tempo sem nenhuma diversão, elas decidem correr atrás dos quatro anos perdidos em apenas uma noite.\n",
		"shortDescription": "Duas grandes amigas conhecidas por serem os maiores prodígios da escola estão prestes a terminar o ensino médio.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "MIB: Homens de Preto - Internacional",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d00c0c784e14deb238d7926/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d00c0c784e14deb238d7926/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Ação e Aventura, Comédia, Ficção Científica",
		"cast": [],
		"programId": "MV035013700000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "12",
		"description": "M é uma agente que durante sua jornada de auto-afirmação, estreia na divisão londrina do MIB. Lá, ela conhece um agente conhecido por seus talentos, H. Os dois estão envolvidos em um caso de assassinato misterioso.\n\nEsse filme também está disponível na TV para os equipamentos PLUS não conectados.",
		"shortDescription": "M é uma agente que durante sua jornada de auto-afirmação, estreia na divisão londrina do MIB. Lá, ela conhece um agente conhecido por seus talentos, H. Os dois estão envolvidos em um caso de assassinato misterioso.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Memória de um Crime",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d94b46f27ce93e63b89f725/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d94b46f27ce93e63b89f725/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Ação e Aventura, Suspense",
		"cast": [],
		"programId": "MV035080390000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "12",
		"description": "Um complicado assalto a um carro blindado dá errado e quase todos os bandidos envolvidos no crime acabam sendo mortos pela polícia depois de um violento embate. O único sobrevivente é enviado para uma instituição de segurança máxima e, sem saber, se torna vítima de diversos experimentos científicos e sociais.\n",
		"shortDescription": "Depois de um audacioso assalto a um caminhão blindado, um criminoso termina na prisão e com amnésia. Um grupo implacável quer encontrar o dinheiro roubado, e para tal, sequestrarão o bandido e farão de tudo para recuperar as memórias perdidas.",
		"year": 2018
	}, {
		"availableChannels": [],
		"title": "Comando Justiceiro",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d972dc621db5c6dfd2afa5c/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d972dc621db5c6dfd2afa5c/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Ação e Aventura",
		"cast": [],
		"programId": "MV035082800000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "14",
		"description": "Um especialista em grupos de operações especiais é contratado por um bilionário de Hong Kong para formar um grupo implacável que terá uma única missão: eliminar os criminosos mais notórios e perigosos do mundo.",
		"shortDescription": "Um especialista em grupos de operações especiais é contratado por um bilionário de Hong Kong para formar um grupo implacável que terá uma única missão: eliminar os criminosos mais notórios e perigosos do mundo.",
		"year": 2019
	}, {
		"availableChannels": [{
			"hashKey": "tc_pipoca",
			"title": "TcPipoca",
			"shortDescription": "",
			"isElegible": false,
			"number": 103,
			"source": 1,
			"type": 1,
			"highlights": {
				"items": []
			}
		}, {
			"hashKey": "tc_pipoca_hd",
			"title": "TcPipocaHd",
			"shortDescription": "",
			"isElegible": false,
			"number": 503,
			"source": 1,
			"type": 1,
			"highlights": {
				"items": []
			}
		}, {
			"hashKey": "canal_telecine",
			"title": "CanalTelecine",
			"shortDescription": "",
			"isElegible": false,
			"number": 22004,
			"type": 2,
			"highlights": {
				"items": []
			}
		}],
		"title": "Creed II",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5affd0efa2ccaf31aefa0f99/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5affd0efa2ccaf31aefa0f99/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Ação e Aventura, Drama",
		"cast": [],
		"programId": "MV034770970000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "12",
		"description": "Em 1985, o pugilista russo, Ivan Drago, matou o ex-campeão estadunidense, Apollo Creed, em uma trágica disputa que paralisou o mundo. Indo contra a vontade do treinador Rocky Balboa, Adonis Creed, filho de Apollo e atual campeão, aceita um desafio do filho de Drago, outro lutador perigoso. Sob a tutela de Rocky, Adonis treina para o embate de sua vida, um encontro com o destino que logo se torna sua obsessão. Agora, Creed e Balboa devem enfrentar o passado que voltou para os assombrar.",
		"shortDescription": "Adonis enfrenta o maior desafio de sua vida: um inimigo que está ligado ao passado de sua família. Juntos, ele e Rocky enfrentarão o passado e descobrirão pelo que vale a pena lutar.",
		"year": 2018
	}, {
		"availableChannels": [],
		"title": "Rocketman",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5bb1ef0f5d046ecd5112a94c/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5bb1ef0f5d046ecd5112a94c/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Biografia, Drama, Musical",
		"cast": [],
		"programId": "MV035011820000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 121,
		"parentalRating": "14",
		"description": "A trajetória de como o tímido Reginald Dwight se transformou em Elton John, ícone da música pop. Desde a infância complicada, fruto do descaso do pai pela família, sua história de vida é contada através da releitura das músicas do superstar, incluindo a relação do cantor com o compositor e parceiro profissional Bernie Taupin e o empresário e o ex-amante John Reid.",
		"shortDescription": "Extremamente talentoso mas muito tímido, o pianista prodígio Reginald Dwight muda seu nome para Elton John e torna-se uma estrela da música de renome internacional durante os anos 1970.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Juntos Para Sempre",
		"isBlocked": false,
		"images": [{
			"width": 300,
			"height": 450,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5bb43d9e875fbc7fbbebfa6e/5a563880332c65000165b739_3_300x450.jpeg"
		}, {
			"width": 300,
			"height": 450,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5bb43d9e875fbc7fbbebfa6e/5a563880332c65000165b739_3_300x450.jpeg"
		}],
		"categories": "Drama, Fantasia",
		"cast": [],
		"programId": "MV035038190000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "12",
		"description": "Ethan e sua jovem neta CJ vivem em uma fazenda do Michigan com seu cachorro Bailey. Quando a mãe de CJ decide levá-la embora, Bailey reencarna em um filhote e embarca em uma jornada para acompanhar a garota.\n",
		"shortDescription": "Ethan e sua jovem neta CJ vivem em uma fazenda do Michigan com seu cachorro Bailey. Quando a mãe de CJ decide levá-la embora, Bailey reencarna em um filhote e embarca em uma jornada para acompanhar a garota.",
		"year": 2019
	}, {
		"availableChannels": [{
			"hashKey": "canal_telecine",
			"title": "CanalTelecine",
			"shortDescription": "",
			"isElegible": false,
			"number": 22004,
			"type": 2,
			"highlights": {
				"items": []
			}
		}],
		"title": "Atentado ao Hotel Taj Mahal",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d6f13a5c14c8909a600bac0/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d6f13a5c14c8909a600bac0/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Drama, Suspense",
		"cast": [],
		"programId": "MV035011950000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "16",
		"description": "Mumbai, Índia, 2008. Um grupo de terroristas chega à cidade de barco, disposto a promover uma série de ataques em locais icônicos da cidade. Um deles é o luxuoso hotel Taj Mahal, bastante conhecido pela quantidade de estrangeiros e artistas que nele se hospedam. Quando os ataques começam, um humilde funcionário tenta ajudar todos a se protegerem, enquanto um casal busca algum meio de retornar ao quarto em que está hospedado, já que nele está seu bebê e sua babá.",
		"shortDescription": "Mumbai, Índia, 2008. Um grupo de terroristas chega à cidade de barco, disposto a promover uma série de ataques em locais icônicos da cidade.",
		"year": 2018
	}, {
		"availableChannels": [{
			"hashKey": "canal_telecine",
			"title": "CanalTelecine",
			"shortDescription": "",
			"isElegible": false,
			"number": 22004,
			"type": 2,
			"highlights": {
				"items": []
			}
		}],
		"title": "Hellboy",
		"isBlocked": false,
		"images": [{
			"width": 300,
			"height": 450,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5baa99a6630a7a699d4d462e/5a563880332c65000165b739_3_300x450.png"
		}, {
			"width": 300,
			"height": 450,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5baa99a6630a7a699d4d462e/5a563880332c65000165b739_3_300x450.png"
		}],
		"categories": "Ação e Aventura, Fantasia",
		"cast": [],
		"programId": "MV034938720000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "16",
		"description": "Ao chegar à Terra ainda criança, após ser invocado por um feiticeiro contratado pelo governo nazista, Hellboy foi criado como um filho por Trevor Bruttenholm, um professor que estava no local no momento em que emergiu do inferno. Já adulto, Hellboy se torna um aliado dos humanos na batalha contra monstros de todo tipo. Quando a poderosa feiticeira Nimue, também conhecida com a Rainha Sangrenta, insinua seu retorno, ele logo é convocado para enfrentá-la.",
		"shortDescription": "Ao chegar à Terra ainda criança, após ser invocado por um feiticeiro contratado pelo governo nazista, Hellboy foi criado como um filho por Trevor Bruttenholm.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Superação: O Milagre da Fé",
		"isBlocked": false,
		"images": [{
			"width": 220,
			"height": 340,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/220x340/images/sky-content-hub-prd/5bb3070758ce872b07e4c1a1/5a563880332c65000165b739_3_220x340.jpeg"
		}, {
			"width": 220,
			"height": 340,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/220x340/images/sky-content-hub-prd/5bb3070758ce872b07e4c1a1/5a563880332c65000165b739_3_220x340.jpeg"
		}],
		"categories": "Drama",
		"cast": [],
		"programId": "MV034977170000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "10",
		"description": "John Smith, um menino de 14 anos, passeava com a família quando, sofreu um acidente. Chegando ao hospital, John foi considerado morto até que sua mãe, Joyce Smith, juntou todas as suas forças e sua prece poderosa foi responsável por um milagre inédito.\n\nEsse filme também está disponível na TV para os equipamentos PLUS não conectados.",
		"shortDescription": "Um menino é considerado morto após se afogar e sua mãe reza por um milagre pela sua sobrevivência.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Godzilla II: Rei dos Monstros",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5b9ea71feb655263b367865c/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5b9ea71feb655263b367865c/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Ação e Aventura, Ficção Científica",
		"cast": [],
		"programId": "MV035018130000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "12",
		"description": "Membros da agência Monarch enfrentam monstros gigantescos, incluindo o poderoso Godzilla, que entra em choque com Mothra, Rodan e seu maior inimigo, King Ghidorah, o monstro de três cabeças. Essas antigas superespécies disputam a supremacia, deixando a própria existência da humanidade em risco.\n\nEsse filme também está disponível na TV para os equipamentos PLUS não conectados.",
		"shortDescription": "Membros da agência Monarch enfrentam monstros gigantescos, incluindo o poderoso Godzilla, que entra em choque com Mothra, Rodan e seu maior inimigo, King Ghidorah, o monstro de três cabeças.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Pokémon: Detetive Pikachu",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5baa18be2ade438bc53e25c6/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5baa18be2ade438bc53e25c6/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Ação e Aventura, Infantil",
		"cast": [],
		"programId": "MV034991790000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "L",
		"description": "Um jovem une forças com o detetive Pikachu para desvendar o mistério por trás do desaparecimento de seu pai. Perseguindo pistas pelas ruas de Ryme City, a dupla dinâmica logo descobre uma trama desonesta que representa uma ameaça ao universo Pokémon.\n\nEsse filme também está disponível na TV para os equipamentos HD e PLUS não conectados.",
		"shortDescription": "Um jovem une forças com Pikachu para desvendar o mistério por trás do desaparecimento de seu pai.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Shazam!",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5af979d174d04d570ab73d9f/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5af979d174d04d570ab73d9f/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Ação e Aventura",
		"cast": [],
		"programId": "MV034924300000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "12",
		"description": "Billy Batson é um esperto garoto de 14 anos que pode se transformar magicamente no super-herói Shazam. Seus poderes logo são colocados à prova contra o perverso Dr. Thaddeus Sivana.",
		"shortDescription": "Billy Batson é um esperto garoto de 14 anos que pode se transformar magicamente no super-herói Shazam. Seus poderes logo são colocados à prova contra o perverso Dr. Thaddeus Sivana.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Rota de Fuga 3 - O Resgate",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d5c3bc3eab322f4ff3dfd9d/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d5c3bc3eab322f4ff3dfd9d/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Ação e Aventura",
		"cast": [],
		"programId": "MV035008330000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "16",
		"description": "Ray Breslin e Trent DeRosa se unem a Hush para resgatar um dos membros de sua equipe que é mantido em cativeiro na penitenciária conhecida como Devils Station, uma prisão de onde ninguém nunca sai.",
		"shortDescription": "Ray Breslin e Trent DeRosa se unem a Hush para resgatar um dos membros de sua equipe que é mantido em cativeiro na penitenciária conhecida como Devil's Station, uma prisão onde ninguém nunca sai.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Cemitério Maldito",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5afba55a34e619555a91d6ea/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5afba55a34e619555a91d6ea/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Suspense, Terror",
		"cast": [],
		"programId": "MV034926090000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "16",
		"description": "Uma família se muda para uma nova casa, localizada nos arredores de um antigo cemitério amaldiçoado, usado para enterrar animais de estimação, mas que já foi usado para sepultamento de indígenas. Algumas coisas estranhas começam a acontecer, transformando a vida cotidiana dos moradores em um pesadelo.\n",
		"shortDescription": "Uma família se muda para perto de um misterioso cemitério que guarda um mal indescritível.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "Luccas Neto em: Acampamento de Férias",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d488b5099050119b664f64b/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5d488b5099050119b664f64b/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Comédia, Infantil, Musical",
		"cast": [],
		"programId": "MV034983350000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "L",
		"description": "Luccas e Gi vão passar as férias no acampamento onde acontece a Gincana mais famosa do mundo. O único problema é que os 'implicantes' também foram para lá. Um musical para todas as idades que vai dar férias ao mau humor.",
		"shortDescription": "Luccas e Gi vão passar as férias no acampamento onde acontece a Gincana mais famosa do mundo. O único problema é que os 'implicantes' também foram para lá. Um musical para todas as idades que vai dar férias ao mau humor.",
		"year": 2019
	}, {
		"availableChannels": [],
		"title": "A Maldição da Chorona",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5bae7dc31c0b8b0a188f326d/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5bae7dc31c0b8b0a188f326d/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Suspense, Terror",
		"cast": [],
		"programId": "MV034934570000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "14",
		"description": "Em Los Angeles, na década de 1970, uma assistente social cria seus dois filhos sozinha depois de ficar viúva. Ela começa a ver semelhanças entre um caso que está investigando e a entidade sobrenatural chamada de Chorona. A lenda conta que, em vida, Chorona afogou seus filhos após um ataque de ciúmes e depois se jogou no rio, se debulhando em lágrimas. Agora ela chora eternamente, indo atrás e capturando outras crianças para substituir seus filhos.\n\nEsse filme também está disponível na TV para os equipamentos PLUS não conectados.",
		"shortDescription": "Uma mulher cria seus dois filhos sozinha e começa a presenciar a entidade sobrenatural Chorona.",
		"year": 2019
	}, {
		"availableChannels": [{
			"hashKey": "tc_pipoca",
			"title": "TcPipoca",
			"shortDescription": "",
			"isElegible": false,
			"number": 103,
			"source": 1,
			"type": 1,
			"highlights": {
				"items": []
			}
		}, {
			"hashKey": "tc_pipoca_hd",
			"title": "TcPipocaHd",
			"shortDescription": "",
			"isElegible": false,
			"number": 503,
			"source": 1,
			"type": 1,
			"highlights": {
				"items": []
			}
		}, {
			"hashKey": "tc_premium",
			"title": "TcPremium",
			"shortDescription": "",
			"isElegible": false,
			"number": 100,
			"source": 1,
			"type": 1,
			"highlights": {
				"items": []
			}
		}],
		"title": "Alita - Anjo de Combate",
		"isBlocked": false,
		"images": [{
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5c540afecaa4ee405eb9fc1e/5a563880332c65000165b739_3_1000x1500.jpeg"
		}, {
			"width": 1000,
			"height": 1500,
			"type": 3,
			"isS3": true,
			"url": "https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5c540afecaa4ee405eb9fc1e/5a563880332c65000165b739_3_1000x1500.jpeg"
		}],
		"categories": "Ação e Aventura, Animação, Fantasia, Ficção Científica",
		"cast": [],
		"programId": "MV034983160000",
		"programType": "Program",
		"sheetType": 1,
		"duration": 0,
		"parentalRating": "14",
		"description": "Em um futuro cyberpunk apocalíptico, Alita é uma ciborgue quase destruída encontrada em um ferro-velho por um caçador de recompensas. O homem a conserta e a adota como filha. Inspirada no pai adotivo, a garota torna-se uma caçadora de recompensas poderosa.",
		"shortDescription": "Uma ciborgue adolescente precisa usar suas habilidades únicas de luta para desvendar seu passado.",
		"year": 2019
	}]
}];


// var outArr = [];

//let changed = arr.map((elem, index) => {
  //  let x = elem.id * 10

    //  if ( !arr.includes(index) ) outArr.push(index)
     
    //console.log('outArr', outArr);
    //outArr.push(outArr.indexOf(index));

    //return x;
  //  return outArr;
//})


//arr.forEach((elem, index) => {
	// console.log(elem.categ);
    
   // outArr.push(elem.categ);
    
//});




console.clear();

function filtrar(prop) {
console.info("Function Filtrar content: ")

	var arrFinal = [];
	
    let outArr = arr.map((element, index) => {

      arrFinal[element.type] = ( typeof arrFinal[element.type] != 'undefined' && arrFinal[element.type] instanceof Array ) ? arrFinal[element.type] : []


      arrFinal[element.type].push(element.type);
      arrFinal[element.type].push(element.title);
      
      let itmMovies = element.movies;
      arrFinal[element.type].push(itmMovies);
      //arrFinal[element.type].push(itmMovies[0]['images'][0]);
      console.log('logg: ', itmMovies)
    });
    
    return arrFinal[prop];
    
   
}


console.info("- - - - - - - - - -")
console.log(filtrar("carousel-portrait"));



// document.getElementById("demo").innerHTML = outArr;

</script>
</body>
</html>
*/
