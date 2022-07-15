module.exports = {
	getItems: function() {
		if (this.randomItems == null) {
			this.randomItems = this.items.sort(() => 0.5 - Math.random());
		}
		return this.randomItems.slice(0, 3);
	},
	randomItems: null,
	items: [
		{
			photo: "/assets/images/testimonial-kata.jpg",
			hu: {
				name: "P. Kata",
				text: "Roland által kiléptem a kamerám mögül, és a gyönyörűen virágzó fák alatt, az aranyórában készítettük el ezt a csodás sorozatot. Nem mellesleg, kezdő fotósként igazán sok mindent tanulhattam tőle a közös munka során &ndash; mindezt a jövőben alkalmazni is fogom.",
				link: "/hu/portre/kata/",
			},
			en: {
				name: "Kata P.",
				text: "Roland helped me step out of my comfort zone and created this wonderful set under the beautifully blossoming flowers at golden hour. Not to mention, as a beginner photographer, I got to learn lots of new things from him, which I'll certainly use in my upcoming work.",
				link: "/en/portraiture/kata/",
			},
		},
		{
			photo: "/assets/images/testimonial-viktoria.jpg",
			hu: {
				name: "M. Viktória",
				text: "Rolival a fotózásaink hangulata az első pillanattól kezdve laza volt. Könnyű volt feloldódni, nem éreztem gátlásosnak magam, sokat viccelődtünk, amik néha belekontárkodtak egy-egy \"remekműbe\". A zseni hangulatnak köszönhetően a közös munkáinknak kivétel nélkül olyan produktumai születtek, amiket bátran osztottam meg a barátaimmal, illetve a közösségi média felületein.",
				link: "/hu/portre/viki/",
			},
			en: {
				name: "Viktória M.",
				text: "The mood of our photoshoots with Roland was super laid-back from the very beginning. It was easy to relax, I didn't feel inhibited at all, and we've had great laughs that would sometimes break (or make!) a photo. Thanks to the chilled vibes, we've made amazing photos that I happily shared with my friends and on social media.",
				link: "/en/portraiture/viki/",
			},
		},
		{
			photo: "/assets/images/testimonial-vivien.jpg",
			hu: {
				name: "Vivien É.",
				text: "Rolival a közös munka mindig jókedvűen és gördülékenyen zajlik, az egész fotózás jó hangulatú. Általában mindig kitalálunk valami kicsit újat és kreatívat. Roland csodásan megvalósítja azokat a képeket, amiket a fejemben elképzelek. Bátran keresem meg kreatívabb, nehezebb kérésekkel is, és mindig valami elképesztő fotósorozat készül belőle. Mindenkinek csak ajánlani tudom.",
				link: "/hu/portre/vivi/",
			},
			en: {
				name: "É. Vivien",
				text: "Working with Roland has always been very fun and smooth, all of our photoshoots took place in a light mood. I could approach him with more creative and difficult concepts and Roland could make my ideas come to life with ease, in the form of staggering photo sets. I can highly recommend him.",
				link: "/en/portraiture/vivi/",
			},
		},
		{
			photo: "/assets/images/testimonial-luca-david.jpg",
			hu: {
				name: "P. Luca & P. Dávid",
				text: "Rolanddal egyszerűen fantasztikus volt a fotózás. Nagyon kedves, segítőkész és igyekszik a legkreatívabban megörökíteni a pillanatokat. Mindenkinek boldogan ajánlom. Garantálom, hogy nem mindennapi élményben lesz részetek, ha Őt választjátok. Nem csak figyelmes, de maximálisan professzionális (és nem mellesleg a humorérzéke is páratlan)!",
				link: "/hu/portre/luca-david/",
			},
			en: {
				name: "Luca P. & Dávid P.",
				text: "Shooting with Roland was simply fantastic. He's really kind, helpful, and always eager to capture moments in the most creative way. I can happily recommend him. I can guarantee that you'll be in for an extraordinary experience if you're choosing him. He's not only attentive, but highly professional (and by the way, his sense of humour is inimitable)!",
				link: "/en/portraiture/luca-david/",
			},
		},
		{
			photo: "/assets/images/testimonial-dori.jpg",
			hu: {
				name: "E. Dóri",
				text: "Ismered azt az érzést, hogy rólad nem lehet jó képet csinálni? Én ezzel a mondattal indultam el fotózni Rolanddal, aki ezt követően a végtelen türelmével, szuper látásmódjával és kreativitásával bebizonyította, hogy nincs igazam, én pedig nem győztem utána válogatni a jobbnál jobb képek közül. A gyönyörű képek mellé pedig nem mellékesen grátiszként egy végtelenül jófej és vicces fotóst is kapsz.",
				link: "/hu/portre/dori/",
			},
			en: {
				name: "Dóri E.",
				text: "Do you know that feeling when noone can take proper photos of you? I went with this exact feeling to Roland, who, thanks to his great vision, creativity and endless patience, proved me wrong; and then there was me trying to select from a great number of amazing pictures he'd delivered. As a bonus to the beautiful photos, you also get an endlessly cool and funny photographer.",
				link: "/en/portraiture/dori/",
			},
		},
	]
};
