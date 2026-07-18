const portraitNavigationTranslations = [
	"portrait-hub",
	"female",
	"male",
	"couple",
	"family",
	"brand",
	"creative",
	"maternity",
	"engagement",
	"pets",
	"car-portrait",
	"friendship",
	"headshot",
];

const automotiveNavigationTranslations = [
	"cars-hub",
	"car-photoshoot",
	"used-car",
	"business-automotive",
];

const eventNavigationTranslations = [
	"events-hub",
	"wedding",
	"private-event",
	"corporate-event",
];

module.exports = {
	name: "Roland Szabó Photography",
	url: "https://rolandszabo.photo",
	currentYear: new Date().getFullYear(),

	schema: {
		organization: {
			name: "Roland Szabó Photography",
			alternateName: [
				"Szabó Roland Photography",
				"Szabó Roland",
			],
			url: "https://rolandszabo.photo/",
			email: "hi@rolandszabo.photo",
			telephone: "+36 20 591 4620",
			sameAs: [
				"https://www.instagram.com/rolandszabo.photo/",
			],
		},

		person: {
			name: "Szabó Roland",
			alternateName: "Roland Szabó",
			url: "https://rolandszabo.photo/hu/rolam/",
			email: "hi@rolandszabo.photo",
			telephone: "+36 20 591 4620",
			sameAs: [
				"https://www.instagram.com/rolandszabo.photo/",
			],
		},
	},

	languages: [
		{
			code: "en",
			label: "English",
		},
		{
			code: "hu",
			label: "Magyar",
		},
	],

	en: {
		ogLocale: "en_GB",
		languageTag: "en-GB",

		schema: {
			personJobTitle: "Photographer",
		},

		brand: {
			name: "Roland Szabó",
			tagline: "Photography for people who hate being photographed.",
		},

		seo: {
			siteTitle: "Roland Szabó | Budapest Photographer",
			metaDescription: "A relaxed photography experience in Budapest, from portraits and cars to events — without the awkwardness.",
		},

		accessibility: {
			skipToContent: "Skip to main content",
			breadcrumbs: "Breadcrumbs",
			nextLinks: "More pages",
			pageNavigation: "On-page navigation",
			lastUpdated: "Last updated:",
		},

		forms: {
			successPath: "/en/thank-you/",
			honeypotLabel: "Leave this field blank:",
			privacyText: "I only use the information submitted through this form to contact you.",
			privacyLink: "Privacy Policy",
			privacyHref: "/en/privacy-policy/",
		},

		navigation: {
			logoAriaLabel: "Roland Szabó homepage",
			menuOpenLabel: "Open menu",
			menuCloseLabel: "Close menu",
			ariaLabel: "Main navigation",
			languageSwitch: {
				label: "HU",
				ariaLabel: "Switch to the Hungarian version of this page",
			},
			items: [
				{
					label: "Portrait Photography",
					href: "/en/services/portrait-photography-budapest/",
					activeTranslations: portraitNavigationTranslations,
				},
				{
					label: "Car Photography",
					href: "/en/services/automotive-photography-budapest/",
					activeTranslations: automotiveNavigationTranslations,
				},
				{
					label: "Event Photography",
					href: "/en/services/event-photography-budapest/",
					activeTranslations: eventNavigationTranslations,
				},
				{
					label: "Portfolio",
					href: "/en/portfolio/",
					activeTranslations: ["portfolio"],
					divider: true,
				},
				{
					label: "Contact",
					href: "/en/contact/",
					activeTranslations: ["contact"],
				},
			],
		},

		footer: {
			ariaLabel: "Footer navigation",
			description: "Photography for people who hate being photographed. Portrait, car and event photography in Budapest.",
			copyright: "All rights reserved.",
			location: "Budapest, Hungary",
			groups: [
				{
					title: "Services",
					items: [
						{
							label: "Portrait Photography",
							href: "/en/services/portrait-photography-budapest/",
						},
						{
							label: "Car Photography",
							href: "/en/services/automotive-photography-budapest/",
						},
						{
							label: "Event Photography",
							href: "/en/services/event-photography-budapest/",
						},
						{
							label: "Real Estate Photography",
							href: "/en/services/real-estate-photography-budapest/",
						},
						{
							label: "Photography for Businesses",
							href: "/en/services/photography-for-businesses/",
						},
						{
							label: "All Services",
							href: "/en/services/",
						},
					],
				},
				{
					title: "Explore",
					items: [
						{
							label: "Portfolio",
							href: "/en/portfolio/",
						},
						{
							label: "About",
							href: "/en/about/",
						},
						{
							label: "Testimonials",
							href: "/en/testimonials/",
						},
						{
							label: "Blog",
							href: "/en/blog/",
						},
						{
							label: "Budapest Photo Walk",
							href: "/en/budapest-photo-walk/",
						},
						{
							label: "Gear",
							href: "/en/gear/",
						},
					],
				},
				{
					title: "Contact",
					items: [
						{
							label: "Contact Page",
							href: "/en/contact/",
						},
						{
							label: "+36 20 591 4620",
							href: "tel:+36205914620",
						},
						{
							label: "hi@rolandszabo.photo",
							href: "mailto:hi@rolandszabo.photo",
						},
						{
							label: "Instagram",
							href: "https://instagram.com/rolandszabo.photo/",
						},
					],
				},
				{
					title: "Legal",
					items: [
						{
							label: "Privacy Policy",
							href: "/en/privacy-policy/",
						},
						{
							label: "Terms and Conditions",
							href: "/en/terms-and-conditions/",
						},
						{
							label: "Cookie Policy",
							href: "/en/cookie-policy/",
						},
					],
				},
			],
		},
	},

	hu: {
		ogLocale: "hu_HU",
		languageTag: "hu-HU",

		schema: {
			personJobTitle: "Fotós",
		},

		brand: {
			name: "Szabó Roland",
			tagline: "Fotózás azoknak, akik utálnak fotózkodni.",
		},

		seo: {
			siteTitle: "Szabó Roland | Budapesti Fotós",
			metaDescription: "Élményfotózás portréktól autókig, feszengés nélkül.",
		},

		accessibility: {
			skipToContent: "Ugrás a fő tartalomra",
			breadcrumbs: "Oldalhierarchia",
			nextLinks: "További oldalak",
			pageNavigation: "Oldalon belüli navigáció",
			lastUpdated: "Utolsó frissítés:",
		},

		forms: {
			successPath: "/hu/koszonjuk/",
			honeypotLabel: "Ezt a mezőt hagyd üresen:",
			privacyText: "Az űrlapon megadott adatokat kizárólag a kapcsolatfelvételhez használom.",
			privacyLink: "Adatvédelmi tájékoztató",
			privacyHref: "/hu/adatvedelmi-nyilatkozat/",
		},

		navigation: {
			logoAriaLabel: "Roland Szabó főoldal",
			menuOpenLabel: "Menü megnyitása",
			menuCloseLabel: "Menü bezárása",
			ariaLabel: "Fő navigáció",
			languageSwitch: {
				label: "EN",
				ariaLabel: "Váltás az oldal angol változatára",
			},
			items: [
				{
					label: "Portréfotózás",
					href: "/hu/szolgaltatasok/portre-fotozas-budapest/",
					activeTranslations: portraitNavigationTranslations,
				},
				{
					label: "Autófotózás",
					href: "/hu/szolgaltatasok/auto-fotozas-budapest/",
					activeTranslations: automotiveNavigationTranslations,
				},
				{
					label: "Eseményfotózás",
					href: "/hu/szolgaltatasok/esemeny-fotozas-budapest/",
					activeTranslations: eventNavigationTranslations,
				},
				{
					label: "Portfólió",
					href: "/hu/portfolio/",
					activeTranslations: ["portfolio"],
					divider: true,
				},
				{
					label: "Kapcsolat",
					href: "/hu/kapcsolat/",
					activeTranslations: ["contact"],
				},
			],
		},

		footer: {
			ariaLabel: "Lábléc navigáció",
			description: "Fotózás azoknak, akik utálnak fotózkodni. Portré-, autó- és eseményfotózás Budapesten.",
			copyright: "Minden jog fenntartva.",
			location: "Budapest, Magyarország",
			groups: [
				{
					title: "Szolgáltatások",
					items: [
						{
							label: "Portréfotózás",
							href: "/hu/szolgaltatasok/portre-fotozas-budapest/",
						},
						{
							label: "Autófotózás",
							href: "/hu/szolgaltatasok/auto-fotozas-budapest/",
						},
						{
							label: "Eseményfotózás",
							href: "/hu/szolgaltatasok/esemeny-fotozas-budapest/",
						},
						{
							label: "Ingatlanfotózás",
							href: "/hu/szolgaltatasok/ingatlan-fotozas-budapest/",
						},
						{
							label: "Vállalkozásoknak",
							href: "/hu/szolgaltatasok/fotozas-vallalkozasoknak/",
						},
						{
							label: "Összes szolgáltatás",
							href: "/hu/szolgaltatasok/",
						},
					],
				},
				{
					title: "További oldalak",
					items: [
						{
							label: "Portfólió",
							href: "/hu/portfolio/",
						},
						{
							label: "Rólam",
							href: "/hu/rolam/",
						},
						{
							label: "Vélemények",
							href: "/hu/rolam-mondtak/",
						},
						{
							label: "Blog",
							href: "/hu/blog/",
						},
						{
							label: "Budapest Photo Walk",
							href: "/hu/budapest-photo-walk/",
						},
						{
							label: "Felszerelés",
							href: "/hu/felszereles/",
						},
					],
				},
				{
					title: "Kapcsolat",
					items: [
						{
							label: "Kapcsolat oldal",
							href: "/hu/kapcsolat/",
						},
						{
							label: "+36 20 591 4620",
							href: "tel:+36205914620",
						},
						{
							label: "hi@rolandszabo.photo",
							href: "mailto:hi@rolandszabo.photo",
						},
						{
							label: "Instagram",
							href: "https://instagram.com/rolandszabo.photo/",
						},
					],
				},
				{
					title: "Jogi információk",
					items: [
						{
							label: "Adatvédelmi tájékoztató",
							href: "/hu/adatvedelmi-nyilatkozat/",
						},
						{
							label: "Általános Szerződési Feltételek",
							href: "/hu/altalanos-szerzodesi-feltetelek/",
						},
						{
							label: "Cookie-tájékoztató",
							href: "/hu/cookie-politika/",
						},
					],
				},
			],
		},
	},
};
